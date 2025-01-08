import { test, expect } from "@playwright/test";

test("Main page has title", async ({ page }) => {
  await page.goto("/about");

  // Expect a title "to contain" a substring
  await expect(page).toHaveTitle(/Website/);
});

test("Can navigate to the about us page from the main one", async ({
  page,
}) => {
  await page.goto("/");

  // Click go to the next page link.
  await page.getByRole("link", { name: "Go to the next page" }).click();

  // Expects page to have a heading: "Welcome to about us page"
  await expect(
    page.getByRole("heading", { name: "Welcome to about us page" }),
  ).toBeVisible();

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Website | About/);
});

test("Can navigate back from about us page to the main one", async ({
  page,
}) => {
  await page.goto("/about");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Website | About/);

  // Click go to the next page link.
  await page.getByRole("link", { name: "Back to the main page" }).click();

  // Expects page to have a heading: "Hello world!"
  await expect(
    page.getByRole("heading", { name: "Hello world!" }),
  ).toBeVisible();

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Website/);
});
