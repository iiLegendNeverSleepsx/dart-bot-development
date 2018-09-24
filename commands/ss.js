const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {
      bot.user.client.user.setPresence({ game: { type: args[1].toUpperCase(), name: args.splice(2, args.length).join(" ") }, status: args[0].toLowerCase() }).then(() => {
			message.reply(":white_check_mark: All set!")
      }).catch(() => {
			message.reply(":x: Couldn't change the status!")
})

module.exports.help = {
	name: "ss",
	usage: "s",
	description: "Set's the bots playing status.",
	longdes: "Different status, online, idle, dnd, and invisible!",
	mentionedperm: "PERMISSION_REQUIRED",
  category: "none"
}







