describe('Trabajando con elementos drag and drop', () => {
    it('Interactuando con drag and drop', () => {
        cy.visit('https://demoqa.com/dragabble');
        cy.get('#dragBox')
            .trigger('mousedown', {which: 1, pageX: 0, pageY: 0})
            .trigger('mousemove', {which: 1, pageX: 600, pageY: 600})
            .trigger('mouseup');
    });
});