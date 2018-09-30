const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("MANAGE_NICKNAMES") || !message.member.hasPermission("ADMINISTRATOR"))
      return message.reply("error! You do not have permission to use this command! You need the `MANAGE_NICKNAMES` permission!");
    
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!member)
      return message.reply("please mention a valid member of this server");
    
    let reason = args.slice(1).join(' ');
    if(!reason) reason = "";
    let nnick = "";
    if(!reason) {message.channel.send(`${member.user.tag}'s nickname successfully cleared!`);} else {message.channel.send(`${member.user.tag}'s nickname successfully set to **${reason}**!`);}
    
    await member.setNickname(reason)
      .catch(error => message.reply(`sorry ${message.author}, I couldn't nickname because of : ${error}`));
}

module.exports.help = {
	name: "nick",
	usage: "nick <user> <nickname>",
	description: "nil",
	longdes: "Nicknames the user given to the nickname given.",
	mentionedperm: "MANAGE_NICKNAMES",
  category: "Moderation"
}
