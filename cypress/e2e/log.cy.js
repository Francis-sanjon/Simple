/* ==== Test Created with Cypress Studio ==== */
it('Test', function() {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear('A');
  cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin');
  cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').clear();
  cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123');
  cy.get('.oxd-button').click();
  cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click();
  cy.get(':nth-child(3) > .oxd-main-menu-item > .oxd-text').click();
  cy.get(':nth-child(4) > .oxd-main-menu-item > .oxd-text').click();
  cy.get(':nth-child(5) > .oxd-main-menu-item > .oxd-text').click();
  cy.get(':nth-child(6) > .oxd-main-menu-item > .oxd-text').click();
  cy.get(':nth-child(7) > .oxd-main-menu-item > .oxd-text').click();
  cy.get(':nth-child(8) > .oxd-main-menu-item').click();
  cy.get(':nth-child(9) > .oxd-main-menu-item > .oxd-text').click();
  cy.get(':nth-child(10) > .oxd-main-menu-item > .oxd-text').click();
  cy.get('.oxd-button--ghost').click();
  cy.get(':nth-child(11) > .oxd-main-menu-item > .oxd-text').click();
  cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click();
  /* ==== End Cypress Studio ==== */
});