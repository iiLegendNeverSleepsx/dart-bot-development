const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("../infractions.json","utf8"));

module.exports.run = async (bot, message, args) => {
	if (!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("it doesn't look like you can use that!")
	let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
	if (!wUser) return message.reply(" that member can't be found!");
	if (wUser.hasPermission("MANAGE_MESSAGES") || wUser.hasPermission("MANAGE_MEMBERS")) return message.reply("can't warn that user!")
	let reason = args.join(" ").slice(22);

	if (!warns[wUser.id]) warns[wUser.id] = {
		warns: 0 
	}

	warns[wUser.id].warns++;

	fs.writeFile("../infractions.json", JSON.stringify(warns) (err) => {
		if (err) console.log(err);
	})

	let warnEmbed = new Discord.RichEmbed()
	.setDescription("Infraction Given")
	.setAuthor(message.author.username)
	.setColor("#fc6500")
	.addField("User:", wUser.tag)
	.addField("Reason:", reason)
	.addField("Number of Infractions:", warns[wUser.id].warns)

	message.channel.send(warnEmbed)
}

module.exports.help = {
	name: "warn",
	usage: "warn <user> [reason]"
}
