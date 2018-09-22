module.exports.run = async (bot, message, args) => {
    const allowedid = ['258706134850863106','395860451382001665','293060399106883584'];
     if (allowedid.includes(message.author.id)) {
         message.react("✅")
             .then(() => bot.destroy())
             .then(() => index.run());
    }
}

module.exports.help = {
    name: "restart",
    usage: "restart",
    description: "nil",
    longdes: "Restarts the bot.",
    mentionedperm: "DEVELOPER",
  category: "Developer"
}
