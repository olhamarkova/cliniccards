/// <reference types="cypress" />

import { errorsUA } from "../test-data/errors.js";

export class LoginPage {
  elements = {
    loginButton: () => cy.get("#loginButton"),
    loginForm: () => cy.get(".loginFormWrap"),
    emailInputField: () => cy.get("#email"),
    passwordInputField: () => cy.get("#password"),
    submitButton: () => cy.get("button[type='submit']"),
    emailErrorMessage: () => cy.get("#emailError"),
    passwordErrorMessage: () => cy.get("#loginForm div:nth-child(10) span"),
    lockIcon: () => cy.get(".fa-lock"),
    envelopeIcon: () => cy.get(".fa-envelope"),
  };

  validateErrorMessages() {
    this.elements
      .emailErrorMessage()
      .should("be.visible")
      .and("have.text", errorsUA.emailError);
    this.elements
      .passwordErrorMessage()
      .should("be.visible")
      .and("have.text", errorsUA.passwordError);
    this.elements
      .lockIcon()
      .should("be.visible")
      .and("have.css", "color", "rgb(243, 86, 93)");
    this.elements
      .envelopeIcon()
      .should("be.visible")
      .and("have.css", "color", "rgb(243, 86, 93)");
  }
}
