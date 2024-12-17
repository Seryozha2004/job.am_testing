//search
import searchPage from './SearchPage-copy-1.cy';

describe('Search Functionality - No Results', () => {
  it('Displays search term when no results are found and shows no results in the container', () => {
    cy.visit('https://job.am');

    const searchQuery = 'nonexistentquery';
    searchPage.search(searchQuery); 

    searchPage.verifySearchInput(searchQuery); 
    searchPage.verifySearchQueryVisible(searchQuery); 
  });
});

Cypress.on('uncaught:exception', (err, runnable) => {
  if (err.message.includes('validate is not defined')) {
    return false; 
  }
  return true;
});

//signup
import signupPage from './SignupPage.cy';

describe('Job.am Signup Functionality Tests', () => {
  const validName = 'John Doe';
  const validEmail = 'john.doe@example.com';
  const validPassword = 'ValidPass123';

  beforeEach(() => {
    cy.visit('https://job.am/Account/UserSignup');
  });

  it('Valid registration (don\'t click submit if everything is correct)', () => {
    signupPage.fillSignupForm(validName, validEmail, validPassword);

    signupPage.verifyFields(validName, validEmail, validPassword);
  });

  it('Invalid email format (click submit to check validation)', () => {
    const invalidEmail = 'invalid-email';
    signupPage.fillSignupForm(validName, invalidEmail, validPassword);

    signupPage.submitForm();
    signupPage.emailInput.should('have.value', invalidEmail);
  });

  it('Password too short (click submit to check validation)', () => {
    const shortPassword = '123';
    signupPage.fillSignupForm(validName, validEmail, shortPassword);

    signupPage.submitForm();
    signupPage.passwordInput.should('have.value', shortPassword);
  });

  it('Empty fields (click submit to check validation)', () => {
    signupPage.submitForm();

    signupPage.nameInput.should('have.value', '');
    signupPage.emailInput.should('have.value', '');
    signupPage.passwordInput.should('have.value', '');
  });
});

//login
import { loginPage } from './LoginPage.cy';

describe('Login Form Functionality - Job.am', () => {
  beforeEach(() => {
    loginPage.visit(); 
  });

  it('Valid login input (no button click)', () => {
    loginPage.enterUsername('validuser@example.com'); 
    loginPage.enterPassword('validpassword123'); 

    loginPage.verifyUsernameValue('validuser@example.com');
    loginPage.verifyPasswordValue('validpassword123');

  });

  it('Invalid login input (no button click)', () => {
    loginPage.enterUsername('validuser@example.com'); 
    loginPage.enterPassword('wrongpassword'); 

    
    loginPage.verifyUsernameValue('validuser@example.com');
    loginPage.verifyPasswordValue('wrongpassword');

  });

  it('Empty fields (attempt button click)', () => {
    loginPage.clearFields(); 
    loginPage.clickLoginButton(); 

    
    loginPage.verifyUsernameValue('');
    loginPage.verifyPasswordValue('');
  });
});
