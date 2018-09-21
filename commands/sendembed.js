const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {
  const allowedid = ['258706134850863106','395860451382001665','293060399106883584'];
  if (allowedid.includes(message.author.id)) {
  const key = args.shift()
    if (key === "rules") {
    message.channel.send({embed: {
    color: 3447003,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "Dart Bot",
    description: "Hello, and welcome to Dart Bot HQ! Dart Bot is a ideal moderation bot that is available to everyone! We have established some server rules that you must follow, or it may result in a blacklist from the bot.",
    fields: [{
        name: "Server Rules",
        value: "You can only Direct Message staff members invites for support. Do not send anything unsolicited or anything to promote you or someone else in chats or other members' DMs. \n- Persist all channels safe for work, and keep medium to high level swearing at a minimum. \n- Keep the right topics in the right channels. #general is for chatting and #support is for help and questions. \n- This is obvious; no spamming or flooding. When you send one word or character a message, that is counted as flood. \n- Do not send copypasta. \n- Don't send anything malicious files, exploits, illegal things, etc. \n- Only send a Direct Message to a developer if it is something only they can fix, if a staff member tells you to, or they request you to. \n- You may support people in #support, however only official helpers and moderators can ask for server invitations. \n@sam ♔ - \nHey! My name is Sam. I'm the main bot hoster and program it as well. Contact me at samdartbot@gmail.com if you need me. Feel free to DM me as well if the bot goes offline, or something gets bugged, you can do the same with any other developer! \n@Omnidroid v10 • SGII2 - \nHello, I'm Omni or RealSGII2! I'm one of the main programmers of the bot, alongside with Sam and Dart. My email is sgii2dartbot@gmail.com if you need to contact me about anything!"
      },
      {
        name: "Information About The Developers:",
        value: "
@Dart - \nHello, my name is Dart, I originally started by hosting the bot and coding it, however now I just help out around here with coding. Also, if you need anything personally from me, please contact me at dartdartbot@gmail.com."
      },
      {
        name: "Bot Invite",
        value: "There is no invite because the bot is in development.",
        inline = true
      },
      {
       name: "Server Invite",
       value: "https://discord.gg/CKwfTW8",
       inline: true
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "Embed key: rules"
    }
  }
});} else {message.reply("invalid key. The current embed keys are: `['rules']`")}} else {message.reply("this command is only for developers!")}
}

module.exports.help = {
	name: "sende",
	usage: "sende <embed_key>",
	description: "nil",
	longdes: "Sends an embed. Use a key to get the type you want to send.",
	mentionedperm: "DEVELOPER",
  category: "Developer"
}
