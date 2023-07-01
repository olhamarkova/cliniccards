/// <reference types="cypress" />

import { LoginPage } from "../page-objects/LoginPage.js";
import { RecoveryPassword } from "../page-objects/RecoveryPassword.js";
import { errorsUA } from "../test-data/errors.js";

const loginPage = new LoginPage();
const recovery = new RecoveryPassword();

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

  // Recovery Password Page Assertions

  recoveryPassword() {
    loginPage.elements.recoveryPasswordLink().should("be.visible").click();
  }

  validateEmptyEmailField() {
    recovery.elements.recoveryPasswordForm().should("be.visible");
    recovery.elements
      .recoveryPassowrdEmailInputField()
      .should("have.value", "");
  }

  recoveryPasswordSubmit() {
    recovery.elements.recoveryPasswordSubmitButton().click();
  }

  validateRecoveryErrorMessage() {
    recovery.elements
      .recoveryPasswordError()
      .should("be.visible")
      .and("have.text", errorsUA.emailError);
  }
}
