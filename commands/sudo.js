const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {
  const client = bot;
  //what happens when the command is ran, do it normally.
  const allowedid = ['258706134850863106','395860451382001665','293060399106883584'];
  if (allowedid.includes(message.author.id)) {
  let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if (!wUser) return message.reply("that member can't be found!");
	  
	  let unused = args.shift();
	  let cmd = args.shift();
	  let nargs = args;
	  
	 let newuser = message.guild.members.get(`${wUser.id}`):
	 
	let commandfile = client.commands.get(cmd);
	if (commandfile) commandfile.run(client,,nargs);
	
  }
}

module.exports.help = {
	name: "sudo",
	usage: "sudo <user> <command>",
	description: "nil",
	longdes: "Forces a user to do a command.",
	mentionedperm: "DEVELOPER",
  category: "Developer"
}
