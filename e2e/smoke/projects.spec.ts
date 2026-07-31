import { test, expect } from "@/e2e/fixtures";

test.describe("Projects", { tag: "@smoke" }, () => {
  test("lists projects with descriptions and tags", async ({ page }) => {
    await page.goto("/projects");

    await expect(page.getByText("CDN", { exact: true })).toBeVisible();
    await expect(page.getByText("statoos", { exact: true })).toBeVisible();
    await expect(page.getByText("Next.js").first()).toBeVisible();
  });

  test("has GitHub link in footer note", async ({ page }) => {
    await page.goto("/projects");

    const githubLink = page.getByRole("link", { name: "[GitHub]" });
    await expect(githubLink).toBeVisible();
    await expect(githubLink).toHaveAttribute("href", /github\.com/);
  });
});
