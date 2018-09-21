const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {
    const m = await message.channel.send("**Banning `justin#1337...**");
    m.edit("**justin#1337** has been banned.");
}

module.exports.help = {
	name: "ban justin",
	usage: "banjustin",
	description: "none",
	longdes: "Bans the user 'justin#1337'",
	mentionedperm: "None",
  category: "Secret"
}
