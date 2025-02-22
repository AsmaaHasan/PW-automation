import BasePage from "./Base.page";


class ItemPage
 extends BasePage {
    constructor(page) {
        super(page);

        // locators
        this.monitors     = page.locator(`//a[@onclick="byCat('monitor')"]`);
        this.appleMonitor = page.locator(`//a[@href="prod.html?idp_=10" and @class="hrefch"]`)
        this.addToCart    = page.locator(`//*[@id="tbodyid"]/div[2]/div/a`);
        this.placeOrder   = page.locator(`//*[@id="page-wrapper"]/div/div[2]/button`)
        this.cart         = page.locator(`//a[@onclick='showcart()']`)

        this.name_placeOrder            = page.locator(`//*[@id="name"]`);
        this.country_placeOrder         = page.locator(`//*[@id="country"]`);
        this.city_placeOrder            = page.locator(`//*[@id="city"]`);
        this.creditCard_placeOrder      = page.locator(`//*[@id="card"]`);
        this.creditCardMonth_placeOrder = page.locator(`//*[@id="month"]`);
        this.creditCardYear_placeOrder  = page.locator(`//*[@id="year"]`);
        this.purchaseBtn                = page.locator(`//*[@id="orderModal"]/div/div/div[3]/button[2]`)

    
    }

       //methods
       async navigate(){
        await super.navigate('/'); 
       }

       async navigateToCart(){
        await super.navigate('/cart.html'); 
       }

       async goToitemAndPurchase(name, country, city, creditcard, creditcardmonth, creditcardyear){
        await this.monitors.click();
        await this.appleMonitor.click();
        //await this.navigate("prod.html?idp_=10");  //not sure
        // Accept the alert after "Add to cart"
        const [dialog] = await Promise.all([
            this.page.waitForEvent('dialog'),
            this.addToCart.click(),
        ]);
        await dialog.accept();

        await this.navigateToCart();
        
        await this.placeOrder.click();
        await this.name_placeOrder.fill(name);
        await this.country_placeOrder.fill(country);
        await this.city_placeOrder.fill(city);
        await this.creditCard_placeOrder.fill(creditcard);
        await this.creditCardMonth_placeOrder.fill(creditcardmonth);
        await this.creditCardYear_placeOrder.fill(creditcardyear);

        await this.purchaseBtn.click();
       
       }

       getElementByText(text) {
        return this.page.locator(`text=${text}`);
      }


}

export default ItemPage;