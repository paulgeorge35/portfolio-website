import { test as base, expect } from "@playwright/test";

/**
 * Default fixture pre-accepts cookie consent so banners don't obscure UI.
 * Cookie-consent tests should import from `@playwright/test` instead.
 */
export const test = base.extend({
  page: async ({ page }, use) => {
    await page.addInitScript(() => {
      localStorage.setItem("cookie-consent-v1", JSON.stringify("accepted"));
    });
    await use(page);
  },
});

export { expect };
