/// <reference types="cypress" />

import { LoginPageActions } from "../../actions/LoginPageActions.js";

const loginPage = new LoginPageActions();

describe("Check the Login Page", function () {
  beforeEach(function () {
    cy.visit(Cypress.env("url") + "ua");
    loginPage.openLoginPage();
  });

  it("Check the Error Message If the Login and Password Fields are Empty", function () {
    loginPage.validateLoginForm();
    loginPage.validateEmptyFields();
    loginPage.submit();
    loginPage.validateErrorMessages();
  });

  it("Check the Error Message in Recovery Password Form If the Email Field Is Empty", function () {
    loginPage.recoveryPassword();
    loginPage.validateEmptyEmailField();
    loginPage.recoveryPasswordSubmit();
    loginPage.validateRecoveryErrorMessage();
  });
});
