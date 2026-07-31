import { test, expect } from "@/e2e/fixtures";

test.describe("Homepage", { tag: "@smoke" }, () => {
  test("loads and displays the main heading", async ({ page }) => {
    await page.goto("/");

    await expect(
      page.getByRole("heading", { name: "Paul George" }),
    ).toBeVisible();
  });

  test("displays navigation links", async ({ page }) => {
    await page.goto("/");

    await expect(page.getByRole("link", { name: "home" })).toBeVisible();
    await expect(page.getByRole("link", { name: "projects" })).toBeVisible();
    await expect(page.getByRole("link", { name: "contact" })).toBeVisible();
  });
});
