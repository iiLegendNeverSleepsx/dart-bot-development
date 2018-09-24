const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {
      bot.user.client.user.setPresence({ game: { type: args[1].toUpperCase(), name: args.splice(2, args.length).join(" ") }, status: args[0].toLowerCase() }).then(() => {
			message.reply(":white_check_mark: All set!")
      }).catch(() => {
			message.reply(":x: Couldn't change the status!")
}

module.exports.help = {
	name: "Command name.",
	usage: "Command usage.",
	description: "A description found in the ;help embed.",
	longdes: "A description that is found in ;help <command>",
	mentionedperm: "PERMISSION_REQUIRED",
  category: "none"
}







