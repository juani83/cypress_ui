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

    it.only('Input type texto', () => {
        cy.get('#name').type('Juan');
        cy.get('#name').type(' Ignacio');
        cy.get('#email').type('juanbecerra83@gmail.com');
        cy.get('#phone').type('1136503228');

        cy.get('#name').type('{selectAll}{backspace}');
        cy.get('#name').type('Nacho');
        cy.get('#phone').clear();
    });
});