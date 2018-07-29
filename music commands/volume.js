module.exports.run = async (client,msg,args,searchString,url,serverQueue,queue,youtube,handleVideo,play) => {
    
    if (!msg.member.voiceChannel) return msg.channel.send('You are not in a voice channel!');
    if (!serverQueue) return msg.channel.send('There is nothing playing.');
    if (!args[1]) return msg.channel.send(`The current volume is: **${serverQueue.volume}**`);
    serverQueue.volume = args[1];
    serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 100);
    return msg.channel.send(`I set the volume to: **${args[1]}**`);
}

module.exports.help = {
    name: "volume"
}