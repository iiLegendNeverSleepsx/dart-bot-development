const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {
    const allowedid = ['258706134850863106','395860451382001665','293060399106883584'];
    if (allowedid.includes(message.author.id)) {
	    let olduser = bot.user.username;
	    let newuser = args.join(" ");
	    bot.user.setUsername(args.join(" ")).then(() => {message.reply(`new username set to **${args.join(" ")}**!`); bot.guilds.get('489367652410589185').channels.get('496823703988994048').send(`My username has been changed from **${olduser}** to **${newuser}** by **${message.author.tag}**.`)})
	    	.catch((error) => {message.reply(`can not set username to **${newuser}** because of \`${error}\``); bot.guilds.get('489367652410589185').channels.get('496823703988994048').send(`Set username command ran by**${message.author.tag}** failed with error: \`${error}\`.`)})
	    
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
