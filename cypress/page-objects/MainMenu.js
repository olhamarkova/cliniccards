/// <reference types="cypress" />

export class MainMenu {
  elements = {
    clinicAvatar: () => cy.get(".topCCMenuClinicName"),
    createClinicButton: () => cy.get(".fa-plus-circle"),
    createClinicSubmitButton: () =>
      cy.get(".modal-footer button[type='submit']"),
  };
}
