const { Client, Util } = require('discord.js');
const Discord = require("discord.js");
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const fs = require(`fs`);

module.exports.run = async (client,msg,args,searchString,url,serverQueue,queue,youtube,handleVideo,play) => {

		let embed = new Discord.RichEmbed()
	    .setTitle('Links')
		.setDescription(`
        [Invite the bot to your server](https://discordbots.org/bot/453326934949101568/)
        
        [Join Our Offical Discord Server](https://discord.gg/6xMSP7Q)
        
		[Upvote the bot](https://discordbots.org/bot/453326934949101568/vote)
		`)
		.setFooter(`Requested by ${msg.author.tag}`)

		msg.channel.send(embed)

}

module.exports.help = {
    name: "links"
}