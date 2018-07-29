const { Client, Util } = require('discord.js');
const Discord = require("discord.js");
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const fs = require(`fs`);
const PREFIX = require("../config.json").PREFIX;

module.exports.run = async (client,msg,args,searchString,url,serverQueue,queue,youtube,handleVideo,play) => {

    let embed = new Discord.RichEmbed()
    .setColor("#15ff00")
	.setTitle("μ's bot info")
	.addField(`Bot made by`, `PokemonLeader#8651`, true)
	.addField(`Bot Goal`,`To be a successful Music Bot`)
	.addField(`Playing on`,`${client.guilds.size} Servers`)
    .addField(`Bot created on`, client.user.createdAt.toDateString(), true)
    .setDescription(`Bot offical server and invite link is in \`${PREFIX}links\``)
	.setFooter(`Requested by ${msg.author.tag}`)
    
    msg.channel.send(embed)

}

module.exports.help = {
    name: "botinfo"
}