import { test, expect } from "@/e2e/fixtures";
import { projects } from "@/lib/projects";

const projectLabels = projects.map((project) => project.label);
const currentlyWorkingOn = projects
  .filter((project) => project.current)
  .map((project) => project.label);

test.describe("Projects", () => {
  test("all projects are listed", async ({ page }) => {
    await page.goto("/projects");

    for (const label of projectLabels) {
      await expect(page.getByText(label, { exact: true })).toBeVisible();
    }
  });

  test("each project has a description", async ({ page }) => {
    await page.goto("/projects");

    const projectLinks = page.locator(
      'a[class*="grid-cols-subgrid"][href*="."]',
    );
    const count = await projectLinks.count();
    expect(count).toBeGreaterThanOrEqual(projectLabels.length);

    for (let i = 0; i < count; i++) {
      const description = projectLinks.nth(i).locator("p.text-pretty");
      await expect(description).not.toBeEmpty();
    }
  });

  test("projects display tag badges", async ({ page }) => {
    await page.goto("/projects");

    const tagBadges = page.locator("p.rounded-md.bg-stone-800\\/80");
    await expect(tagBadges.first()).toBeVisible();
    expect(await tagBadges.count()).toBeGreaterThan(0);
  });

  test('shows "currently working on" indicators for active projects', async ({
    page,
  }) => {
    await page.goto("/projects");

    for (const label of currentlyWorkingOn) {
      const projectLink = page.getByRole("link", { name: new RegExp(label) });
      await expect(projectLink).toBeVisible();
      await expect(
        projectLink.getByText("[currently working on]"),
      ).toBeVisible();
    }
  });

  test('"More projects" links to GitHub', async ({ page }) => {
    await page.goto("/projects");

    const githubLink = page.getByRole("link", { name: "[GitHub]" });
    await expect(githubLink).toBeVisible();
    await expect(githubLink).toHaveAttribute("href", /github\.com/);
    await expect(githubLink).toHaveAttribute("target", "_blank");
  });
});
