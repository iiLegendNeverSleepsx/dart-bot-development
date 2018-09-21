# Command Layout
> Be sure to edit to get the spaces


const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {
  //what happens when the command is ran, do it normally.
}

module.exports.help = {
	name: "Command name.",
	usage: "Command usage.",
	description: "A description found in the ;help embed.",
	longdes: "A description that is found in ;help <command>",
	mentionedperm: "PERMISSION_REQUIRED",
  category: "none"
}
