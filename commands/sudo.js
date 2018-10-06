const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {
  //what happens when the command is ran, do it normally.
  let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if (!wUser) return message.reply("that member can't be found!");
	
	
}

module.exports.help = {
	name: "sudo",
	usage: "sudo <user> <command>",
	description: "nil",
	longdes: "Forces a user to do a command.",
	mentionedperm: "DEVELOPER",
  category: "Developer"
}
