import Login from '../PageObjects/LoginPage.js';

describe('Pom', () => {
  it('Login Test', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/');

    cy.get("input[placeholder='Username']").type('Admin');

    cy.get("input[placeholder='Password']").type('admin123');

    cy.get("button[type='submit']").click();

    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should(
      'have.text',
      'Dashboard'
    );
  });

  it('Login Test Using POM', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/');

    const login = new Login();

    login.setUserName('Admin');
    login.setPassword('admin123');
    login.clickSubmit();
    login.verifyLogin();
  });

  it('Login Test Using POM with fixture', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/');

    cy.fixture('orangehrm').then((data) => {
      const login = new Login();

      login.setUserName(data.username);
      login.setPassword(data.password);
      login.clickSubmit();
      login.verifyLogin();
    });
  });

  //
});

export default Login;
