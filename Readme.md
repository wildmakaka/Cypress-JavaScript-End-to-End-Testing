# [[YouTube] [SDET- QA Automation Techie] Cypress - JavaScript End to End Testing [ENG, 2022]](https://www.youtube.com/playlist?list=PLUDwpEzHYYLvA7QFkC1C0y0pDPqYS56iU)

<br/>

### Part 01. Introduction

<br/>

### Part 02. Environment setup on Windows & Mac OS

```
$ npm init -y
$ npm install cypress
```

Start cypress

```
$ npx cypress open

or

$ node_modules/.bin/cypress open
```

<br/>

### Part 03. How To Write & Run Tests in Cypress

<br/>

```js
describe('My First Test', () => {
  it('verify title-positive', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/');
    cy.title().should('eq', 'OrangeHRM');
  });

  it('verify title-negative', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/');
    cy.title().should('eq', 'OrangeHRM123');
  });
});
```

<br/>

```
$ node_modules/.bin/cypress run
$ node_modules/.bin/cypress run --headed
$ node_modules/.bin/cypress run --headless
$ node_modules/.bin/cypress run --spec cypress/e2e/MyFirstTest.cy.js
$ node_modules/.bin/cypress run --browser chrome
$ node_modules/.bin/cypress run --browser chrome --headed
```

<br/>

### Part 04. CSS & XPath Locators | get() & xpath() methods

http://automationpractice.com/ - not working right now

https://chrome.google.com/webstore/detail/selectorshub/ndgimibanhlabgdgjcpbbndiehljcpfh

```
$ npm install -D cypress-xpath
```

<br/>

**cypress/support/commands.js**

```
/// <reference types"Cypress" />
/// <reference types"cypress-xpath" />
```

<br/>

**cypress/support/e2e.js**

```
require('cypress-xpath')
```

<br/>

**CSSLocators.cy.js**

```js
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
```

<br/>

**XPathLocators.cy.js**

```js
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
```

<br/>

### Part 05. Assertions

<br/>

### Part 06. Folder Structure | IntelliSense Auto Suggestions

<br/>

![Cypress](/img/pic01.png 'Cypress')

<br/>

### Part 07. Interacting with Elements | Radio Buttons & Checkboxes

https://itera-qa.azurewebsites.net/ - not working right now

<br/>

### Part 08. Interacting with Elements | DropDowns
