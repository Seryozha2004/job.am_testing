//LoginPage.js
class LoginPage {
  constructor() {
    // Locators
    this.usernameInput = 'input[name="Email"]';
    this.passwordInput = 'input[name="Password"]';
    this.loginButton = 'input[type="submit"]';
  }

  visit() {
    cy.visit('https://job.am/Account/Login');
  }

  enterUsername(username) {
    cy.get(this.usernameInput).type(username);
  }

  enterPassword(password) {
    cy.get(this.passwordInput).type(password);
  }

  clearFields() {
    cy.get(this.usernameInput).clear();
    cy.get(this.passwordInput).clear();
  }

  clickLoginButton() {
    cy.get(this.loginButton).click();
  }

  verifyUsernameValue(value) {
    cy.get(this.usernameInput).should('have.value', value);
  }

  verifyPasswordValue(value) {
    cy.get(this.passwordInput).should('have.value', value);
  }
}

export const loginPage = new LoginPage();
