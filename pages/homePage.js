const {expect}=require("@playwright/test")

// create a class
class HomePage 
{
    // create a constructor
    constructor(page)
    {
        this.page=page
        this.menu="//img[@alt='menu']"
        this.logOut="//button[contains(normalize-space(),'Sign out')]"
        this.cartButton="//button[normalize-space()='Cart']"

    }

    async verifyCartOption()
    {
        await expect (this.page.locator(this.cartButton)).toBeVisible();   
    }
    
    async logOutFromMenu()
    {
        await this.page.click(this.menu);
        await this.page.click(this.logOut);
    }
}

module.exports=HomePage