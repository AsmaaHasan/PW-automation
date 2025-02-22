import { test, expect } from "@playwright/test"

import HomePage from "../pages/Home.page";
import ItemPage from "../pages/Item.page";
import LoginPage from "../pages/Login.page";

let itemPage, homePage, loginPage;

test.beforeEach(async({page})=>
{
    itemPage = new ItemPage (page);
    homePage = new HomePage(page);
    loginPage = new LoginPage(page);

    await loginPage.navigate();
    await loginPage.login("nawytestinguser", "123")

})

test.describe('Find Item and Place order', () => {


    test("go to the right category", async () => {
        // Order an Apple Monitor
        await itemPage.goToitemAndPurchase("Asmaa", "Egypt", "Giza", "123456789", "02", "2025")

        //verify that order was placed successfully
        await expect(itemPage.getElementByText('Thank you for your Purchase!')).toBeVisible();

    });



});