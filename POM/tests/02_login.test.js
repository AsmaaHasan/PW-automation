import { test, expect } from "@playwright/test"

import LoginPage from "../pages/Login.page";

let loginPage, homePage;

test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigate();
})

test.describe('Login User',  () => {

    test("Login user with valid email and password", async ({ page }) => {
        // write your login email and password then submit
        await loginPage.login("nawytestinguser", "123")

        //verify that "Login successufl" 
        await expect(page.locator("//a[@id='logout2']")).toBeVisible();


    });

    test("Login with invalid email and password", async ({ page }) => {
        //1: write invalid login email and password then submit
        await loginPage.login("invaliduserdoesntexist", "pass123")

        //2: I get an alert window saying User does not exist.
        page.on('dialog', async dialog => {
            expect(dialog.message()).toBe('User does not exist.');
            await dialog.accept();

        })
    });





});