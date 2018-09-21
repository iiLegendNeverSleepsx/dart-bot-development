const Discord = require('discord.js');
const client = new Discord.Client();

let prefix = ";";

const developers = ['293060399106883584', '258706134850863106', '395860451382001665'];

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
    msg.channel.send("I sent a direct message of the help menu to keep this channel clean! If you didn't get it, enable Direct Messages.")
    msg.author.send({embed: {
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "Commands",
    description: "Here are the current bot commands:",
    fields: [
        { name: "Utility", value: "`;help` shows the command menu. \n`;ping` shows current ping. \n`;invite` gets the bot and support server invite.", inline: false},
        { name: "Moderation", value: "`;purge <int>` purges the number of messages given.", inline: false},
        { name: "Need Help?", value: "Run `;invite` in the server with this bot to get the support server invite.", inline: false}
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "By SGII2, Lxphere, and Dart"
    }
  }
});
  }
  
  if (command === 'invite') {
    msg.channel.send("I sent a direct message of the invites to keep this channel clean of advertising! If you didn't get it, enable Direct Messages.")
    msg.channel.send({embed: {
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "Invite",
    description: "Dart Bot coded by SGII2, Lxphere, and Dart.",
    fields: [
        { name: "Support Server", value: "You may join the support server [here](https://discord.gg/CKwfTW8).", inline: false},
        { name: "Bot Invite", value: "You may not invite me yet! I am in development.", inline: false},
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "By SGII2, Lxphere, and Dart"
    }
  }
});
  }
  
    if (command === 'sende') {
    if (developers.includes(msg.author.id)) {
    const code = args.shift()
    if (code === "rules") {
    msg.channel.send({embed: {
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "Invite",
    description: "Dart Bot coded by SGII2, Lxphere, and Dart.",
    fields: [
        { name: "What is Dart Bot?", value: "Hello, and welcome to Dart Bot HQ! Dart Bot is a ideal moderation bot that is available to everyone! We have established some server rules that you must follow, or it may result in a blacklist from the bot.", inline: false},
        { name: "Server Rules", value: "- You can only Direct Message staff members invites for support. Do not send anything unsolicited or anything to promote you or someone else in chats or other members' DMs. \n- Persist all channels safe for work, and keep medium to high level swearing at a minimum. \n- Keep the right topics in the right channels. #general is for chatting and #support is for help and questions. \n- This is obvious; no spamming or flooding. When you send one word or character a message, that is counted as flood. \n- Do not send copypasta. \n- Don't send anything malicious files, exploits, illegal things, etc. \n- Only send a Direct Message to a developer if it is something only they can fix, if a staff member tells you to, or they request you to. \n- You may support people in #support, however only official helpers and moderators can ask for server invitations.", inline: false},
        { name: "Who are the developers: Dart", value: "Hello, my name is Dart, I originally started by hosting the bot and coding it, however now I just help out around here with coding. Also, if you need anything personally from me, please contact me at dartdartbot@gmail.com.", inline:false},
        { name: "Who are the developers: Sam", value: "Hey! My name is Sam. I'm the main bot hoster and program it as well. Contact me at samdartbot@gmail.com if you need me. Feel free to DM me as well if the bot goes offline, or something gets bugged, you can do the same with any other developer!", inline: false},
        { name: "Who are the developers: SGII2", value: "Hello, I'm Omni or RealSGII2! I'm one of the main programmers of the bot, alongside with Sam and Dart. My email is sgii2dartbot@gmail.com if you need to contact me about anything!", inline: false},
        { name: "Bot Invite", value: "Not here yet!", inline:true},
        { name: "Bot Invite", value: "Permanent Server Invite: https://discord.gg/CKwfTW8", inline: true},
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "By SGII2, Lxphere, and Dart"
    }
  }
}); msg.channel.send("Sent embed: `rules`!");} else {msg.reply(`the embed key you sent: "${code}" is not a valid embed key. Embed keys: "rules"`);}} else {msg.reply("this command is only for developers!");}
  }
  
  if (command === 'slowmode') {
    const time = args.shift()
    const reason = args.join(" ");
    msg.reply(`the limit has been set to ${time} seconds because of ${reason}.`);
    msg.channel.setRateLimitPerUser(time, reason);
  }
  
  if (command === 'setstatus' || command === 'ss') {
    const status = args.join(" ");
    const allowedstatus = ["dnd", "online", "invisible", "away"];
    if (! allowedstatus.includes(status)) {msg.reply(`The status you chose: $(status) is not valid. Status can be: dnd, online, invisible, away`)} else {
    client.user.setStatus(status);
    msg.channel.send(`New status set to: **${status}**.`);
    }
  }
  
  if (command === 'setactivity' || command === 'sa') {
    const status = args.join(" ");
    client.user.setActivity(status);
    msg.channel.send(`New status set to: **${status}**.`);
  }
});

client.login(process.env.token);
