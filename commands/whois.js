const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {
    const whoisuser = message.mentions.members.first() || message.guild.members.get(args[0]);
    const embed = new Discord.RichEmbed()
  .setTitle("Who Is")
  .setAuthor("Dart Bot", bot.user.avatarURL)
  .setColor("#00AE86")
  .setDescription("Whois command")
  .setFooter("Requested", "http://i.imgur.com/w1vhFSR.png")
  .setThumbnail(whoisuser.avatarURL)
  .setTimestamp()
    
  .addField("Name", whoisuser.name, true)
  .addField("Discriminator", whoisuser.discriminator, true)
  .addField("ID", whoisuser.ID)
  .addField("Created At", whoisuser.createdTimestamp)

  message.channel.send({embed});
}

module.exports.help = {
	name: "whois",
	usage: "whois <user>",
	description: "nil",
	longdes: "Gets information about a user.",
	mentionedperm: "None",
  category: "Moderation"
}
