describe('Guardando elementos', () => {
    it('Evitar repeticion', () => {
        cy.visit('/');

        cy.get('#name').parents('form').then((form) => { // El form es un JQuery<HTMLFormElement>
            const inputs = form.find('input');
            const divs = form.find('div');
            const spans = form.find('span');

            expect(inputs.length).to.eq(4);
            cy.wrap(inputs).should('have.length', 4); // Wrap envuelve el elemento JQuery y lo convierte a uno de Cypress y opero con la sintaxis de Cypress. Hace lo mismo que la linea de arriba
            expect(divs.length).to.eq(10);
            expect(spans.length).to.eq(9);

            

        });  
    });
});