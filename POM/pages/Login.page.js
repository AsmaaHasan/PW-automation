import BasePage from "./Base.page";


class LoginPage extends BasePage {
    constructor(page) {
        super(page);

        // locators
        this.loginWindow   = page.locator("//a[@id='login2']");
        this.loginUserName = page.locator("//input[@id='loginusername']");
        this.loginPassword = page.locator("//input[@id='loginpassword']");
        this.loginButton   = page.locator("//button[@onClick='logIn()']");
    }

       //methods
       async navigate(){
        await super.navigate('/'); 

       }

       async login (username, password){
       
        await this.loginWindow.click();
        await this.loginUserName.fill(username);
        await this.loginPassword.fill(password);
        await this.loginButton.click();
       }


}

export default LoginPage;