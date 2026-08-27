///<reference types = 'cypress'/>  

class ItemPage {

    elements_itemPage = {
        add_2_cart : () => cy.get('[onclick="addToCart(1)"]'),
        CartLink : () => cy.get('#cartur')
    }

    CheckCart (){
        return this.elements_itemPage.add_2_cart()
    }

    CartAdd(){
        this.elements_itemPage.add_2_cart().click()
    }

    GotoCart(){
        this.elements_itemPage.CartLink().click()
    }

}

export default new ItemPage()