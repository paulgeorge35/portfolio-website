import { test, expect } from "@/e2e/fixtures";

test.describe("External Links", () => {
  test("footer has GitHub, LinkedIn, X, and source links", async ({ page }) => {
    await page.goto("/");

    const xLink = page.getByRole("link", { name: "x", exact: true });
    await expect(xLink).toBeVisible();
    await expect(xLink).toHaveAttribute("href", "https://x.com/paulgeorge35");

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

    const sourceLink = page.getByRole("link", { name: "source", exact: true });
    await expect(sourceLink).toBeVisible();
    await expect(sourceLink).toHaveAttribute(
      "href",
      /github\.com\/paulgeorge35\/portfolio-website/,
    );
  });

  test("footer social links point to external origins", async ({ page }) => {
    await page.goto("/");

    for (const name of ["x", "github", "linkedin", "source"] as const) {
      const link = page.getByRole("link", { name, exact: true });
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
