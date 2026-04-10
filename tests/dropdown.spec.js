const { test, expect } = require("@playwright/test");
const { log } = require("node:console");

test("Select dropdown menu", async function ({page}) {
    await page.goto("https://freelance-learn-automation.vercel.app/signup");
    
    await page.locator("#state").selectOption({label:"Goa"});
    
   // await page.waitForTimeout(5000);

    await page.locator ("#state").selectOption({value:"Kerala"});

    await page.waitForTimeout(5000);

    await page.locator("#state").selectOption({index:4});

//     await page.waitForTimeout(3000);

//     const value = await page.locator("#state").textContent();

//    console.log("All dropdwon values are: " + value);

//    await expect(value.includes("Kerala")).toBeTruthy();




    let state = await page.$("#state");

    let allElements = await state.$$("option");

    let ddState = false;

    for(let i=0; i<allElements.length; i++)
    {
        
        let element = allElements[i];

        let value = await element.textContent();

        console.log("Value from dropdown is : " + value);

        if(value.includes("Kerala"))
        {
            ddState = true;
            break;
        }

    }

    expect(ddState).toBeTruthy();


    await page.locator("#hobbies").selectOption(["Playing", "Singing"]);

    await page.waitForTimeout(5000);
});