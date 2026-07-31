/**
 * Fetch PageSpeed Insights scores for production URL (mobile + desktop).
 * Outputs JSON to stdout for format-lighthouse-comment.mjs.
 *
 * Requires PAGESPEED_INSIGHTS_API_KEY env var.
 */

const SITE_URL = "https://paulgeorge.dev/";
const API_BASE = "https://www.googleapis.com/pagespeedonline/v5/runPagespeed";

const apiKey = process.env.PAGESPEED_INSIGHTS_API_KEY;

if (!apiKey) {
  console.error(
    "::error::PAGESPEED_INSIGHTS_API_KEY is not set. Add it as a GitHub repository secret (Google Cloud Console → PageSpeed Insights API).",
  );
  process.exit(1);
}

const CATEGORIES = ["performance", "accessibility", "best-practices", "seo"];

async function fetchPagespeed(strategy) {
  const params = new URLSearchParams({
    url: SITE_URL,
    strategy,
    key: apiKey,
  });
  for (const category of CATEGORIES) {
    params.append("category", category);
  }

  const response = await fetch(`${API_BASE}?${params}`);

  if (!response.ok) {
    const body = await response.text();
    throw new Error(
      `PageSpeed API error for ${strategy}: HTTP ${response.status} — ${body.slice(0, 500)}`,
    );
  }

  return response.json();
}

function extractProfile(data, strategy) {
  const lighthouse = data.lighthouseResult;
  if (!lighthouse) {
    throw new Error(`No lighthouseResult in PSI response for ${strategy}`);
  }

  const categories = lighthouse.categories ?? {};
  const audits = lighthouse.audits ?? {};

  return {
    strategy,
    url: lighthouse.finalUrl ?? SITE_URL,
    scores: {
      performance: categories.performance?.score ?? null,
      accessibility: categories.accessibility?.score ?? null,
      "best-practices": categories["best-practices"]?.score ?? null,
      seo: categories.seo?.score ?? null,
    },
    vitals: {
      lcp: audits["largest-contentful-paint"]?.numericValue ?? null,
      cls: audits["cumulative-layout-shift"]?.numericValue ?? null,
      tbt: audits["total-blocking-time"]?.numericValue ?? null,
    },
    reportUrl: `https://pagespeed.web.dev/analysis?url=${encodeURIComponent(SITE_URL)}&form_factor=${strategy}`,
  };
}

const strategies = ["mobile", "desktop"];

try {
  const profiles = [];

  for (const strategy of strategies) {
    const data = await fetchPagespeed(strategy);
    profiles.push(extractProfile(data, strategy));
  }

  const output = {
    siteUrl: SITE_URL,
    profiles,
    fetchedAt: new Date().toISOString(),
  };

  process.stdout.write(JSON.stringify(output));
} catch (error) {
  console.error(`::error::${error.message}`);
  process.exit(1);
}
