describe('Trabajando con popups y tooltips', () => {
    it('Modales', () => {
       cy.visit('https://getbootstrap.com/docs/4.0/components/modal/');
       cy.get('button.btn.btn-primary').contains('Launch demo modal').click();
       cy.get('h5#exampleModalLiveLabel', {timeout: 10000})
        .should('be.visible')
        .parent()
        .parent()
        .find('button.btn.btn-secondary')
        .type('{enter}');
    });

    it('Alerts', () => {
        cy.visit('https://demoqa.com/alerts');

        cy.get('#confirmButton').click();

        /*
        cy.on('window:confirm', (confirm)=>{
            expect(confirm).to.equal('Do you confirm action?');
        })

        cy.contains('You selected Ok').should('exist');
        */

        cy.on('window:confirm', (confirm)=>{
            expect(confirm).to.equal('Do you confirm action?');
            return false;
        })

        cy.contains('You selected Cancel').should('exist');
    });

    it.only('Interactuando con los tooltips', () => {
        cy.visit('https://demoqa.com/tool-tips');
        cy.get('#toolTipButton').trigger('mouseover');
        cy.contains('You hovered over the Button').should('exist');
        cy.get('#toolTipButton').trigger('mouseout');
        cy.contains('You hovered over the Button').should('not.exist');
    });
});