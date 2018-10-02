module.exports.run = async (bot, message, args) => {
    const allowedid = ['258706134850863106','395860451382001665','293060399106883584'];
     if (allowedid.includes(message.author.id)) {
         	 message.react("✅");
                 bot.destroy();
                 bot.login(process.env.BOT_T0KEN);
	     	 let timestamp = new Date();
                 await console.log("I have successfully rebooted!");
	         await message.channel.send("All done, I have rebooted my systems!");
	     	 await bot.guilds.get('489367652410589185').channels.get('496823703988994048').send(`I have been rebooted by **${message.author.tag}** at **${timestamp}**.`)
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
