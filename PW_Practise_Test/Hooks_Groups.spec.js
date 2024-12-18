import { test, expect } from '@playwright/test'


test.describe('All My Test', () => {


    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.saucedemo.com/v1/')

        await page.locator('[data-test="username"]').fill('standard_user');
        await page.locator('[data-test="password"]').fill('secret_sauce');
        await page.getByRole('button', { name: 'LOGIN' }).click();
        await expect(page).toHaveURL("https://www.saucedemo.com/v1/inventory.html");


    })


    test.afterEach(async ({ page }) => {
        await page.close();

    })


    test('Login and AddToCart', async ({ page }) => {

        await page.locator('div').filter({ hasText: /^\$29\.99ADD TO CART$/ }).getByRole('button').click();
        await page.locator('div').filter({ hasText: /^\$9\.99ADD TO CART$/ }).getByRole('button').click();
        await page.getByRole('link', { name: 'Sauce Labs Bolt T-Shirt' }).click();
        await page.getByRole('button', { name: 'ADD TO CART' }).click();
        await page.getByRole('button', { name: 'Open Menu' }).click();
        await page.getByRole('link', { name: 'Logout' }).click();


    })

    test('Login and logout', async ({ page }) => {

        await page.getByRole('button', { name: 'Open Menu' }).click();
        await page.getByRole('link', { name: 'Logout' }).click();
        await page.close();

    })


})
