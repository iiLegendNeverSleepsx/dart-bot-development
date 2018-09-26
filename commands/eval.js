const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {
  function clean(text, token) {
    if (typeof(text) === "string") {
        return text.replace(/`/g, "`" + String.fromCharCode(8203))
            .replace(/@/g, "@" + String.fromCharCode(8203))
            .replace(new RegExp(token, "gi"), "[ HIDDEN ]");
    } else {
        return text;
    }
  }
	
  const allowedid = ['258706134850863106','395860451382001665','293060399106883584'];
  if (allowedid.includes(message.author.id)) {
    try {
      const code = args.join(" ");
      let evaled = eval(code);
 
      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);
 
      //message.channel.send(clean(evaled), {code:"xl"});
      const client = bot;
    message.channel.send({embed: {
    color: 3066993,
    description: "\n",
    fields: [{
        name: "Evaled!",
        value: (`\`\`\`js\n${clean(evaled, bot.token).substring(0, 500)}\`\`\``)
      },
    ],
    timestamp: new Date(),
    footer: {
      icon_url: message.author.avatarURL,
      text: `Eval ran by ${message.author.tag}`
    }
  }
});
    } catch (err) {
      message.channel.send({embed: {
    color: 15158332,
    description: "\n",
    fields: [{
        name: "Error!",
        value: (`\`\`\`x1\n${clean(err, bot.token)}\`\`\``)
      },
    ],
    timestamp: new Date(),
    footer: {
      icon_url: message.author.avatarURL,
      text: `Eval ran by ${message.author.tag}`
    }
  }
});
    }
  } else {message.reply("error! You do not have permission to use this command! You need to be a bot developer to use this command!")}
}

module.exports.help = {
	name: "eval",
	usage: "eval <code>",
	description: "nil",
	longdes: "Evals the code given.",
	mentionedperm: "DEVELOPER",
  category: "Developer"
}
