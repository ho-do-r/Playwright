const {test, expect} = require('@playwright/test');

test( "Mouse hover test", async function ({page})
    {

        // this web site does not have mouse hover action  should use another website for mouse hover action 
        await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        await page.getByPlaceholder("Username").type("Admin",{delay:200})

        await page.locator("input[name='password']").type("admin123",{delay:100})

        await page.locator("button[type='submit']").click()

        await page.locator("//span[contains(@class,'oxd-userdropdown-tab')]").hover({force});

        await page.locator("//a[contains(normalize-space(),'Logout')]").click();


    })