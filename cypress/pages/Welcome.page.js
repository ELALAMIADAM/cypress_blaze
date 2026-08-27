///<reference types = 'cypress'/>  

class WelcomePage {
    elements_welcomePage = {
        NameUser : () => cy.get('#nameofuser'),
        PhonesItem : () => cy.get(`[onclick="byCat('phone')"]`),
        PhoneSelected : () => cy.contains('.hrefch','Samsung galaxy s6'),

    }

    UserNameCheck() {
        return this.elements_welcomePage.NameUser()
    }

    ChoosePhones(){
        this.elements_welcomePage.PhonesItem().click()
    }

    SelectPhoneS6(){
        this.elements_welcomePage.PhoneSelected().click()
    }

}

export default new WelcomePage()