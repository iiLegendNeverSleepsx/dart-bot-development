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
  if (command === 'hi' || command = 'hello') {
    msg.reply('bye!');
  }
  if (command === 'say' || command === "send") {
    const allowid = [0];
    const sayMessage = args.join(" ");
    msg.channel.send(sayMessage);
  }
  
  if(command === "purge" || command === "clean" || command = "clear") {
    const deleteCount = parseInt(args[0], 10);
    
    if(!deleteCount || deleteCount < 2 || deleteCount > 10000)
      return message.reply("Please provide a number between 2 and 10,000 for the number of messages to delete");
    
    const fetched = await message.channel.fetchMessages({limit: deleteCount});
    message.channel.bulkDelete(fetched)
      .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
  }
});

client.login(process.env.token);
