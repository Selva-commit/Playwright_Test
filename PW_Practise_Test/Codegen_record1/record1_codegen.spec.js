import { test, expect } from '@playwright/test';

test('record1_codegen', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="username"]').press('Tab');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="password"]').press('Enter');
  await page.getByRole('button', { name: 'Open Menu' }).click();
  await page.locator('[data-test="inventory-sidebar-link"]').click();
  await page.locator('[data-test="inventory-sidebar-link"]').click();
  await page.locator('[data-test="about-sidebar-link"]').click();
  await page.getByRole('link', { name: 'Saucelabs' }).click();
  await page.goto('https://www.saucedemo.com/inventory.html');
  await page.goto('https://www.saucedemo.com/?/inventory.html');
  await page.goto('https://www.saucedemo.com/inventory.html');
  await page.getByRole('button', { name: 'Open Menu' }).click();
  await page.locator('[data-test="logout-sidebar-link"]').click();
  await expect(page).toHaveURL('https://www.saucedemo.com/');
  
});