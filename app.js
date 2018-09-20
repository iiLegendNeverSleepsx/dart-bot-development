const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  const args = message.content.trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  if (command === 'ping') {
    msg.reply('pong!');
  }
  if (command === 'hi') {
    msg.reply('bye!');
  }
});

client.login(process.env.token);
