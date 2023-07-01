/// <reference types="cypress" />

import { textsUA } from "../../test-data/texts.js";
import { urls } from "../../test-data/urls.js";

describe("Check the Login Page", function () {
  before(function () {
    cy.visit(Cypress.env("url") + "ua");
    cy.login();
  });

  it("Check If the New User Sees Demo Patient", function () {
    cy.url().should("contain", urls.allPatients);
    cy.get(".patientName").should("contain", textsUA.demoPatient);
  });
});
