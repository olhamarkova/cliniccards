import { Urls } from "../types/urls";
declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Visit a page of the site.
       * @param url - url of the page
       * @example
       * cy.visitCC("price")
       */
      visitCC(url: Urls): Chainable<any>;
    }
  }
}

Cypress.Commands.add("visitCC", (url: string) => {
  cy.visit(`${Cypress.env("url")}ua/${url}`);
});
