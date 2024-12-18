import{test, expect} from "@playwright/test";

test('Input test', async ({page})=> {
    await page.goto('https://letcode.in/test');
    await expect(page).toHaveTitle("LetCode - Testing Hub");
    
    // below element find by xpath
    await page.locator("//a[@href='/edit']").click();
    await expect(page).toHaveURL("https://letcode.in/edit");

    //below element locate by Placeholder
    await page.getByPlaceholder('Enter first & last name').fill('Panner Selvam S');

    //below element locate by ID
    await page.locator('#join').fill(', Yourself?');
    await page.keyboard.press('Tab');

    // If you want to verify that the element is focused you can use toBeFocused matcher:
    //await expect(page.getByText('ortonikc')).toBeFocused();
    //let F3_text= await page.locator('#getMe').textContent();
    //console.log(F3_text);
    //console.log(await page.textContent("#getMe"));

    let F3= await page.locator('#getMe');
    let F3_text = await F3.getAttribute('value');
    console.log(F3_text);

    // F4
    await page.locator("//input[@value='Koushik Chatterjee']").clear();

    // F5 - Used Assertion
    await expect(page.locator("#noEdit")).toBeDisabled;    
});

test.only('Button Test', async ({page})=> {
    await page.goto('https://letcode.in/test');
    await expect(page).toHaveTitle("LetCode - Testing Hub");
    
    // below element find by xpath
    await page.locator("//a[@href='/buttons']").click();
    await expect(page).toHaveURL("https://letcode.in/buttons");

    //below element locate by Role
    await page.getByRole('button', {name: 'Goto Home'}).click();
    
    await expect(page).toHaveURL("https://letcode.in/");
    await page.goBack();
    await page.waitForURL('**/buttons');

    // //below element locate by ID
    let button2 =await page.locator('#position');
    var size = await button2.boundingBox();
    console.log("x-axis: "+size.x ,"Width: " +size.width / 2,"y-aixs: " +size.y , "height: " +size.height / 2);

    
    let button3 =await page.locator('#color');
    let button3_clr= await button3.evaluate((ele)=>{
        return window.getComputedStyle(ele).getPropertyValue("background-color");
    })

    console.log("Button 3 color: " +button3_clr);


    let button4 = await page.locator('#property');
    var b4_size = await button2.boundingBox();
    console.log("Button4 "+ "Width: " +b4_size.width / 2, "height: " +b4_size.height / 2);

    // Button 5 - verify disable or not 
    //below element locate by title
      await expect(page.getByTitle("Disabled button")).toBeDisabled();


        


});