const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {
  const allowedid = ['258706134850863106','395860451382001665','293060399106883584'];
  if (allowedid.includes(message.author.id)) {
      bot.user.client.user.setPresence({ game: { type: args[1].toUpperCase(), name: args.splice(2, args.length).join(" ") }, status: args[0].toLowerCase() }).then(() => {
			message.reply(":white_check_mark: All set!").catch(() => bot.safeSend(message, module.exports.help.name));
		}).catch(() => {
			message.reply(":x: Couldn't change the status!").catch(() => bot.safeSend(message, module.exports.help.name));
		});
	},

module.exports.help = {
	name: "ss",
	usage: "s",
	description: "Set's the bots playing status.",
	longdes: "Different status, online, idle, dnd, and invisible!",
	mentionedperm: "PERMISSION_REQUIRED",
  category: "none"
}
