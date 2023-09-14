describe('CSSLocators', () => {
  it('csslocators', () => {
    cy.visit('https://automationpractice.com/index.php');
    // cy.get('#search_query_top').type('T-Shirts');
    // cy.get('.search_query_top').type('T-Shirts');
    // cy.get("[name='search_query']").type('T-Shirts');

    cy.get("input.search_query_top[name='search_query']").type('T-Shirts');

    cy.get("[name='submit_searh']").click();
    cy.get('.lighter').contains('T-Shirts');
  });
});
