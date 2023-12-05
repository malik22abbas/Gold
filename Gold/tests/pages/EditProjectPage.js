// pages/EditProjectPage.js
const { test, expect } = require("@playwright/test");
module.exports = class EditProjectPage {
    constructor(page) {
        this.page = page;
    }

    async verfiyTabs() {
        await expect(this.page.locator('a[href="#compliance"]')).toBeVisible();
        await expect(this.page.locator('a[href="#installation"]')).toBeVisible();
        await expect(this.page.locator('a[href="#verification"]')).toBeVisible();
    }
    async fillComplianceForm() {
        await this.page.click('a[href="#compliance"]');
    }

    // ... add similar methods for Installation and Verification forms
}
