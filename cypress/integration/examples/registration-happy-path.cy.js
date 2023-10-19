/// <reference types="cypress" />

describe("The User Can Sign Up On The Registration Page", function () {
  before(function () {
    cy.viewport(1280, 800);
    cy.visit(Cypress.env("url") + "ua");
  });

  it("Check If the Registration Form Is Opened", function () {
    cy.get(".menuGreenButton").click();
    cy.url().should("contain", "registration");
    cy.get("#registrationForm").should("be.visible");
    cy.get(".text-center").should("be.visible").and("have.text", "Реєстрація");
    cy.get(".google")
      .should("be.visible")
      .and("have.attr", "href", "/u/google?signup=Y");
    cy.get(".hr").should("be.visible");
    cy.get("#name")
      .should("be.visible")
      .and("have.attr", "placeholder", "Прізвище Ім'я");
    cy.get(".fa-user")
      .should("be.visible")
      .and("have.css", "color", "rgb(204, 204, 204)");
    cy.get("#phone")
      .should("be.visible")
      .and("have.attr", "placeholder", "050 123 4567");
    cy.get(".iti__selected-flag")
      .should("be.visible")
      .and("have.attr", "title", "Ukraine (Україна): +380")
      .click();
    cy.get("#iti-0__country-listbox").should("be.visible");
    //assertions for every li - should have data-dial-code and data-country-code
  });
});
