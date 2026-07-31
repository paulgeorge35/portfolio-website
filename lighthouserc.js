const isDesktop = process.env.LHCI_FORM_FACTOR === "desktop";

module.exports = {
  ci: {
    collect: {
      numberOfRuns: 3,
      settings: {
        formFactor: isDesktop ? "desktop" : "mobile",
        screenEmulation: {
          mobile: !isDesktop,
        },
        extraHeaders: {
          "x-vercel-protection-bypass":
            process.env.VERCEL_AUTOMATION_BYPASS_SECRET ?? "",
          "x-vercel-set-bypass-cookie": "true",
        },
        // Vercel preview URLs always send X-Robots-Tag: noindex.
        skipAudits: ["is-crawlable"],
      },
    },
  },
};
