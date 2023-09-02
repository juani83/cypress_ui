describe('Interaccion tablas', () => {
    it('Interactuando con tablas 1', () => {
        cy.visit('https://testpages.eviltester.com/styled/tag/table.html');
        cy.get('#mytable')
            .find('th')
            .each(($element) => {
            cy.log($element.text());
        });
    });

    it('Validando encabezados 1', () => {
        cy.visit('https://testpages.eviltester.com/styled/tag/table.html');
        cy.get('#mytable')
            .find('th')
            .first()
            .invoke('text')
            .should('equal','Name');
    });

    it('Validando encabezados 2', () => {
        cy.visit('https://testpages.eviltester.com/styled/tag/table.html');
        cy.get('#mytable')
            .find('th')
            .eq(1)
            .invoke('text')
            .should('equal','Amount');
    });

    it('Validando filas/celdas 1', () => {
        cy.visit('https://testpages.eviltester.com/styled/tag/table.html');
        cy.get('#mytable')
            .find('tr')
            .should('have.length', 5);

        cy.get('#mytable')
            .find('tr')
            .eq(1)
            .find('td')
            .eq(0)
            .invoke('text')
            .should('equal', 'Alan');
    });
});