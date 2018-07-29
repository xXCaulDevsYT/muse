const { Client, Util } = require('discord.js');
const Discord = require("discord.js");
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const fs = require(`fs`);

module.exports = async (client,member,args,searchString,url,serverQueue,queue,youtube,handleVideo,play) => {

    console.log(`${member.guild.name} got ${member.guild.memberCount}`)

	let wcChannel = member.guild.channels.find(`name`, `welcome-logs`);
	if(!wcChannel) return;

    let embed = new Discord.RichEmbed()
    .setTitle(`Welcome **${member.user.username}** to **${member.guild.name}**`)
	.setColor(`#00FF00`)
	.setThumbnail(`${member.user.displayAvatarURL}`)
	.setDescription(`You are the **${member.guild.memberCount}** member of **${member.guild.name}**`)

	wcChannel.send(embed);

	if(member.guild.id != "453325383023198219")return undefined;
	let defaultrole = member.guild.roles.find("name", "Fans");
    member.addRole(defaultrole);

}
