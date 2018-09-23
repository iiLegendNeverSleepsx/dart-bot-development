const Discord = require("discord.js");
const fs = require("fs"); 

module.exports.run = async (bot, message, args) => {
    const client = bot;
    message.channel.send({embed: {
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "Donate to us!",
    description: "Donating to us can help us improve the bot and make it better! You can also get cool features.",
    fields: [{
        name: "Patreon",
        value: "You may donate to us at Patreon [here](https://www.patreon.com/dartbot) - https://www.patreon.com/dartbot."
      },
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "By SGII2, Lxphere, and Dart"
    }
  }
});
}

module.exports.help = {
	name: "donate",
	usage: "donate",
	description: "nil",
	longdes: "Donate to Dart Bot! : )",
	mentionedperm: "None",
  category: "Premium"
}
