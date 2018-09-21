const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {
     message.channel.setRateLimitPerUser(30, "testing");
     message.reply(":ok_hand:")
}

module.exports.help = {
	name: "slowmode",
	usage: "slowmode",
	description: "nil",
	longdes: "Sets a channel's slowmode to 30 seconds.",
	mentionedperm: "None",
  category: "Moderation"
}
