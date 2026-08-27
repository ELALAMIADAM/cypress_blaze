///<reference types = 'cypress'/>  

class WelcomePage {
    elements_welcomePage = {
        NameUser : () => cy.get('#nameofuser')
    }

    UserNameCheck() {
        return this.elements_welcomePage.NameUser()
    }
}

export default new WelcomePage()