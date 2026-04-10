const { test, expect } = require("@playwright/test");

test.skip("Handle Alert", async ({ page }) => {
    
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

    // 1. Set up the dialog listener FIRST
    page.on('dialog', async (d) => {
        // Stricter assertion using toBe() instead of toContain()
        expect(d.type()).toBe("alert"); 

        expect(d.message()).toBe("I am a JS Alert");
        
        // Accept the alert
        await d.accept(); 
    });

    // 2. Trigger the alert using a user-facing locator
    await page.getByRole('button', { name: 'Click for JS Alert' }).click();

});



test.skip("Handle Confirm Box", async ({page}) => {
	page.goto("https://the-internet.herokuapp.com/javascript_alerts");

	page.on('dialog', async (dialogWindow) =>{
	
	expect(dialogWindow.type()).toContain("confirm");

	expect(dialogWindow.message()).toContain("I am a JS Confirm");

	await dialogWindow.dismiss();

})

	await page.locator("//button[text()='Click for JS Confirm']").click();
})



test("Handle Prompt Box", async ({page})=>{

	page.goto("https://the-internet.herokuapp.com/javascript_alerts");

	page.on('dialog', async (dialogWindow2)=> {

	expect(dialogWindow2.type()).toContain("prompt");

	expect(dialogWindow2.message()).toContain("I am a JS prompt");

	await dialogWindow2.accept("Mohan");
})

	await page.locator("//button[normalize-space()='Click for JS Prompt']").click();
})