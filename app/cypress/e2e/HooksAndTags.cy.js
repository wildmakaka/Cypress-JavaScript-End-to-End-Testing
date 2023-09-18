describe('Hooks and Tags', () => {
  before(() => {
    cy.log('***** Launch app *****');
  });

  after(() => {
    cy.log('***** Close app *****');
  });

  beforeEach(() => {
    cy.log('***** Login *****');
  });

  afterEach(() => {
    cy.log('***** Logout *****');
  });

  it('[OK!] Search', () => {
    cy.log('***** Searching *****');
  });

  it('[OK!] Advanced Search', () => {
    cy.log('***** Advanced Searching *****');
  });

  it('[OK!] Listing Products', () => {
    cy.log('***** Listing Products *****');
  });

  //
});
