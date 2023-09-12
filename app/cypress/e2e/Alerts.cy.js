describe('Alerts', () => {
  it.skip('JS alert', () => {
    cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
    cy.get("button[onclick='jsAlert()']").click();

    cy.on('window:alert', (t) => {
      expect(t).to.contains('I am a JS Alert');
    });

    cy.get('#result').should('have.text', 'You successfully clicked an alert');
  });

  it.skip('JS confirm alert - OK', () => {
    cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
    cy.get("button[onclick='jsConfirm()']").click();

    cy.on('window:confirm', (t) => {
      expect(t).to.contains('I am a JS Confirm');
    });

    cy.get('#result').should('have.text', 'You clicked: Ok');
  });

  it.skip('JS confirm alert - Cancel', () => {
    cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
    cy.get("button[onclick='jsConfirm()']").click();

    cy.on('window:confirm', (t) => {
      expect(t).to.contains('I am a JS Confirm');
    });

    cy.on('window:confirm', () => false);

    cy.get('#result').should('have.text', 'You clicked: Cancel');
  });

  it.skip('JS prompt alert', () => {
    cy.visit('https://the-internet.herokuapp.com/javascript_alerts');

    cy.window().then((win) => {
      cy.stub(win, 'prompt').returns('Welcome Marley');
    });

    cy.get("button[onclick='jsPrompt()']").click();
    cy.get('#result').should('have.text', 'You entered: Welcome Marley');
  });

  it.skip('Authenticated alert - Approach1', () => {
    cy.visit('https://the-internet.herokuapp.com/basic_auth', {
      auth: { username: 'admin', password: 'admin' },
    });

    cy.get("div[class='example'] p").should('have.contain', 'Congratulations!');
  });

  it.only('Authenticated alert - Approach2', () => {
    cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth');
    cy.get("div[class='example'] p").should('have.contain', 'Congratulations!');
  });
});
