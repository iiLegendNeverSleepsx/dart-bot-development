const Discord = require("discord.js");
const fs = require("fs");
let warns = JSON.parse(fs.readFileSync("./infractions.json","utf8"));

module.exports.run = async (bot, message, args) => {
	const client = bot;
	let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
	if (!wUser) wUser = message.author;


   message.channel.send({embed: {
       _color: 15844367,
       get color() {
           return this._color;
       },
       set color(value) {
           this._color = value;
       },
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "Infractions",
    description: `Viewing infractions for user **${wUser.tag}**.`,
    fields: [{
        name: "Number of Infractions",
        value: `${warns[wUser.id]}`,
        inline: true
      },
      {
        name: "Latest Infraction",
        value: "nil",
        inline: true
      },
      {
        name: "Last Ten Infractions",
        value: "nil",
        inline: false
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
	name: "infractions",
	usage: "infractions [user]",
	description: "nil",
	longdes: "Views a user's infractions.",
	mentionedperm: "none",
  category: "Moderation"
}
