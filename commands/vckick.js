const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {
  //what happens when the command is ran, do it normally.
}

module.exports.help = {
	name: "vckick",
	usage: ";vckick <user>",
	description: "nil",
	longdes: "Removes a user from any voice channel.",
	mentionedperm: "MOVE_MEMBERS",
  category: "Moderation"
}
