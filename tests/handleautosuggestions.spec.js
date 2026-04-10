const {test, expect} = require("@playwright/test")

test("Handle auto suggestions using keyboard", async function({page})
{

	await page.goto("https://www.google.com");
	
	await page.locator("textarea[name='q']").type("Mukesh Otwani");

    await page.locator("//li[@role='presentation']");

    await page.keyboard.press("ArrowDown");

    await page.keyboard.press("ArrowDown");

    await page.keyboard.press("Enter");



})

test.only("Handle auto suggestions using loop", async function({page})
{

	await page.goto("https://www.google.com");
	
	await page.locator("textarea[name='q']").type("Mukesh Otwani");

    await page.locator("//li[@role='presentation']");

    const elements = await page.locator("//li[@role='presentation']");

    for(let i=0; i<elements.lenght; i++)
    {
        const text = await elements[i].textContent();

        if(text.includes("playwright"))
        {
            await elements[i].click();
            break;
        }
    }



})