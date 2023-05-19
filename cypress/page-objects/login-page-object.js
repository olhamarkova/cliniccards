/// <reference types="cypress" />

import { errorsUA } from "../test-data/errors.js";

export class LoginPage {
  elements = {
    loginButton: () => cy.get("#loginButton"),
    loginForm: () => cy.get(".loginFormWrap"),
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
      .should("have.text", errorsUA.passwordError);
    this.elements.lockIcon().should("have.css", "color", "rgb(243, 86, 93)");
    this.elements
      .envelopeIcon()
      .should("have.css", "color", "rgb(243, 86, 93)");
  }
}
