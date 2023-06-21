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
    recoveryPasswordLink: () => cy.get(".create-account .pull-right a"),
    recoveryPasswordForm: () => cy.get(".loginFormWrap"),
    recoveryPasswordSubmitButton: () => cy.get(".form-actions .btn"),
    recoveryPassowrdEmailInputField: () => cy.get("#email"),
    recoveryPasswordError: () => cy.get("#emailError"),
  };
}
