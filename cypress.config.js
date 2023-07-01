const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    url: "https://dev.cliniccards.com/",
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/integration/examples/*.cy.js",
  },
});
