import { test, expect } from "@/e2e/fixtures";

test.describe("External Links", () => {
  test("footer has GitHub, LinkedIn, and view source links", async ({
    page,
  }) => {
    await page.goto("/");

    const githubLink = page.getByRole("link", { name: "github" });
    await expect(githubLink).toBeVisible();
    await expect(githubLink).toHaveAttribute(
      "href",
      "https://github.com/paulgeorge35",
    );

    const linkedinLink = page.getByRole("link", { name: "linkedin" });
    await expect(linkedinLink).toBeVisible();
    await expect(linkedinLink).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/paulgeorge35/",
    );

    const viewSourceLink = page.getByRole("link", { name: "view source" });
    await expect(viewSourceLink).toBeVisible();
    await expect(viewSourceLink).toHaveAttribute(
      "href",
      /github\.com\/paulgeorge35\/portfolio-website/,
    );
  });

  test("footer social links point to external origins", async ({ page }) => {
    await page.goto("/");

    for (const name of ["github", "linkedin", "view source"] as const) {
      const link = page.getByRole("link", { name });
      const href = await link.getAttribute("href");
      expect(href).toMatch(/^https:\/\//);
    }
  });

  test("homepage mailto link has correct email address", async ({ page }) => {
    await page.goto("/");

    const reachOutLink = page.getByRole("link", { name: "[reach out]" });
    await expect(reachOutLink).toHaveAttribute(
      "href",
      "mailto:contact@paulgeorge.dev",
    );
  });
});
