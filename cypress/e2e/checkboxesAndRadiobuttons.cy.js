describe('Checkboxes y Radiobuttons', () => {
    it.only('Checkboxes y radio buttons', () => {
        cy.visit('https://testpages.herokuapp.com/styled/basic-html-form-test.html');
        cy.get('input[type="radio"][value="rd1"]').click();
        cy.get('input[type="radio"][value="rd3"]').check();

        cy.get('input[type="checkbox"][value="cb1"]').click();
        cy.get('input[type="checkbox"][value="cb2"]').check();
        cy.get('input[type="checkbox"][value="cb3"]').uncheck();
    });
});