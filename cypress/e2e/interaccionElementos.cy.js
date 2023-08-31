describe('Interactura con los elementos', () => {
    beforeEach(() => {
        cy.visit('/');    
    });
    
    it('Click', () => {
        cy.get('.openBooking').click();
    });

    it('Double Click', () => {
        cy.get('.openBooking').dblclick();
    });

    it('Right Click', () => {
        cy.get('.openBooking').rightclick();
    });

    it('Click Forzado', () => {
        // cy.get('.openBooking').click({timeout: 5000});
        cy.get('.openBooking').click({force: true}); // Fuerza el click aunque el elemento no este habilitado
    });

    it('Click por poscion', () => {
        cy.get('.openBooking').parent().parent().click('topRight');
        cy.get('.openBooking').parent().parent().click(5, 60);
    });
});