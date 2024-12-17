// signupPage.js
class SignupPage {
  // Locators
  get nameInput() {
    return cy.get('input[name="FullName"]');
  }

  get emailInput() {
    return cy.get('input[name="Email"]');
  }

  get passwordInput() {
    return cy.get('input[name="Password"]');
  }

  get signupButton() {
    return cy.get('input[type="submit"]');
  }

  // Methods
  fillSignupForm(name, email, password) {
    this.nameInput.type(name);
    this.emailInput.type(email);
    this.passwordInput.type(password);
  }

  submitForm() {
    this.signupButton.click();
  }

  verifyFields(name, email, password) {
    this.nameInput.should('have.value', name);
    this.emailInput.should('have.value', email);
    this.passwordInput.should('have.value', password);
  }
}

export default new SignupPage();
