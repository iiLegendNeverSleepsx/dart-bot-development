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

if (command && `../commands/` + command + `.js`) {
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
        value: "`;warn` - Warns the user given. \n`;say` - Sends a message as the bot. \n`;purge` - Clears the amount of messages given. \n`;kick` - Kicks the user given. \n`;ban` - Bans the user given."
      },
      {
        name: "Utility",
        value: "`;ping` - Displays ping. \n`;help` - Shows this menu."
      },
      {
        name: "Developer Commands",
        value: "Developer commands are not shown to the public right now."
      },
      {
        name: "Command Descriptions",
        value: "Type `;help <command>` here in this DM to get information on a command."
      },
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "By SGII2, Lxphere, and Dart"
    }
  }
});
       
 const allowedid = ['258706134850863106','395860451382001665','293060399106883584'];
	
 if (allowedid.includes(message.author.id)) {
 message.author.send({embed: {
    color: 3447003,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "Developer",
    description: "You can see this because you are a developer of the bot.",
    fields: [{
        name: "Nil",
        value: "Nothing set to be here yet."
      },
      {
        name: "Commands",
        value: "`;sende` - Send embed. Say the command by itself to see embed keys. \n`;eval` - Evals code. \n`;setname` - Set the bot's username."
      },
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "By SGII2, Lxphere, and Dart"
    }
  }
});}}
	
}

module.exports.help = {
	name: "help",
	usage: "sends all the commands",
	description: "sends all server commands",
	longdes: "Sends a list of all the command to the user who ran the command.",
	mentionedperm: "none",
  category: "Utility"
}
