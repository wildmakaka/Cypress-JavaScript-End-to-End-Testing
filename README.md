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

https://chrome.google.com/webstore/detail/selectorshub/


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
