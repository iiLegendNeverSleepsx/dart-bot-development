const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {
    const m = await msg.channel.send("Pinging...");
    m.edit(`Pong! Latency is ${m.createdTimestamp - msg.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
}

module.exports.help = {
	name: "ping",
	usage: "ping",
	description: "pings the bot",
	longdes: "Pings the bot.",
	mentionedperm: "None",
  category: "Utility"
}
