describe('Navegacion', () => {
    it('Navegar a nuestra primera pagina', () => {
        cy.visit('https://www.platzi.com');
    });

    it('Recargar pagina', () => {
        cy.reload();
    });

    it('Recargar pagina de forma forzada', () => {
        cy.visit('https://www.google.com');
        cy.reload(true);
    });

    it('Navegar hacia atras', () => {
        cy.visit('https://www.google.com');
        cy.visit('https://www.google.com/search?q=platzi&sca_esv=560863457&sxsrf=AB5stBii_vT11Q9zRkfnytijWLdjzUwdOQ%3A1693276010663&source=hp&ei=alftZKXlJZjf1sQPnYif4Ag&iflsig=AD69kcEAAAAAZO1lernEjSoeGLPqQVDFz80W7pXfv7Fu&ved=0ahUKEwilwvrY6ICBAxWYr5UCHR3EB4wQ4dUDCAg&uact=5&oq=platzi&gs_lp=Egdnd3Mtd2l6IgZwbGF0emkyBBAjGCcyBxAjGIoFGCcyBxAjGIoFGCcyERAuGIAEGLEDGIMBGMcBGNEDMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAESLkHUABYwwVwAHgAkAEBmAHOAqABzQeqAQc0LjAuMS4xuAEDyAEA-AEBwgILEAAYgAQYsQMYgwHCAgsQLhiKBRixAxiDAcICCBAuGIAEGLEDwgILEAAYigUYsQMYgwHCAggQABiABBixA8ICCxAuGIAEGMcBGNEDwgIKEAAYgAQYsQMYCsICBxAAGIAEGArCAg0QABiABBixAxiDARgK&sclient=gws-wiz');
        // cy.go('back');
        cy.go(-1); // otra forma de escribir lo mismo
        // cy.go('forward');
        cy.go(1);
    });
});