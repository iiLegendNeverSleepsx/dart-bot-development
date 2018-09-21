const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {
  const allowedid = ['258706134850863106','395860451382001665','293060399106883584'];
  if (allowedid.includes(message.author.id)) {
    try {
      const code = args.join(" ");
      let evaled = eval(code);
 
      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);
 
      message.channel.send(clean(evaled), {code:"xl"});
    } catch (err) {
      message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
  }
}

module.exports.help = {
	name: "eval",
	usage: "eval <code>",
	description: "nil",
	longdes: "Evals the code given.",
	mentionedperm: "DEVELOPER",
  category: "Developer"
}
