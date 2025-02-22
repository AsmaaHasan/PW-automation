import BasePage from "./Base.page";


class RegisterPage extends BasePage {
    constructor(page) {
        super(page);

        // locators
        this.signUpWindow    = page.locator("//a[@id='signin2']");
        this.signUpUserName  = page.locator("//input[@id='sign-username']");
        this.signUpPassword  = page.locator("//input[@id='sign-password']");
        this.signUpButton    = page.locator("//button[@onClick='register()']");
    }

       //methods
       async navigate(){
        await super.navigate('/'); 

       }


       async register (username, password){

        await this.signUpWindow.click();
        await this.signUpUserName.fill(username);
        await this.signUpPassword.fill(password);
        await this.signUpButton.click();
       }

}

export default RegisterPage;