module.exports.run = async (bot, message, args) => {
    const allowedid = ['258706134850863106','395860451382001665','293060399106883584'];
     if (allowedid.includes(message.author.id)) {
         	 message.react("✅");
                 bot.destroy();
                 bot.login(process.env.BOT_T0KEN);
                 then(() => console.log("I have successfully rebooted!"));
	         then(() => message.channel.send("All done, I have rebooted my systems!"))
	}
};    

module.exports.help = {
    name: "reboot",
    usage: "reboot",
    description: "nil",
    longdes: "Restarts the bot.",
    mentionedperm: "DEVELOPER",
  category: "Developer"
}
