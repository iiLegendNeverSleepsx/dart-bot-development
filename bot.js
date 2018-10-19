const Discord = require("discord.js");
const client = new Discord.Client();

const fs = require("fs")

let sspo = false;
let sspuid = 0;
let ssps = 0;
let sspod = false;

let sstype = 'none';
let ssstatus = 'none';

client.commands = new Discord.Collection();

fs.readdir("./commands", (err, files) => {
	if (err) console.log(err);
	let jsfile = files.filter(f => f.split(".").pop() === "js")
	if (jsfile.length <= 0) {
		console.log("Couldn't find any commands!")
		return
	}

	jsfile.forEach((f, i) => {
		let props = require(`./commands/${f}`);
		console.log(`${f} has been loaded!`);
		client.commands.set(props.help.name, props);
	});
});

client.on("ready", async () => {
	console.log(`${client.user.tag} has started!`);
});

client.on("message", async message => {

	if (message.author.bot) return;

  if (message.channel.id === '502741169747525645') {if (message.content != '.') {message.delete()}}
	
	const prefixes = [';', `<@491345635962781696>`, 'd;;', 'd;'];
	let prefix = false;
  	for(const thisPrefix of prefixes) {
    		if(message.content.startsWith(thisPrefix)) prefix = thisPrefix;
  	}
	
	let messageArray = message.content.split(" ");
	let cmd = messageArray.shift();
	let args = messageArray

	if (cmd.slice(prefix.length) === 'ss') {
		const allowids = ['293060399106883584', '395860451382001665', '258706134850863106'];
		if (allowids.includes(message.author.id)) {
			sspo = true;
			sspuid = message.author.id;
			ssps = 1;
		} else {
			message.reply("you're not allowed to use this command! Only the developers of the bot can use it.")
		}
	}
	
	if (sspo === true && sspuid === message.author.id) {
		if (cmd === 'cancel') {
			sspuid = 0;
			ssps = 1;
			sspod = false;
			sspo = false;
			message.channel.send("Cancelled prompt.");
		} else {
		if (sspod === true) {ssps = 2; ssstatus = messageArray.join(" ")}
		if (ssps === 1) {
			sspod = true
			message.channel.send({embed: {
    				color: 15844367,
    				description: "\n",
    				fields: [{
    				    name: "Set New Status",
   				    value: "What **game** would you like my status to be? \n\nState your answer to continue. \nSay **cancel** to cancel."
 		 		    },
  				],
				}
			});
		}
		
		if (ssps === 2) {
			const allowedans = ['online','idle','dnd','invisible'];
			if (!allowedans.includes(cmd)) {
			message.channel.send({embed: {
    				color: 15844367,
    				description: "\n",
    				fields: [{
    				    name: "Set New Status",
   				    value: "What **state** would you like me to be in? \n\nSay `online`, `idle`, `dnd`, or `invisible` answer to continue. \nSay **cancel** to cancel."
 		 		    },
  				],
				}
			});
			} else {
			message.channel.send({embed: {
    				color: 3066993,
    				description: "\n",
    				fields: [{
    				    name: "Set New Status",
   				    value: "Successfuly set new status!"
 		 		    },
  				],
				}
			});
			client.user.setStatus(cmd)
			sspuid = 0;
			ssps = 1;
			sspod = false;
			sspo = false;
			}
		}}
	} else {
	
	if(!prefix) return;
		
	let commandfile = client.commands.get(cmd.slice(prefix.length));
	if (commandfile) commandfile.run(client,message,args);
	
	}
});

client.login(process.env.BOT_T0KEN);
