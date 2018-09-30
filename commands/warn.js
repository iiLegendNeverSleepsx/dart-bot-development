const Discord = require("discord.js");
const fs = require("fs");
let warns = JSON.parse(fs.readFileSync("./infractions.json","utf8"));

module.exports.run = async (bot, message, args) => {
	if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("it doesn't look like you can use that!");
	let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
	if (!wUser) return message.reply("that member can't be found!");
	if (wUser.hasPermission("MANAGE_MESSAGES") || wUser.hasPermission("ADMINISTRATOR")) return message.reply("cannot warn that user! Check that I have sufficent permissions, or you have permission to warn that user!");
	let reason = args.join(" ").slice(22);

	if (!warns[wUser.id]) warns[wUser.id] = {
		warns: 0 
	}

	warns[wUser.id].warns++;

	fs.writeFile("./infractions.json", JSON.stringify(warns));
	message.channel.send(`**${message.author.username}** warned <@${wUser.id}> because of **${reason}**. (Infractions for user: ${warns[wUser.id].warns})`);
	wUser.send(`You have been warned in **${message.guild.name}** for **${reason}**.`);
	
}

module.exports.help = {
	name: "warn",
	usage: "warn <user> [reason]",
	description: "warns a user",
	longdes: "Warns the user given along with a reason.",
	mentionedperm: "MANAGE_MESSAGES",
  category: "Utility"
}
