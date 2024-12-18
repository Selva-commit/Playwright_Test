const { test, expect } = require('@playwright/test')

test.beforeEach('LoginTest', async ({ page }) => {

    await page.goto('https://wave.greythr.com/');
    // await page.pause();
    await page.getByPlaceholder('Employee No').fill('wcl 00149');
    await page.getByPlaceholder('Password').fill('P500161549$');
    await page.getByRole('button', { name: 'Log in' }).click();
    })

test.only('SignIn', async ({ page }) => {

    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.getByRole('button', { name: 'Select' }).click();

    await page.locator('div').filter({ hasText: /^Work from Home$/ }).first().click();
    await page.locator('gt-popup-modal').filter({ hasText: 'Tell us your work location.' }).locator('button[name="primary"]').click();    
})

test('SignOut', async ({ page }) => {

    await page.getByRole('button', { name: 'Sign Out' }).click();
    await page.getByRole('button', { name: 'Work from Home' }).click();

    await page.locator('div').filter({ hasText: /^Work from Home$/ }).first().click();
    await page.locator('gt-popup-modal').filter({ hasText: 'Tell us your work location.' }).locator('button[name="primary"]').click();    
})

test.afterEach(async ({ page }) => {
   await page.getByRole('link', { name: 'Logout' }).click(); 

})