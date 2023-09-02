describe('Trabajando con date pickers', () => {
    it('Interactura date picker', () => {
        cy.visit('https://material.angular.io/components/datepicker/overview');
        
        cy.get('.mat-mdc-form-field-infix.ng-tns-c1205077789-3').click();
        
        cy.get('datepicker-overview-example')
            .find('input')
            .eq(0)
            .type('03/11/2024'); 
    });
});