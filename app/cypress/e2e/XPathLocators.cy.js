describe('XPathLocators', () => {
  it('find no of products', () => {
    cy.visit('https://automationpractice.com/index.php');
    cy.xpath("//ui[@id='homefeatured']/li").should('have.length', 7);
  });

  it('chained xpath', () => {
    cy.visit('https://automationpractice.com/index.php');
    cy.xpath("//ui[@id='homefeatured']").xpath('./li').should('have.length', 7);
  });
});
