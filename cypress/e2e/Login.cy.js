///<reference types = 'cypress'/>  
import HomePage from '../pages/Home.page.js'
import WelcomePage from '../pages/Welcome.page.js'
describe('Athentification Scenario', () => {
  let username = Math.floor(Math.random()*100)+'user'+Math.floor(Math.random()*100)
  let password = 'pass'
  beforeEach('SetUp',()=>{
    cy.visit('https://www.demoblaze.com/');
  })  
  it('SingUp', () => {
    cy.intercept("POST","**/signup").as("signup")
    HomePage.SingUp(username,password)
    cy.on('window:confirm', (str) => {
      expect(str).to.equal('Sign up successful.');
      return true; 
    });
    // cy.wait(5000)
    cy.wait("@signup")

    
  });

  it('Login', () => {
    HomePage.Login(username,password)
    
    WelcomePage.UserNameCheck().should('contains.text',username)
  });
});