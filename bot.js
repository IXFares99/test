const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("589421447974486047")
setInterval(function() {
channel.send(`أبي حساب فول أكسيس`);
}, 99999)
})

client.login(process.env.BOT_TOKEN);
