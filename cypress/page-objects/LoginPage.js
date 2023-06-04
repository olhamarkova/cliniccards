/// <reference types="cypress" />

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
}
