const Discord = require("discord.js");
const fs = require("fs"); 

module.exports.run = async (bot, message, args) => {
    const client = bot;
    
    let totalSeconds = (client.uptime / 1000);
    let weeks = Math.floor(totalSeconds / 604800);
    let days = Math.floor(totalSeconds / 86400);
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = Math.round(totalSeconds % 60);
    
    let up = `${weeks}w ${days}d ${hours}h ${minutes}m ${seconds}s`;
    message.channel.send({embed: {
    color: 15158332,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "\n",
    description: "\n",
    fields: [{
        name: "Dart Bot's Uptime",
        value: up,
        inline: true
      },
  ],
    timestamp: new Date(),
    footer: {
      icon_url: `${message.author.avatarURL}`,
      text: `Requested by ${message.author.tag}`
    }
  }
});
}

module.exports.help = {
	name: "up",
	usage: "up",
	description: "nil",
	longdes: "Uptime of bot.",
	mentionedperm: "None",
  category: "Utility"
}
