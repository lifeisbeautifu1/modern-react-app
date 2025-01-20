import { test, expect } from "@playwright/test";

test("Home page has correct title", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle(/^Modern React App$/);
});

test("Main page has heading", async ({ page }) => {
  await page.goto("/");

  await expect(
    page.getByRole("heading", { name: "Medium length display headline" }),
  ).toBeVisible();
});

test("Shows 404 page", async ({ page }) => {
  await page.goto("/not-found");

  await expect(page).toHaveTitle(/^Modern React App | Not found$/);

  await expect(page.getByRole("heading", { name: "Not found" })).toBeVisible();

  await expect(
    page.getByRole("link", {
      name: "Back to the main page",
    }),
  ).toBeVisible();
});

test("Can navigate from 404 page back to the main one", async ({ page }) => {
  await page.goto("/not-found");

  await expect(page).toHaveTitle(/^Modern React App | Not found$/);

  await expect(page.getByRole("heading", { name: "Not found" })).toBeVisible();

  await page.getByRole("link", { name: "Back to the main page" }).click();

  await expect(
    page.getByRole("heading", { name: "Medium length display headline" }),
  ).toBeVisible();

  await expect(page).toHaveTitle(/^Modern React App$/);
});
