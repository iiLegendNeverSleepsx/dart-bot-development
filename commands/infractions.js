import { readFileSync } from "fs";
let warns = JSON.parse(readFileSync("./infractions.json","utf8"));

export async function run(bot, message, args) {
	const client = bot;
	let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
	if (!wUser) wUser = message.author;


   message.channel.send({embed: {
    color: 15844367,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "Infractions",
    description: `Viewing infractions for user **${wUser.tag}**.`,
    fields: [{
        _name: "Number of Infractions",
        get name() {
            return this._name;
        },
        set name(value) {
            this._name = value;
        },
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

export const help = {
	name: "infractions",
	usage: "infractions [user]",
	description: "nil",
	longdes: "Views a user's infractions.",
	mentionedperm: "none",
  category: "Moderation"
}
