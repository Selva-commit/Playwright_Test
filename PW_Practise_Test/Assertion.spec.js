import test, { page, expect } from '@playwright/test'


test('Assertions Demo', async ({ page }) => {

    await page.goto('https://kitchen.applitools.com/')



    // ASSERTION
    // Check the element present or not
    await expect(page.locator('text= The Kitchen')).toHaveCount(1);

    if (await page.$('text=The Kitchen')) {
        await page.locator('text= Alert').click()

    }

    // Check the element Hidden or Visible
    await expect(page.locator('text=Trigger an Alert')).toBeVisible()
    await expect.soft(page.locator('text=Trigger an Alert')).toBeHidden()
    await page.goBack()
    await page.waitForURL('https://kitchen.applitools.com/')

    // Check the element Enabled or Disabled
    await expect(page.getByText('API')).toBeEnabled()
    await expect.soft(page.getByText('API')).toBeDisabled()

    // Check the text is present or not
    await expect(page.locator('text=Cookie')).toHaveText('Cookie')
    await expect.soft(page.locator('text=Cookie')).toHaveText('COOKIE')
    await expect(page.locator('text=Cookie')).not.toHaveText('Cookiee')

    await page.pause();
    // Check the attribute value
    await expect(page.locator('text=The Kitchen')).toHaveAttribute('class', /.*css-dpmy2a/);
    await expect(page.locator('text=The Kitchen')).toHaveClass(/.*css-dpmy2a/);

    // Check URL and title
    await expect(page).toHaveURL(/.*applitools.com/);
    await expect(page).toHaveTitle(/.*chen/);

    await expect(page).toHaveScreenshot();



})
