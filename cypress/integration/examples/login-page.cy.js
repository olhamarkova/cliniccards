/// <reference types="cypress" />

import { LoginPage } from "../../page-objects/login-page-object.js";

const loginPage = new LoginPage();

describe("Check the Login Page", function () {
  before(function () {
    cy.visit(Cypress.env("url") + "ua");
  });

  it("Check the Error Message If the Login and Password Fields are Empty", function () {
    loginPage.elements.loginButton().should("be.visible").click();
    loginPage.elements.loginForm().should("be.visible");
    loginPage.elements.submitButton().should("be.visible").click();
    loginPage.validateErrorMessages();
  });
});
