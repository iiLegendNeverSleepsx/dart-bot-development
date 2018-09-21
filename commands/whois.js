const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {
    const whoisuser = message.mentions.members.first();
    const embed = new Discord.RichEmbed()
  .setTitle("Who Is")
  .setAuthor("Dart Bot", bot.user.avatar)
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor("#00AE86")
  .setDescription("Whois command/")
  .setFooter(whoisuser.tag, "http://i.imgur.com/w1vhFSR.png")
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
