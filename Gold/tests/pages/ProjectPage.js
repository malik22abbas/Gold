// pages/ProjectPage.js
const { test, expect } = require("@playwright/test");
module.exports = class ProjectPage {
    constructor(page) {
        this.page = page;
    }

const 

    async navigateToProject() {
        await this.page.click('span:text("Projects")');
        await this.page.click('a[href="/admin/projects/"]');
        await this.page.waitForURL('**/admin/projects/');
        await this.page.click('[role="button"][data-toggle="dropdown"]');
        const [newtab]= await Promise.all([
            this.page.waitForEvent("popup"),
            await this.page.click('text=Edit')
        ]);
        return newtab;
       
    }

    async addNewProject(){
        await this.page.click('span:text("Projects")');
        await this.page.click('a[href="/admin/projects/"]');
        // await this.page.waitForURL('**/admin/projects/');
        await this.page.getByRole('link', { name: 'Add Project' }).click();
        await this.page.waitForURL('**/admin/projects/');
    }

    async addNewProjectDetails(nameOfProject, address, city, state, zipCode, sqSize){
        await this.page.locator('//*[@id="nameNew"]').fill(nameOfProject);
        await this.page.locator('//*[@id="streetAddressNew"]').fill(address);
        await this.page.locator('//*[@id="cityNew"]').fill(city);
        await this.page.locator('//*[@id="stateNew"]').fill(state);
        await this.page.locator('//*[@id="zipNew"]').fill(zipCode);
        await this.page.getByPlaceholder('Square Footage...').fill(sqSize);
        await this.page.getByRole('button', { name: 'Add Project' }).click();
    }

    async fillComplianceForm(fname,lname,email,password) {
        // await page.expect(linkSelector).toBeVisible();
        // Add more actions to fill the form
        await this.page.locator('//*[@id="ownerFirstName"]').fill(fname);
        await this.page.locator('//*[@id="ownerLastName"]').fill(lname);
        await this.page.locator('//*[@id="ownerEmail"]').fill(email);
        await this.page.locator('//*[@id="itemD1"]/form/div[2]/div/div[3]').click();
        await this.page.locator('div:nth-child(9) > .col-sm-7 > div:nth-child(2)').first().click();
        await this.page.getByRole('button', { name: 'Save & Sign' }).click();
        await this.page.getByPlaceholder('Password...').fill(password);
        await this.page.locator('//*[@id="modalSignature"]/div/div/div[3]/button[2]').click();
    }

    async fillinstallationForm(password){
        
        await this.page.getByPlaceholder('# of bedrooms...').fill('2');
        await this.page.locator('input[name="heatingUnitManufacturer"]').fill('GOODMAN');
        await this.page.locator('input[name="heatingUnitModelNumber"]').fill('Gmes960403buab');
        await this.page.locator('input[name="heatingUnitSerialNumber"]').fill('2011094163');
        await this.page.locator('input[name="heatingEquipmentRatedCapacity"]').fill('38440');
        await this.page.locator('form').filter({ hasText: '* Indoor Unit or Packaged Unit Manufacturer Model Number Looks good! Serial Numb' }).getByPlaceholder('Enter notes...').fill('Hello automation QA');
        await this.page.locator('input[name="condenserModelNumber"]').fill('GOODMAN');
        await this.page.locator('input[name="condenserSerialNumber"]').fill('Gsx160311ae');
        await this.page.locator('input[name="coolingEquipmentRatedCapacity"]').fill('2103153062');
        await this.page.getByRole('textbox', { name: 'Tonnage...' }).fill('2.50');
        await this.page.locator('form').filter({ hasText: '* Condenser or Package Unit Manufacturer Model Number Looks good! Serial Number ' }).getByPlaceholder('Enter notes...').fill('Hello automation QA');
        await this.page.getByRole('button', { name: 'Save', exact: true }).click();
        await this.page.getByRole('button', { name: 'Save & Sign' }).click();
        await this.page.getByPlaceholder('Password...').fill(password);
        await this.page.locator('//*[@id="modalSignature"]/div/div/div[3]/button[2]').click();
        
    }

}
