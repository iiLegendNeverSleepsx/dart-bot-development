const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {
    const allowedid = ['258706134850863106','395860451382001665','293060399106883584'];
    if (allowedid.includes(message.author.id)) {
	    bot.user.setUsername(args.join(" "));
	    message.reply(`new username set to **${args.join(" ")}`)
    }
}

module.exports.help = {
	name: "setname",
	usage: "setname <username>",
	description: "nil",
	longdes: "Changes the bot username to what is sent.",
	mentionedperm: "DEVELOPER",
  category: "Developer"
}
