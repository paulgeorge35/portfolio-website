import { test, expect } from "@/e2e/fixtures";

test.describe("Privacy Policy", () => {
  test("displays all required sections", async ({ page }) => {
    await page.goto("/privacy");

    await expect(
      page.getByRole("heading", { name: "Privacy Policy", exact: true }),
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Introduction" }),
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Information We Collect" }),
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Cookies and Tracking Technologies" }),
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "How We Use Your Information" }),
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Data Protection" }),
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Your Rights" }),
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Changes to Privacy Policy" }),
    ).toBeVisible();
    await expect(page.getByRole("heading", { name: "Contact" })).toBeVisible();
  });

  test('shows "Last updated" date', async ({ page }) => {
    await page.goto("/privacy");

    await expect(page.getByText(/Last updated:/)).toBeVisible();
  });

  test("contact email is a mailto link", async ({ page }) => {
    await page.goto("/privacy");

    const emailLink = page.getByRole("link", {
      name: "contact@paulgeorge.dev",
    });
    await expect(emailLink).toBeVisible();
    await expect(emailLink).toHaveAttribute("href", /^mailto:/);
  });
});
