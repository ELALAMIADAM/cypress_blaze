///<reference types = 'cypress'/>  

class HomePage {
    elements_homepage ={
        SingUpLink :() => cy.get('#signin2'),
        LoginLink :() => cy.get('#login2'),
        UsernameSing :() => cy.get('#sign-username'),
        PasswordSing :() => cy.get('#sign-password'),
        SingUpBtn : () => cy.get('[onclick="register()"]'), // contain('.btn-primary','Sign up')
        UsernameLogin :() => cy.get('#loginusername'),
        PasswordLogin :() => cy.get('#loginpassword'),
        LoginBtn : () => cy.get('[onclick="logIn()"]'),
    }

    SingUp(u,p){
        this.elements_homepage.SingUpLink().click()
        this.elements_homepage.UsernameSing().type(u,{force:true})
        this.elements_homepage.PasswordSing().type(p,{force:true})
        this.elements_homepage.SingUpBtn().click()
    }
    Login(u,p){
        this.elements_homepage.LoginLink().click()
        this.elements_homepage.UsernameLogin().type(u,{force:true})
        this.elements_homepage.PasswordLogin().type(p,{force:true})
        this.elements_homepage.LoginBtn().click()
    }
}

export default new HomePage()