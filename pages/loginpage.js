const {expect} = require("@playwright/test")

class LoginPage 
{

    constructor(page)
    {
        this.page=page;
        this.username="#email1";
        this.password="//input[@placeholder='Enter Password']";
        this.loginButton="//button[@type='submit']";
        this.header="//h2[normalize-space()='Sign In']"
    }

    async loginToApplication(user,pwd)
    {
        await this.page.fill(this.username,user);
        await this.page.fill(this.password,pwd);
        await this.page.click(this.loginButton);
    }

    async verifySighIn()
    {
        await expect (this.page.locator(this.header)).toBeVisible(); 
    }
}

module.exports=LoginPage;