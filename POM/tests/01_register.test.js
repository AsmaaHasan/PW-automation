import { test, expect } from "@playwright/test"

import RegisterPage from "../pages/Register.page";
import HomePage from "../pages/Home.page";
import LoginPage from "../pages/Login.page";

let registerPage, loginPage, homePage;

test.beforeEach(async ({ page }) => {
    registerPage = new RegisterPage(page);
    homePage = new HomePage(page);
    loginPage = new LoginPage(page);


   await loginPage.navigate();
})

test.describe('Register User', () => {

    test("Register user with valid email and password", async ({ page }) => {
        // Register with usernmae and password then sign up
        await registerPage.register("nawytestinguser", "123")

        //verify that register is successful
        page.on('dialog', async dialog => {
            expect(dialog.message()).toBe('Sign up successful.');
            await dialog.accept();

        })
    });

    test("Register with existing user ", async ({ page }) => {
        //1: write invalid login email and password then submit
        await registerPage.register("nawytestinguser", "123")

        //2: I get an alert window saying User does not exist.
        page.on('dialog', async dialog => {
            expect(dialog.message()).toBe('This user already exist.');
            await dialog.accept();

        })
    });


});