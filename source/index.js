// Setup environment variables
require('dotenv').config();
// Set up aliases
require('module-alias/register');

// Handler
const Simply = require('simply-discord');
const Handler = new Simply({
  defaultPrefix: process.env.DEFAULT_PREFIX
});

// Start the bot and services
(async () => {
  // Bot Login
  await Handler.client.login(process.env.TOKEN);
  // Connect to Database
  require('database').connect();
})();
