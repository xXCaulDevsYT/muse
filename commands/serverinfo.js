const { Client, Util } = require('discord.js');
const Discord = require("discord.js");
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const fs = require(`fs`);
let client = new Discord.Client()

module.exports.run = async (client,msg,args,searchString,url,serverQueue,queue,youtube,handleVideo,play) => {
    let embed = new Discord.RichEmbed()
    .addField("Server name", `${msg.guild.name}`, true)
    .addField("Server Created At", `${msg.guild.createdAt.toDateString()}`, true)
    .addBlankField(true)
    .addField("Total members", `${msg.guild.memberCount}`, true)
    .addField("Server Owner", `${msg.guild.owner}`,true)
    
    msg.channel.send(embed)
  
}

module.exports.help = {
    name: "serverinfo"
}