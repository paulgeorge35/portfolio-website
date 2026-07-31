import { test, expect } from "@/e2e/fixtures";

test.describe("404 Not Found", () => {
  test("shows 404 page for nonexistent routes", async ({ page }) => {
    await page.goto("/nonexistent");

    await expect(
      page.getByRole("heading", { name: "404 - Page not found" }),
    ).toBeVisible();

    await expect(
      page.getByText(
        "I'm sorry, but the page you're looking for doesn't exist.",
      ),
    ).toBeVisible();
  });

  test('"Back to homepage" link navigates home', async ({ page }) => {
    await page.goto("/nonexistent");

    await page.getByRole("link", { name: "Back to homepage" }).click();
    await expect(page).toHaveURL("/");
    await expect(
      page.getByRole("heading", { name: "Paul George" }),
    ).toBeVisible();
  });
});
