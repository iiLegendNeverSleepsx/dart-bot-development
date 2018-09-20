const Discord = require('discord.js');
const client = new Discord.Client();

let prefix = ";";

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', async msg => {
  const args = msg.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  if (command === 'ping') {
    const m = await msg.channel.send("Pinging...");
    m.edit(`Pong! Latency is ${m.createdTimestamp - msg.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
  }
  if (command === 'hi' || command === 'hello') {
    msg.reply('bye!');
  }
  if (command === 'say' || command === 'send') {
    const allowid = [0];
    const sayMessage = args.join(" ");
    msg.channel.send(sayMessage);
  }
  
  if(command === 'purge' || command === 'clean' || command === 'clear') {
    const deleteCount = parseInt(args[0], 10);
    
    if(!deleteCount || deleteCount < 2 || deleteCount > 10000)
      return msg.reply("please provide a number between 2 and 10,000 for the number of messages to delete!");
    
    const fetched = await msg.channel.fetchMessages({limit: deleteCount});
    msg.channel.bulkDelete(fetched)
      .catch(error => msg.reply(`Couldn't delete messages because of: ${error}`));
  }
  
  if (command === 'help' || command === 'commands') {
    msg.channel.send({embed: {
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "Commands",
    description: "Here are the current bot commands:",
    fields: [
        { name: "Utility", value: "`;help` shows the command menu. \n`;ping` shows current ping. \n`;invite` gets the bot and support server invite.", inline: false},
        { name: "Moderation", value: "`;purge <int>` purges the number of messages given.", inline: true},
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "By SGII2, Lxphere, and Dart"
    }
  }
});
  }
  
  if (command === 'slowmode') {
    const time = args.shift()
    const reason = args.join(" ");
    msg.reply(`the limit has been set to ${time} seconds because of ${reason}.`);
    msg.channel.setRateLimitPerUser(time, reason);
  }
});

client.login(process.env.token);
