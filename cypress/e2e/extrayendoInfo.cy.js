describe('Extrayendo info', () => {
 
    it('Extrayendo info y haciendo validaciones', function() {
        cy.visit('https://testpages.herokuapp.com/styled/basic-html-form-test.html');
       
        cy.get('input[type="text"][name="username"]').as('username');
       
        cy.get('@username').type('nano.becerra');

        cy.get('@username').invoke('val').should('equal','nano.becerra');
        
        cy.get('@username').invoke('val').as('usernameGlobal');
    });

    it('Compartir info', function() {
        cy.visit('https://testpages.herokuapp.com/styled/basic-html-form-test.html');
        cy.get('textarea[name="comments"]').clear().type(this.usernameGlobal); 
    });

});