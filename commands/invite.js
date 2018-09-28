const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {
    message.channel.send({embed: {
    color: 10181046,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "Dart Bot",
    description: "Dart Bot is a ideal moderation bot that is available to everyone!",
    fields: [{
        name: "Bot Invite",
        value: "There is no invite currently.",
        inline: true
      },
      {
       name: "Server Invite",
       value: "https://discord.gg/CKwfTW8",
       inline: true
      },
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "By SGII2, Lxphere, and Dart"
    }
  }
});
}

module.exports.help = {
	name: "invite",
	usage: "invite",
	description: "nil",
	longdes: "Sends an invite for our support server as well as a bot invite link.",
	mentionedperm: "none",
  category: "Utility"
}
