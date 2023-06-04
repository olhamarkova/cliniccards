/// <reference types="cypress" />

import { LoginPage } from "../page-objects/LoginPage.js";
import { errorsUA } from "../test-data/errors.js";

const loginPage = new LoginPage();

export class LoginPageActions {
  openLoginPage() {
    loginPage.elements.loginButton().should("be.visible").click();
  }

  validateLoginForm() {
    loginPage.elements.loginForm().should("be.visible");
  }

  validateEmptyFields() {
    loginPage.elements.emailInputField().should("have.value", "");
    loginPage.elements.passwordInputField().should("have.value", "");
  }

  submit() {
    loginPage.elements.submitButton().should("be.visible").click();
  }

  validateErrorMessages() {
    loginPage.elements
      .emailErrorMessage()
      .should("be.visible")
      .and("have.text", errorsUA.emailError);
    loginPage.elements
      .passwordErrorMessage()
      .should("be.visible")
      .and("have.text", errorsUA.passwordError);
    loginPage.elements
      .lockIcon()
      .should("be.visible")
      .and("have.css", "color", "rgb(243, 86, 93)");
    loginPage.elements
      .envelopeIcon()
      .should("be.visible")
      .and("have.css", "color", "rgb(243, 86, 93)");
  }
}
