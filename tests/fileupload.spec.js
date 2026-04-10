const {test, expect} = require("@playwright/test");

test("File upload test", async function ({page})
{

    await page.goto("https://the-internet.herokuapp.com/upload");

    await page.locator("#file-upload").setInputFiles("./upload/image2.jpeg");

    await page.locator("#file-submit").click();

    expect(page.locator("//h3")).toHaveText("File Uploaded!");

})