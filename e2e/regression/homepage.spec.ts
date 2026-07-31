import { test, expect } from "@/e2e/fixtures";

test.describe("Homepage", () => {
  test("profile image loads with alt text", async ({ page }) => {
    await page.goto("/");

    const image = page.getByRole("img", { name: "me" });
    await expect(image).toBeVisible();
    await expect(image).toHaveAttribute("alt", "me");
  });

  test("displays full bio and tagline", async ({ page }) => {
    await page.goto("/");

    await expect(
      page.getByText("TypeScript Developer", { exact: true }),
    ).toBeVisible();

    await expect(
      page.getByText(
        "I'm a Romanian Full Stack TypeScript developer with a passion for building web applications",
      ),
    ).toBeVisible();
  });

  test('"stuff I\'ve built" link points to /projects', async ({ page }) => {
    await page.goto("/");

    const projectsLink = page.getByRole("link", {
      name: "[stuff I've built]",
    });
    await expect(projectsLink).toBeVisible();
    await expect(projectsLink).toHaveAttribute("href", "/projects");
  });

  test('"reach out" is a mailto link', async ({ page }) => {
    await page.goto("/");

    const reachOutLink = page.getByRole("link", { name: "[reach out]" });
    await expect(reachOutLink).toBeVisible();
    await expect(reachOutLink).toHaveAttribute("href", /^mailto:/);
  });

  test("animate-enter elements render on the page", async ({ page }) => {
    await page.goto("/");

    const animatedElements = page.locator(".animate-enter");
    await expect(animatedElements.first()).toBeAttached();
    await expect(animatedElements).toHaveCount(4);
  });

  test("has a single h1 heading", async ({ page }) => {
    await page.goto("/");

    await expect(page.locator("h1")).toHaveCount(1);
    await expect(page.locator("h1")).toHaveText("Paul George");
  });
});
