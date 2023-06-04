/// <reference types="cypress" />

import { LoginPageActions } from "../../actions/LoginPageActions.js";

const loginPage = new LoginPageActions();

describe("Check the Login Page", function () {
  before(function () {
    cy.visit(Cypress.env("url") + "ua");
  });

  it("Check the Error Message If the Login and Password Fields are Empty", function () {
    loginPage.openLoginPage();
    loginPage.validateLoginForm();
    loginPage.validateEmptyFields();
    loginPage.submit();
    loginPage.validateErrorMessages();
  });
});
