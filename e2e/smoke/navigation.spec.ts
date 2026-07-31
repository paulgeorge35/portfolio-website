import { test, expect } from "@/e2e/fixtures";

test.describe("Navigation", { tag: "@smoke" }, () => {
  test("can navigate between all pages", async ({ page }) => {
    await page.goto("/");
    await expect(
      page.getByRole("heading", { name: "Paul George" }),
    ).toBeVisible();

    await page.getByRole("link", { name: "projects" }).click();
    await expect(page).toHaveURL("/projects");

    await page.getByRole("link", { name: "home" }).click();
    await expect(page).toHaveURL("/");
  });

  test("active nav link shows underline", async ({ page }) => {
    await page.goto("/");

    const homeLink = page.getByRole("link", { name: "home" });
    await expect(homeLink.locator(".w-full")).toBeVisible();

    await page.getByRole("link", { name: "projects" }).click();
    await expect(page).toHaveURL("/projects");

    const projectsLink = page.getByRole("link", { name: "projects" });
    await expect(projectsLink.locator(".w-full")).toBeVisible();
  });
});
