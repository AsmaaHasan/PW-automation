import BasePage from "./Base.page";


class HomePage extends BasePage {
    constructor(page) {
        super(page);

    }
       //methods
       async navigate(){
        await super.navigate('/'); 
       }


}

export default HomePage;