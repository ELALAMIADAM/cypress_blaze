///<reference types = 'cypress'/>  
import HomePage from '../pages/Home.page.js'
import WelcomePage from '../pages/Welcome.page.js'
import ItemPage from '../pages/Item.page.js';
import CartPage from '../pages/Cart.page.js';


describe('Athentification Scenario', () => {
  let username = Math.floor(Math.random()*100)+'user'+Math.floor(Math.random()*100)
  let password = 'pass'
  beforeEach('SetUp',()=>{
    cy.visit('https://www.demoblaze.com/');
    // SignUp
    // cy.intercept("POST","**/signup").as("signup")
    HomePage.SingUp(username,password)
    cy.on('window:confirm', (str) => {
      expect(str).to.equal('Sign up successful.');
      return true; 
    });
    // cy.wait("@signup")
    // Login
    HomePage.Login(username,password)
    WelcomePage.UserNameCheck().should('contains.text',username)
  })  
  it('purchase an item', () => {
    WelcomePage.ChoosePhones()
    WelcomePage.SelectPhoneS6()
    
    ItemPage.CheckCart().should('be.visible')
    ItemPage.CartAdd()
    cy.on('window:confirm', (str) => {
      expect(str).to.equal('Product added.');
      return true; 
    });
    ItemPage.GotoCart()

    CartPage.place_Order()
    CartPage.Ordername('name')
    CartPage.Ordercountry('name')
    CartPage.Ordercity('name')
    CartPage.Ordermonth('name')
    CartPage.Orderyear('name')
    CartPage.Ordercard('name')
    CartPage.Orderpurchase()
    CartPage.ConfirmPurchase().should('contain','Thank you')
    // CartPage.OKbutton()
    cy.reload()
    CartPage.ItemInvisible().should('not.be.visible')
    
    
  });

});