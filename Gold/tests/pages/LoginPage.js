// pages/LoginPage.js
module.exports = class LoginPage {
    constructor(page) {
        this.page = page;
    }
    async navigate() {
        await this.page.goto("https://manage.qa.goldenstateregistry.org/admin/login");
        await this.page.waitForLoadState('networkidle');

    }
    async login(email, password) {
        await this.page.fill('input[id="username"]', email);
        await this.page.fill('input[id="password"]', password);
        await this.page.click('button[type="submit"]');
        await this.page.waitForURL('**/user/profile/edit');
        //await this.page.waitForLoadState('domcontentloaded');
       // await this.page.waitForTimeout(100000);  // Waits for 10 seconds
    }
}