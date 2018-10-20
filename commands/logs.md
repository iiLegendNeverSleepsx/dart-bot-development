const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {
  if(!message.member.hasPermission("MANAGE_GUILD") || !message.member.hasPermission("ADMINISTRATOR"))
      return message.reply("error! You do not have permission to use this command! You need the `MANAGE_GUILD` permission!");
        let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!member)
      return if(guild.channels.exist("logs")message.reply("\nSucessfully set your log channel to #logs!")
   await if(guild.channels.exist("logs")bot.guilds.get.channels.get('logs').send(`**${member.user.tag}** has been banned by ${message.author.tag} because of: **${reason}**.`)
}
module.exports.help = {
	name: "Command name.",
	usage: "Command usage.",
	description: "A description found in the ;help embed.",
	longdes: "A description that is found in ;help <command>",
	mentionedperm: "PERMISSION_REQUIRED",
  category: "none"
}
