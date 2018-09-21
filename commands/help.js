const Discord = require("discord.js");
const fs = require("fs");
var embedutility = ``;
var embedmoderation = ``;
var embeddev = ``;

module.exports.run = async (bot, message, args) => {	
 fs.readdir("./commands", (err, files) => {
	if (err) console.log(err);
	let jsfile = files.filter(f => f.split(".").pop() === "js")
	if (jsfile.length <= 0) {
		return
	}

	jsfile.forEach((f, i) => {
		let props = require(`../commands/${f}`);
		if (props.help.category === "Utility") {
			embedutility = embedutility + ` \n ;${props.help.name} - ${props.help.description}`
		} else if (props.help.category === "Moderation") {
			embedmoderation = embedmoderation + ` \n ;${props.help.name} - ${props.help.description}`
		}
	});
 })

const command = args.shift();

if (command === 'help' || command === 'ping' || command === 'say' || command === 'warn') {
	fs.readdir("./commands", (err, files) => {
		let props = require(`../commands/${command}`);
		message.channel.send({embed: {
    			color: 3447003,
    			author: {
      			name: bot.user.username,
      			icon_url: bot.user.avatarURL
    			},
    		title: "Commands",
    		description: "Commands for Dart Bot",
    	fields: [{
        	name: "Name",
        	value: props.help.name,
		inline: true
      	},
	{
        	name: "Usage",
        	value: "`;" + props.help.usage + "`",
		inline: true
      	},
	{
        	name: "Required Permission",
        	value: props.help.mentionedperm,
		inline: true
      	},
	{
		name: "Category",
		value: props.help.category,
		inline: true
	},
	{
        	name: "Description",
        	value: props.help.longdes,
		inline: true
      	},
    	],
    	timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "By SGII2, Lxphere, and Dart"
    }
  }
});})
} else {message.channel.send("I sent a direct message of the help menu! If you did not get it, enable `Direct Messages from Server Members` and try again.");
message.author.send({embed: {
    color: 3447003,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "Commands",
    description: "Commands for Dart Bot",
    fields: [{
        name: "Moderation",
        value: "`;warn` - Warns the user given. \n`;say` - Sends a message as the bot."
      },
      {
        name: "Utility",
        value: "`;ping` - Displays ping. \n`;help` - Shows this menu."
      },
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "By SGII2, Lxphere, and Dart"
    }
  }
});}
	
}

module.exports.help = {
	name: "help",
	usage: "sends all the commands",
	description: "sends all server commands",
	longdes: "Sends a list of all the command to the user who ran the command.",
	mentionedperm: "none",
  category: "Utility"
}
