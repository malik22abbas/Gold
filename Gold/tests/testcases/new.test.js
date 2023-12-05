const { test, expect,browser } = require("@playwright/test");
const LoginPage = require('../pages/LoginPage.js');
const ProjectPage = require('../pages/ProjectPage.js');
const EditProjectPage = require("../pages/EditProjectPage.js");

require('dotenv').config();
test.describe('Login Test Cases',() => {
    let page
    let loginpage 
    // test.beforeAll(async () => {
    //     page = await browser.newPage();
    //     loginpage = new LoginPage(page);
    //     await loginpage.navigate();
    //     await loginpage.login(process.env.USER_EMAIL, process.env.USER_PASSWORD);
    // });

    // test.beforeEach(async () => {
    //     loginPage = new LoginPage(page);
    //     await loginPage.navigate();
    // });

    // test.afterAll(async () => {
    //     await page.close();
    // });

    
    test("Navigation", async ({browser}) => { 
        page = await browser.newPage();
        loginpage = new LoginPage(page);
        await loginpage.navigate();
        await loginpage.login(process.env.USER_EMAIL, process.env.USER_PASSWORD);
        const projectPage = new ProjectPage(page);
        const newTab=await projectPage.navigateToProject();
        // Wait for the new tab to open and get its page
        const newPage = await browser.newPage();
        const editProjectPage = new EditProjectPage(newTab)
         // Interact with the new tab
         await newPage.waitForLoadState('domcontentloaded');
         await editProjectPage.verfiyTabs();
    });

    test("Add new Project and Fill Compliance form, Fill Installation form", async ({browser})=>{

        const randomSuffix = Math.floor(Math.random() * 10000);
        const randomName = `Test${randomSuffix}`;
        
        

        const randomfn = 'John';
        const randomln = 'Smith';
        const randomEmail = 'test@test.com';

        page = await browser.newPage();
        loginpage = new LoginPage(page);
        await loginpage.navigate();
        await loginpage.login(process.env.USER_EMAIL, process.env.USER_PASSWORD);
        const projectPage = new ProjectPage(page);
        // const newTab=await projectPage.navigateToProject();
        // Wait for the new tab to open and get its page
        const newPage = await browser.newPage();
        await projectPage.addNewProject();
        await projectPage.addNewProjectDetails(randomName, process.env.ADDRESS, process.env.CITY, process.env.STATE, process.env.ZIP, '1187');
        await projectPage.fillComplianceForm(randomfn,randomln,randomEmail,process.env.USER_PASSWORD);
        // const editProjectPage = new EditProjectPage(newTab)
         // Interact with the new tab
        //  await newPage.waitForLoadState('domcontentloaded');
        //  await editProjectPage.verfiyTabs();
        //Filling installation form
        await projectPage.fillinstallationForm(process.env.USER_PASSWORD);
    })
});