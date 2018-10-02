const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("BAN_MEMBERS") || !message.member.hasPermission("ADMINISTRATOR"))
      return message.reply("insufficent permissions! You need to have the `BAN_MEMBERS` permission!");
    
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!member)
      return message.reply("please mention a valid member of this server!");
    if(!member.kickable) 
      return message.reply("I cannot ban this user! Do they have a higher role? **Do I have ban permissions**?");
    
    let reason = args.slice(1).join(' ');
    if(!reason) reason = "no reason provided";
    
    await member.ban(reason)
      .catch(error => message.reply(`sorry ${message.author}, I couldn't ban because of: ${error}`));
    message.reply(`${member.user.tag} has been banned by ${message.author.tag} because: ${reason}`);
}

module.exports.help = {
	name: "ban",
	usage: "ban <user> [reason]",
	description: "nil",
	longdes: "Bans the user given.",
	mentionedperm: "BAN_MEMBERS",
  category: "Moderation"
}
