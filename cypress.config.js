const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    excludeSpecPattern: [
      "./cypress/e2e/1-getting-started/*", 
      "./cypress/e2e/2-advanced-examples/*"
    ],
    testIsolation: false, // true es el valor por defecto
    viewportWidth: 1920,
    viewportHeight: 1080,
    baseUrl: "https://automationintesting.online/",
  },
});
