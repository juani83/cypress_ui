describe('Listas y dropdowns', () => {
    it('Interactuando con los dropdowns', () => {
        cy.visit('https://testpages.herokuapp.com/styled/basic-html-form-test.html');
        
        cy.get('select[name="dropdown"]').select(0).should('have.value', 'dd1');
        cy.get('select[name="dropdown"]').select('Drop Down Item 2').should('have.value', 'dd2');
        cy.get('select[name="dropdown"]').select('dd3');
    });

    it.only('Interactuando con los dropdowns dinamicos', () => {
        cy.visit('https://react-select.com/home');
   
        cy.get('#react-select-4-input').click();

        cy.get('#react-select-4-option-5').click(); // Con el indice
        
        cy.get('#react-select-4-input').click();

        cy.get('#react-select-4-listbox').children().children().each(($el, index, $list) => { // Recorriendo los valores posibles

            if($el.text() === 'Orange'){
                $el.click();
            };

        });

        cy.get('#react-select-4-input').type('Ocean').type('{enter}'); // Tipeando el valor simplemente
        
    });
});