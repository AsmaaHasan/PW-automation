class BasePage{

    constructor(page){
        this.page = page;
        this.BaseURL = 'https://www.demoblaze.com/'
    }


    async navigate(path){
        await this.page.goto(`${this.BaseURL}/${path}`)

    }
}

export default BasePage;