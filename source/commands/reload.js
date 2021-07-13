module.exports = {
  name: 'reload',
  aliases: ['r'],
  category: 'Utils',
  async run ({ handler, message, args }) {
    await handler.reload(args[0]);
    message.channel.send('Reload Complete');
  }
};
