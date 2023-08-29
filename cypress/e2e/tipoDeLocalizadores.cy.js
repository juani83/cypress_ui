describe('Tipos de localizadores', () => {

    it('Obtenerlo por medio de un tag', () => {
        cy.visit('/');
        cy.get('input');
    });

    it('Obtenerlo por medio de un atributo', () => {
        cy.get('[placeholder="Name"]');
    });
    
    it('Obtenerlo por medio de un atributo y un tag', () => {
        cy.get('input[placeholder="Email"]');
    });

    it('Obtenerlo por medio de un id', () => {
        cy.get('#subject');
    });

    it('Obtenerlo por medio de una clase', () => {
        cy.get('.btn.btn-outline-primary.float-right');
    });

    it('Usando contains', () => {
        cy.contains('Book this room');
        cy.contains('.btn.btn-outline-primary.float-right', 'Submit');
        cy.contains('.btn.btn-outline-primary.float-right', 'Book this room');
    });

    it('Usando parent', () => {
        cy.get('#name').parent();
        cy.get('#name').parents().find('form');
        cy.get('form').find('input');
    });

});