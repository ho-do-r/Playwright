const{test, expect} = require("@playwright/test")

test("Working with Window handle", async ({browser})=>{

	const context = await browser.newContext();

	const page = await context.newPage();

	await page.goto("https://freelance-learn-automation.vercel.app/login");

	const [newPage] = await Promise.all
	(
		[
			context.waitForEvent("page"),

			page.locator("(//a[@href='https://www.facebook.com/groups/256655817858291'])[1]").click()
		]
	)

	
	await newPage.locator("(//input[@name='email'])[2]").fill("Mohan@gmail.com");

   

    await newPage.close();

    await page.locator("#email1").fill("mohan");

   
})