const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {
  if (message.member.hasPermission("MANAGE_MESSAGES")) {
  const count = args.shift();
  const newcount = Number(count) + 1;
  message.channel.bulkDelete(newcount).then(() => {
  message.channel.send(`Deleted **${count}** messages!`).then(msg => msg.delete(3000));
});
  } else {message.reply("\nError! You do not have permission to use this command! You need the `MANAGE_MESSAGES` permission!")}
}

module.exports.help = {
	name: "purge",
	usage: "purge <number of messages>",
	description: "A description found in the ;help embed.",
	longdes: "Purges the amount of messages given. Must be between `2` and `100`.",
	mentionedperm: "MANAGE_MESSAGES",
  category: "Moderation"
}
