/// <reference types="cypress" />

import { MainMenu } from "../page-objects/MainMenu.js";

const mainMenu = new MainMenu();

export class CreateClinicActions {
  clickOnClinicAvatar() {
    mainMenu.elements.clinicAvatar().click({ force: true });
  }

  openCreateClinicForm() {
    mainMenu.elements.createClinicButton().should("be.visible").click();
  }

  createClinic() {
    mainMenu.elements
      .createClinicSubmitButton()
      .should("be.visible")
      .click({ force: true });
  }
}
