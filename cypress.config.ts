const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    url: "https://cliniccards.com/",
  },
  viewportWidth: 1920,
  viewportHeight: 1080,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/e2e/*/*.cy.ts",
  },
});
