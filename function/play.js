const { Client, Util } = require('discord.js');
const Discord = require("discord.js");
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const fs = require(`fs`);
const queue = require("../muse.js")

function play(guild, song) {
	const serverQueue = queue.get(guild.id);

	if (!song) {
		serverQueue.voiceChannel.leave();
		queue.delete(guild.id);
		return;
	}
	console.log(serverQueue.songs);

	const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
		.on('end', reason => {
			if (reason === 'Stream is not generating quickly enough.') console.log('Song ended.');
			else console.log(reason);
			serverQueue.songs.shift();
			play(guild, serverQueue.songs[0]);
		})
		.on('error', error => console.error(error));
	dispatcher.setVolumeLogarithmic(serverQueue.volume / 100);

		let embed = new Discord.RichEmbed()
		.setTitle(`**Now Playing**`)
		.addField("Song name", `**${song.title}**`, true)
		.addField("URL", `${song.url}`)
		.addField("Channel", `${song.channel}`, true)
		.setColor("#4de035")

	serverQueue.textChannel.send(embed);
}

module.exports = play;