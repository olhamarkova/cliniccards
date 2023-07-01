/// <reference types="cypress" />

export class RecoveryPassword {
  elements = {
    recoveryPasswordForm: () => cy.get(".loginFormWrap"),
    recoveryPasswordSubmitButton: () => cy.get(".form-actions .btn"),
    recoveryPassowrdEmailInputField: () => cy.get("#email"),
    recoveryPasswordError: () => cy.get("#emailError"),
  };
}
