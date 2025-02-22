import { test, expect } from "@playwright/test"

import LoginPage from "../pages/Login.page";

let loginPage;

test.beforeEach(async({page})=>
{
    loginPage = new LoginPage(page);
    await loginPage.navigate();

    await loginPage.login("nawytestinguser", "123")


})

test.describe('User Logout', () => {

    test("User can log out", async ({ page }) => {
        // click on logout
        await page.locator("//a[@id='logout2']").click();

        //verify that "Log out successful" 
        await expect(page.locator("//a[@id='signin2']")).toBeVisible();


    });



});