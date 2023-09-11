describe('Handle DropDowns', () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false;
  });

  it.skip('Dropdown with select', () => {
    cy.visit('https://www.zoho.com/commerce/free-demo.html');

    cy.get('#zcf_address_country')
      .select('Italy')
      .should('have.value', 'Italy');
  });

  it.skip('Dropdown without select', () => {
    cy.visit('http://dummyticket.com/dummy-ticket-for-visa-application/');

    cy.get('#select2-billing_country-container').click();

    cy.get('.select2-search__field').type('Italy').type('{enter}');

    cy.get('#select2-billing_country-container').should('have.text', 'Italy');
  });

  it.skip('Auto suggest dropdown', () => {
    cy.visit('http://wikipedia.org/');

    cy.get('#searchInput').type('Delhi');

    cy.get('.suggestion-title').contains('Delhi University').click();
  });

  it('Dynamic dropdown', () => {
    cy.visit('http://google.com/');

    // cy.get("input[name='q']").type('cypress automation');
    cy.get("textarea[name='q']").type('cypress automation');

    cy.wait(3000);

    cy.get('div.wM6W7d>span').should('have.length', 12);

    cy.get('div.wM6W7d>span').each(($el, index, $list) => {
      if ($el.text() == 'cypress automation tutorial') {
        cy.wrap($el).click();
      }
    });

    cy.get("textarea[name='q']").should(
      'have.value',
      'cypress automation tutorial'
    );
  });
});
