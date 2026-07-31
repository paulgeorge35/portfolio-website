import { test as raw, expect } from "@playwright/test";

import { test } from "@/e2e/fixtures";

test.describe("Mobile layout", { tag: "@mobile" }, () => {
  test("homepage heading and nav are visible", async ({ page }) => {
    await page.goto("/");

    await expect(
      page.getByRole("heading", { name: "Paul George" }),
    ).toBeVisible();
    await expect(page.getByRole("link", { name: "home" })).toBeVisible();
    await expect(page.getByRole("link", { name: "projects" })).toBeVisible();
    await expect(page.getByRole("link", { name: "contact" })).toBeVisible();

    const viewport = page.viewportSize();
    expect(viewport).not.toBeNull();
    expect(viewport!.width).toBeLessThanOrEqual(450);
  });

  test("can navigate to projects on mobile", async ({ page }) => {
    await page.goto("/");

    await page.getByRole("link", { name: "projects" }).click();
    await expect(page).toHaveURL("/projects");
    await expect(page.getByText("CDN", { exact: true })).toBeVisible();
  });
});

raw.describe("Mobile cookie banner", { tag: "@mobile" }, () => {
  raw.beforeEach(async ({ context }) => {
    await context.addInitScript(() => {
      localStorage.removeItem("cookie-consent-v1");
    });
  });

  raw("cookie banner is usable on small screens", async ({ page }) => {
    await page.goto("/");

    const accept = page.getByRole("button", { name: "Accept" });
    await expect(accept).toBeVisible();
    await accept.click();
    await expect(accept).not.toBeVisible();
  });
});
