import { test, expect } from "@playwright/test";

test.describe("Cookie Consent", { tag: "@smoke" }, () => {
  test.beforeEach(async ({ context }) => {
    await context.addInitScript(() => {
      localStorage.removeItem("cookie-consent-v1");
    });
  });

  test("banner appears on first visit", async ({ page }) => {
    await page.goto("/");

    await expect(
      page.getByText(
        "This site uses tracking technologies. You may opt in or opt out of the use of these technologies.",
      ),
    ).toBeVisible();
    await expect(page.getByRole("button", { name: "Accept" })).toBeVisible();
    await expect(page.getByRole("button", { name: "Decline" })).toBeVisible();
  });

  test("accepting cookies dismisses the banner", async ({ page }) => {
    await page.goto("/");

    await page.getByRole("button", { name: "Accept" }).click();

    await expect(
      page.getByText(
        "This site uses tracking technologies. You may opt in or opt out of the use of these technologies.",
      ),
    ).not.toBeVisible();
  });

  test("declining cookies dismisses the banner", async ({ page }) => {
    await page.goto("/");

    await page.getByRole("button", { name: "Decline" }).click();

    await expect(
      page.getByText(
        "This site uses tracking technologies. You may opt in or opt out of the use of these technologies.",
      ),
    ).not.toBeVisible();
  });

  test("details link navigates to privacy page", async ({ page }) => {
    await page.goto("/");

    await page.getByRole("link", { name: "Details" }).click();
    await expect(page).toHaveURL("/privacy");
  });
});
