const {test, expect} = require("@playwright/test")
const testdata=JSON.parse(JSON.stringify(require("../testdata.json")))
const LoginPage = require("../pages/loginpage")
const HomePage=require("../pages/homePage")

test("Login to Application using POM",async ({page})=>
{

    await page.goto("https://freelance-learn-automation.vercel.app/login");

    const lp=new LoginPage(page);

    await lp.loginToApplication(testdata.username, testdata.password);

    const hp = new HomePage(page);

    await hp.verifyCartOption();

    await hp.logOutFromMenu();    

    await lp.verifySighIn();
})