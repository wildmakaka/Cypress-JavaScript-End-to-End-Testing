describe('Fixtures', () => {
  it('[OK!] Data Driven Test', () => {
    cy.fixture('orangehrm2.json').then((data) => {
      cy.visit('https://opensource-demo.orangehrmlive.com/');

      data.forEach((userdata) => {
        // cy.get("input[placeholder='Username']").type(userdata.username);
        cy.get(
          ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'
        ).type(userdata.username);

        // cy.get("input[placeholder='Password']").type(userdata.password);
        cy.get(
          ':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input'
        ).type(userdata.password);

        cy.get("button[type='submit']").click();

        if (userdata.username == 'Admin' && userdata.password == 'admin123') {
          cy.get(
            '.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module'
          ).should('have.text', userdata.expected);

          cy.get('.oxd-userdropdown-tab > .oxd-icon').click(); // logout
          cy.get(':nth-child(4) > .oxd-userdropdown-link').click(); // logout
        } else {
          // cy.get('.oxd-text.oxd-text--p.oxd-alert-context-text').should(
          //   'have.text',
          //   userdata.expected
          // );

          cy.get('.oxd-alert-content > .oxd-text').should(
            'have.text',
            userdata.expected
          );
        }
      });
    });
  });

  //
});
