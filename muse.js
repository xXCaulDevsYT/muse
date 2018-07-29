const { Client, Util } = require('discord.js');
const Discord = require("discord.js");
const config = require("./config.json");
const { PREFIX } = config;
const configs = {
	"TOKEN": process.env.TOKEN,
	"GOOGLE_API_KEY": process.env.GOOGLE_API_KEY,
	"DBL_API": process.env.DBL_API
}
const { TOKEN, GOOGLE_API_KEY, DBL_API } = configs;
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const fs = require(`fs`);
const DBL = require("dblapi.js");

const client = new Client({ disableEveryone: true });

client.commands = new Discord.Collection();

const youtube = new YouTube(GOOGLE_API_KEY);

const queue = new Map();

module.exports = queue;

const handleVideo = require("./function/handleVideo.js");

const play = require("./function/play.js");

client.on('warn', console.warn);

client.on('error', console.error);

client.on(`ready`, (member) => {
	console.log(`${client.user.username} is online!`);
	client.user.setActivity(`${config.PREFIX}help || Playing on ${client.guilds.size} Servers`, "LISTENING")
});

client.on('disconnect', () => console.log('I just disconnected, making sure you know, I will reconnect now...'));

client.on('reconnecting', () => console.log('I am reconnecting now!'));

const dbl = new DBL(`${DBL_API}`, client);

dbl.on('posted', () => {
	console.log('Server count posted!');
});

dbl.on('error', e => {
	console.log(`Oops! ${e}`);
});

fs.readdir("./music commands/", (err, files) => {

    if(err) console.log(err);

    let jsfile = files.filter(f => f.split(".").pop() ==="js")
    if(jsfile.length <= 0){
        console.log("Couldn't find commands.");
        return;
    }

    jsfile.forEach((f, i) => {
        let props = require(`./music commands/${f}`);
        console.log(`Music Command \"${f}\" loaded!`);
        client.commands.set(props.help.name, props);
    });

});

fs.readdir("./commands/", (err, files) => {

    if(err) console.log(err);

    let jsfile = files.filter(f => f.split(".").pop() ==="js")
    if(jsfile.length <= 0){
        console.log("Couldn't find commands.");
        return;
    }

    jsfile.forEach((f, i) => {
        let props = require(`./commands/${f}`);
        console.log(`Command \"${f}\" loaded!`);
        client.commands.set(props.help.name, props);
    });

});

//events

client.on("guildMemberAdd", member =>require("./events/guildmemberAdd.js")(client, member));
client.on("guildMemberRemove", member =>require("./events/guildmemberRemove.js")(client, member));

client.on("message", msg => {
    if (msg.channel.type === "dm") return undefined;
    if (msg.author.bot) return undefined;
    if (!msg.content.startsWith(PREFIX)) return undefined;


    const args = msg.content.split(' ');
    const cmd = args[0];
	const searchString = args.slice(1).join(' ');
	const url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
	const serverQueue = queue.get(msg.guild.id);

    let command = client.commands.get(cmd.slice(PREFIX.length));
    if(command) command.run(client,msg,args,searchString,url,serverQueue,queue,youtube,handleVideo,play);
});

client.login(TOKEN);
