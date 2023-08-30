describe('Aserciones', () => {
    it('Asercion 1', () => {
        cy.visit('/');
        cy.url().should('include','automationintesting.online');
        // cy.get('#name').should('be.visible').should('have.attr', 'placeholder', 'Name');
        cy.get('#name').should('be.visible').and('have.attr', 'placeholder', 'Name');
    }); 

    it('Asercion 2', () => {
        cy.url().should('include','automationintesting.online');
        cy.get('#name').then((element) => {
            expect(element).to.be.visible;
            expect(element).to.be.attr('placeholder','Name');
        })
    }); 

    it('Asercion 3', () => {
        cy.url().should('include','automationintesting.online');
        cy.get('#name').then((element) => {
            assert.equal(element.attr('placeholder'),'Name');
        })
    }); 
});