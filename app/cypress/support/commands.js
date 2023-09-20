// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/// <reference types"Cypress" />
/// <reference types"cypress-xpath" />

// Custom command for clicking on link using label

Cypress.Commands.add('clickLink', (label) => {
  cy.get('a').contains(label).click();
});

// Overwrite contains

// Cypress.Commands.overwriteQuery(
//   'contains',
//   function (contains, filter, text, userOptions = {}) {
//     // This is parameter resolution from Cypress v12.7.0 source
//     if (Cypress._.isRegExp(text)) {
//       // .contains(filter, text)
//       // Do nothing
//     } else if (Cypress._.isObject(text)) {
//       // .contains(text, userOptions)
//       userOptions = text;
//       text = filter;
//       filter = '';
//     } else if (Cypress._.isUndefined(text)) {
//       // .contains(text)
//       text = filter;
//       filter = '';
//     }

//     userOptions.matchCase = false;

//     let contains0 = contains.bind(this); // this line fixes the error

//     return contains0(filter, text, userOptions);
//   }
// );

//  Custom command for login

Cypress.Commands.add('loginapp', (email, password) => {
  cy.get('#Email').type(email);
  cy.get('#Password').type(password);
  // cy.get("button[class='button-1 login-button]").click();
  cy.get('form > .buttons > .button-1').click();
});
