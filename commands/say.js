const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {
    if (message.author.hasPermission("MANAGE_MESSAGES") {
      const sayMessage = args.join(" ");
      message.channel.send(sayMessage);
      message.delete();
    } else {message.reply("it doesn't look like you can use that!")
}

module.exports.help = {
	name: "say",
	usage: "say <message>",
	description: "sends a message as the bot",
	longdes: "Sends the message given in the command as the bot.",
	mentionedperm: "MANAGE_MESSAGES",
  category: "Moderation"
}
