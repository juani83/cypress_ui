describe('Esperando por elementos', () => {
    beforeEach(() => {
        cy.visit('https://www.platzi.com');
    });
    
    it('Esperar un tiempo definido', () => {
        cy.wait(5000);
    });

    it('Esperar por un elemento', () => {
        cy.get('.ButtonLogin-cta', {timeout: 6000});
    });

    it('Esperar por un elemento y hacer una asercion', () => {
        cy.get('.Button', {timeout: 6000}).should('be.visible');
    });
});

describe('', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('Deshabilitar el retry', () => {
        // cy.get('.hotel-logoUrl', {timeout: 5000});
        cy.get('.hotel-logoUrl', {timeout: 0});
    });
});