const { Client, Util } = require('discord.js');
const Discord = require("discord.js");
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const fs = require(`fs`);

module.exports.run = async (client,msg,args,searchString,url,serverQueue,queue,youtube,handleVideo,play) => {

    if (!serverQueue) return msg.channel.send('There is nothing playing.');
    let index = 0;

    let embed = new Discord.RichEmbed()
    .setTitle("**Song Queue**")
    .setDescription(serverQueue.songs.map(song => `**${++index} -** ${song.title}`).join(`\n`))
    .addField("**Now Playing**", `${serverQueue.songs[0].title}`)
    .setColor("#4de035")

		return msg.channel.send(embed);

}

module.exports.help = {
    name: "queue"
}