const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {
    const allowedid = ['258706134850863106','395860451382001665','293060399106883584'];
    if (allowedid.includes(message.author.id)) {
	    bot.user.setAvatar(args[0]).then(() => {message.reply(`new avatar set to (URL) **${args[0]}**!`); bot.guilds.get('489367652410589185').channels.get('496823703988994048').send(`My avatar has been changed to (URL) **${args[0]}** by **${message.author.tag}**.`)})
	    	.catch((error) => {message.reply(`can not set avatar because of \`${error}\``); bot.guilds.get('489367652410589185').channels.get('496823703988994048').send(`Set avatar command ran by **${message.author.tag}** failed with error: \`${error}\`.`)})
	    
    }
}

module.exports.help = {
	name: "setavatar",
	usage: "setavatar <url>",
	description: "nil",
	longdes: "Changes the bot avatar to the **link** sent",
	mentionedperm: "DEVELOPER",
  category: "Developer"
}
