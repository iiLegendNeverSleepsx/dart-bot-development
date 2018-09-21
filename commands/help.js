const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {
  message.channel.send("I sent a direct message of the help menu! If you did not get it, enable `Direct Messages from Server Members` and try again.")
}

module.exports.help = {
	name: "help",
	usage: "sends all the commands",
	description: "sends all server commands",
	longdes: "Sends a list of all the command to the user who ran the command.",
	mentionedperm: "none",
  category: "Utility"
}
