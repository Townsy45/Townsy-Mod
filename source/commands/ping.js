module.exports = {
  name: "ping",
  aliases: ["p"],
  category: "System",
  async run({ message }) {
    // Send a "Pinging" Message
    const msg = await message.channel.send("🏓 Pinging...");

    //Check if the message was already edited
    const timestamp = message.editedTimestamp
      ? message.editedTimestamp
      : message.createdTimestamp;

    //define the bot's latency
    const latency = `\`\`\`js\nLatency: ${Math.floor(
      msg.createdTimestamp - timestamp
    )}ms\nAPI: ${Math.round(message.client.ws.ping)}ms\n\`\`\``;

    //edit the message so that it displays the real ping
    msg.edit(latency);
  }
};
