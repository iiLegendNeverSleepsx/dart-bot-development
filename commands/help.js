const Discord = require("discord.js");
const fs = require("fs");
const embedutility = "";
const embedmoderation = "";
const embeddev = "";

module.exports.run = async (bot, message, args) => {
  message.channel.send("I sent a direct message of the help menu! If you did not get it, enable `Direct Messages from Server Members` and try again.")
	
 fs.readdir("./commands", (err, files) => {
	if (err) console.log(err);
	let jsfile = files.filter(f => f.split(".").pop() === "js")
	if (jsfile.length <= 0) {
		return
	}

	jsfile.forEach((f, i) => {
		let props = require(`./commands/${f}`);
		if (props.help.category === "Utility") {
			embedutility = embedutility + ` \n;${props.help.name} - ${props.description}`
		} else if (props.help.category === "Moderation") {
			embedmoderation = embedmoderation + ` \n;${props.help.name} - ${props.description}`
		}
		bot.commands.set(props.help.name, props);
	});
 })
	
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
        value: embedmoderation
      },
      {
        name: "Utility",
        value: embedutility
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
	name: "help",
	usage: "sends all the commands",
	description: "sends all server commands",
	longdes: "Sends a list of all the command to the user who ran the command.",
	mentionedperm: "none",
  category: "Utility"
}
