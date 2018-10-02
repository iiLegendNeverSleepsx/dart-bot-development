const Discord = require("discord.js");
const fs = require("fs"); 

module.exports.run = async (bot, message, args) => {
    const client = bot;
    
    let totalSeconds = (client.uptime / 1000);
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = Math.round(totalSeconds % 60);
    
    let uptime = `${hours}h ${minutes}m ${seconds}s`;
    
    message.channel.send({embed: {
    color: 15844367,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "Stats",
    description: "\n",
    fields: [{
        name: "Uptime",
        value: uptime,
        inline: true
      },
      {
        name: "Version",
        value: "v0.0.0-DEV",
        inline: true
      },
      {
        name: "Developers",
        value: "Omnidroid v10 • SGII2#2990, sam ♔#8974, and Dart#5757",
        inline: false
      },
      {
        name: "Guilds",
        value: client.guilds.size,
        inline: true
      },
      {
        name: "Channels",
        value: client.channels.size,
        inline: true
      },
      {
        name: "Users",
        value: client.users.size,
        inline: true
      },
      {
        name: "Bot Description",
        value: "Dart Bot is a moderation bot (currently) available to all users!",
        inline: false
      },
      //{
      //  name: "",
      //  value: "",
      //  inline: true
      //},
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
	name: "stats",
	usage: "stats",
	description: "nil",
	longdes: "Shows the stats of the bot, including uptime and guilds.",
	mentionedperm: "None",
  category: "Utility"
}
