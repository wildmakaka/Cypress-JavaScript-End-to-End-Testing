describe('Custom commands', () => {
  it.skip('[OK!] Handling links', () => {
    cy.visit('https://demo.nopcommerce.com/');

    // cy.get(
    //   "div[class='item-grid] div:nth-child(2) div:nth-child(1) div:nth-child(2) h2:nth-child(1) a:nth-child(1)"
    // ).click();

    // cy.get(
    //   ':nth-child(2) > .product-item > .details > .product-title > a'
    // ).click();

    cy.clickLink('Apple MacBook Pro 13-inch');

    cy.get("div[class='product-name'] h1").should(
      'have.text',
      'Apple MacBook Pro 13-inch'
    );
  });

  it.skip('[OK!] Overwriting existing command', () => {
    cy.visit('https://demo.nopcommerce.com/');
    cy.clickLink('APPLE MACBOOK PRO 13-inch');

    cy.get("div[class='product-name'] h1").should(
      'have.text',
      'Apple MacBook Pro 13-inch'
    );
  });

  it('[OK!] Login command', () => {
    cy.visit('https://demo.nopcommerce.com/');
    cy.clickLink('Log in');
    cy.wait(3000);
    cy.loginapp('testing@gmail.com', 'test123');

    cy.get('.ico-account').should('have.text', 'My account');
  });

  //
});
