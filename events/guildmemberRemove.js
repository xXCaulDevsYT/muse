const { Client, Util } = require('discord.js');
const Discord = require("discord.js");
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const fs = require(`fs`);

module.exports = async (client,member,args,searchString,url,serverQueue,queue,youtube,handleVideo,play) => {

    let gbChannel = member.guild.channels.find(`name`, `goodbye-logs`);
	if(!gbChannel) return;

	let gbEmbed = new Discord.RichEmbed()
	.setTitle(`We feel sad to see you leave the ${member.guild.name} ${member.user.username}`)
	.setDescription(`We feel that you might come back to ${member.guild.name}.`)

	gbChannel.send(gbEmbed);

}