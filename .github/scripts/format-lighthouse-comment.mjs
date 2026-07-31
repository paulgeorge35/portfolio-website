/**
 * Format PageSpeed Insights JSON (from fetch-pagespeed.mjs) as a PR comment.
 *
 * Reads PSI_JSON env var or stdin; falls back to PSI_JSON_FILE path.
 */

import fs from "node:fs";

function readPsiJson() {
  if (process.env.PSI_JSON) {
    return JSON.parse(process.env.PSI_JSON);
  }

  const filePath = process.env.PSI_JSON_FILE;
  if (filePath && fs.existsSync(filePath)) {
    return JSON.parse(fs.readFileSync(filePath, "utf8"));
  }

  throw new Error(
    "No PSI data found. Set PSI_JSON or PSI_JSON_FILE (run fetch-pagespeed.mjs first).",
  );
}

function scoreEmoji(score) {
  const pct = Math.round(score * 100);
  if (pct >= 90) return "🟢";
  if (pct >= 50) return "🟠";
  return "🔴";
}

function formatScore(score) {
  if (score == null) return "—";
  return `${scoreEmoji(score)} ${Math.round(score * 100)}`;
}

function formatMs(ms) {
  if (ms == null) return "—";
  if (ms >= 1000) return `${(ms / 1000).toFixed(1)}s`;
  return `${Math.round(ms)}ms`;
}

function formatCls(value) {
  if (value == null) return "—";
  return value.toFixed(3);
}

function strategyLabel(strategy) {
  return strategy === "desktop" ? "Desktop" : "Mobile";
}

function renderProfile(profile) {
  const label = strategyLabel(profile.strategy);
  const categories = [
    ["Performance", "performance"],
    ["Accessibility", "accessibility"],
    ["Best Practices", "best-practices"],
    ["SEO", "seo"],
  ];

  const lines = [
    `### ${label}`,
    "_Single PageSpeed Insights lab run (same engine as pagespeed.web.dev)._",
    "",
    "| Category | Score |",
    "| --- | --- |",
    ...categories.map(([categoryLabel, key]) => {
      const score = profile.scores?.[key];
      return `| ${categoryLabel} | ${formatScore(score)} |`;
    }),
    "",
    "#### Core Web Vitals (lab)",
    "",
    `- **LCP:** ${formatMs(profile.vitals?.lcp)}`,
    `- **CLS:** ${formatCls(profile.vitals?.cls)}`,
    `- **TBT:** ${formatMs(profile.vitals?.tbt)}`,
    "",
  ];

  if (profile.reportUrl) {
    lines.push(
      `[View full ${label.toLowerCase()} report on PageSpeed Insights](${profile.reportUrl})`,
      "",
    );
  }

  return lines;
}

const psi = readPsiJson();
const siteUrl = psi.siteUrl || "https://paulgeorge.dev/";

const lines = [
  "<!-- lighthouse-preview -->",
  "## PageSpeed Insights (production)",
  "",
  `**URL:** ${siteUrl}`,
  "_Lab scores on production; does not measure the preview deployment URL._",
  "",
];

for (const profile of psi.profiles ?? []) {
  lines.push(...renderProfile(profile));
}

lines.push(
  "_Informational only — does not block merge._",
  "_Scores match what you see when auditing production on [PageSpeed Insights](https://pagespeed.web.dev/)._",
);

process.stdout.write(lines.join("\n"));
