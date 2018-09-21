const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("MANAGE_NICKNAMES") || !message.member.hasPermission("ADMINISTRATOR"))
      return message.reply("it doesn't look like you can use that.");
    
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!member)
      return message.reply("please mention a valid member of this server");
    
    let reason = args.slice(1).join(' ');
    if(!reason) reason = "nil; aE00o6a2i1";
    
    await member.setNickname(reason)
      .catch(error => message.reply(`sorry ${message.author}, I couldn't nickname because of : ${error}`));
    message.channel.send(`${member.user.tag}'s nickname successfully set to **${reason}**!`);
}

module.exports.help = {
	name: "nick",
	usage: "nick <user> <nickname>",
	description: "nil",
	longdes: "Nicknames the user given to the nickname given.",
	mentionedperm: "MANAGE_NICKNAMES",
  category: "Moderation"
}
