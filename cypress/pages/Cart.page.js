///<reference types = 'cypress'/>  

class CartPage{
    elements_cart = {
        place_order : () => cy.get('[data-target="#orderModal"]'),
        order_name : () => cy.get('#name'),
        order_country : () => cy.get('#country'),
        order_city : () => cy.get('#city'),
        order_card : () => cy.get('#card'),
        order_month : () => cy.get('#month'),
        order_year : () => cy.get('#year'),
        order_purchase : () => cy.get('[onclick="purchaseOrder()"]'),
        confirm_purchase : () => cy.contains('h2','Thank you for your purchase!'),
        // ok_btn_purchase : () => cy.get('.la-ball-fall').last()
        item_invisible : () => cy.get('#tbodyid')
    }
    ItemInvisible(){
        return this.elements_cart.item_invisible()
    }
    place_Order() {
        this.elements_cart.place_order().click()
    }
    Ordername(s) {
        this.elements_cart.order_name().type(s)
    }
    Ordercountry(s) {
        this.elements_cart.order_country().type(s,{force:true})
    }
    Ordercity(s) {
        this.elements_cart.order_city().type(s)
    }
    Ordercard(s) {
        this.elements_cart.order_card().type(s)
    }
    Ordermonth(s) {
        this.elements_cart.order_month().type(s)
    }
    Orderyear(s) {
        this.elements_cart.order_year().type(s)
    }
    Orderpurchase() {
        this.elements_cart.order_purchase().click()
    }
    ConfirmPurchase(){
        return this.elements_cart.confirm_purchase()
    }
    OKbutton(){
        this.elements_cart.ok_btn_purchase().click()
    }
}

export default new CartPage()