import { test, expect } from "@/e2e/fixtures";

test.describe("Navigation", () => {
  test("all nav items have correct hrefs", async ({ page }) => {
    await page.goto("/");

    await expect(page.getByRole("link", { name: "home" })).toHaveAttribute(
      "href",
      "/",
    );
    await expect(page.getByRole("link", { name: "projects" })).toHaveAttribute(
      "href",
      "/projects",
    );
    await expect(page.getByRole("link", { name: "contact" })).toHaveAttribute(
      "href",
      /^mailto:/,
    );
  });

  test("active nav underline visible on current page", async ({ page }) => {
    await page.goto("/");

    await expect(
      page.getByRole("link", { name: "home" }).locator(".w-full"),
    ).toBeVisible();

    await page.goto("/projects");

    await expect(
      page.getByRole("link", { name: "projects" }).locator(".w-full"),
    ).toBeVisible();
  });

  test("contact link shows external link icon", async ({ page }) => {
    await page.goto("/");

    const contactLink = page.getByRole("link", { name: "contact" });
    await expect(contactLink.locator("svg")).toBeVisible();
  });
});
