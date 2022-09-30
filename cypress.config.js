const { defineConfig } = require("cypress");

module.exports = defineConfig({
  

  

  e2e: {
    experimentalStudio: true,
    chromeWebSecurity:false,
    setupNodeEvents(on, config) {
      defaultCommandTimeout:6000
    },
  },
});
