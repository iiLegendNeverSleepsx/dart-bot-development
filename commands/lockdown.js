const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {
 const allowedid = ['258706134850863106','395860451382001665','293060399106883584'];
   exec: async (call) => {
    if (allowedid.includes(message.author.id)) {
         try {
			await call.client
				`this.locked.value = ${!call.client.locked.value};` +
				"this.locked.channels = [];"
			call.message.reply(`The client is now ${call.client.locked.value ? "in" : ""}accessible.`);
}

module.exports.help = {
	name: "Command name.",
	usage: "Command usage.",
	description: "A description found in the ;help embed.",
	longdes: "A description that is found in ;help <command>",
	mentionedperm: "PERMISSION_REQUIRED",
  category: "none"
}
