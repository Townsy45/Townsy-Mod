const { log } = require('utils');

module.exports = {
  name: 'ready',
  once: true,
  async run(client, handler) {
    await log.info('Bot is ready!');
  }
};
