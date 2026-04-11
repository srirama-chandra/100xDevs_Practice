describe("Testing 100xDevs", () => {
    
    beforeEach(() => {
        cy.visit("https://app.100xdevs.com");
    });

    it("Testing Home Page", () => {
        cy.contains('Login').should('be.visible').click();

        cy.contains('Welcome to', { timeout: 10000 })
          .should('be.visible');

        cy.get("#email")
          .should('be.visible')
          .type("demo@gmail.com", {force:true});

        cy.get("#password")
          .type("12345678");

        cy.contains('button', 'Login').click();
    });
});