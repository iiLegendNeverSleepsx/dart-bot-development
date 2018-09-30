const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {
  if (message.member.hasPermission("MANAGE_MESSAGES")) {
  const count = args.shift();
  message.channel.bulkDelete(count + 1).then(() => {
  message.channel.send(`Deleted **${count}** messages!`).then(msg => msg.delete(3000));
});
  } else {message.reply("error! You do not have permission to use this command! You need the `MANAGE_MESSAGES` permission!")}
}

module.exports.help = {
	name: "purge",
	usage: "purge 15",
	description: "A description found in the ;help embed.",
	longdes: "Purges the amount of messages given. Must be between `2` and `100`.",
	mentionedperm: "MANAGE_MESSAGES",
  category: "Moderation"
}
