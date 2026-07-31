import { test, expect } from "@/e2e/fixtures";

test.describe("SEO & Accessibility", () => {
  test("homepage has correct title and meta description", async ({ page }) => {
    await page.goto("/");

    await expect(page).toHaveTitle("Portfolio | Paul George Tibulca");

    const metaDescription = page.locator('meta[name="description"]');
    await expect(metaDescription).toHaveAttribute(
      "content",
      "A compilation of my work and projects",
    );
  });

  test("homepage has a single h1", async ({ page }) => {
    await page.goto("/");

    await expect(page.locator("h1")).toHaveCount(1);
  });

  test("homepage image has alt text", async ({ page }) => {
    await page.goto("/");

    const image = page.getByRole("img", { name: "me" });
    await expect(image).toHaveAttribute("alt", "me");
  });

  test("projects page exposes project links", async ({ page }) => {
    await page.goto("/projects");

    const projectLinks = page.locator('a[class*="grid-cols-subgrid"]');
    await expect(projectLinks.first()).toBeVisible();
    expect(await projectLinks.count()).toBeGreaterThan(0);
  });

  test("privacy page has heading structure", async ({ page }) => {
    await page.goto("/privacy");

    await expect(
      page.getByRole("heading", { name: "Privacy Policy", level: 1 }),
    ).toBeVisible();

    const h2Count = await page.locator("h2").count();
    expect(h2Count).toBeGreaterThan(0);
  });

  test("html element has lang attribute", async ({ page }) => {
    await page.goto("/");

    await expect(page.locator("html")).toHaveAttribute("lang", "en");
  });
});
