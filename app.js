const Discord = require('discord.js');
const client = new Discord.Client();

let prefix = ";";

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  const args = msg.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  if (command === 'ping') {
    const m = await msg.channel.send("Pinging...");
    m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
  }
  if (command === 'hi') {
    msg.reply('bye!');
  }
  if (command === 'say') {
    const allowid = [0];
    const sayMessage = args.join(" ");
    msg.channel.send(sayMessage);
});

client.login(process.env.token);
