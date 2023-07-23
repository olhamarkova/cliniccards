/// <reference types="cypress" />

import { CreateClinicActions } from "../../actions/CreateClinic.js";
import { textsUA } from "../../test-data/texts.js";
import { urls } from "../../test-data/urls.js";

const createClinic = new CreateClinicActions();

describe("Check the Login Page", function () {
  before(function () {
    cy.viewport(1280, 800);
    cy.visit(Cypress.env("url") + "ua");
    cy.login("email", "password");
  });

  it("Check If the New User Sees Demo Patient", function () {
    cy.url().should("contain", urls.allPatients);
    cy.get(".patientName").should("contain", textsUA.demoPatient);
  });

  it("The User Sholud Have Posibility To Create a New Clinic", function () {
    createClinic.clickOnClinicAvatar();
    createClinic.openCreateClinicForm();
    createClinic.createClinic();
  });
});
