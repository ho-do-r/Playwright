const {test, expect} = require('@playwright/test');


test("verify error message", async function ({page})
    {
        // Login action
        await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login", { waitUntil: "networkidle" });



        // enter username 
        await page.getByPlaceholder("Username").type("Admin")

        // Enter password
        await page.getByPlaceholder("Password").type("ajjj")

        // click on login button
        await page.locator("//button[@type='submit']").click()

        // verify error message
        const errorMessage = await page.locator("//p[contains(normalize-space(),'Invalid credentials')]").textContent()
        console.log("Error message is:" + errorMessage)

        expect(errorMessage.includes("Invalid")).toBeTruthy()

        expect(errorMessage==="Invalid credentials").toBeTruthy()


    }
)