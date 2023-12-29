const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx,mjs}',
    baseUrl: 'https://www.akveo.com/ngx-admin/',
    watchForFileChanges: false,
  },
});
 