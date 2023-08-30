const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', {
        log(message){
          console.log(`Soy el console log del task ${message}`);
          return null;
        }
      })
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
