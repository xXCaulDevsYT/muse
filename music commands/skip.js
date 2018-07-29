module.exports.run = async (client,msg,args,searchString,url,serverQueue,queue,youtube,handleVideo,play) => {
    
    if (!msg.member.voiceChannel) return msg.channel.send('You are not in a voice channel!');
    if (!serverQueue) return msg.channel.send('There is nothing playing that I could skip for you.');
    serverQueue.connection.dispatcher.end('Skip command has been used!');
    
    return undefined;
}

module.exports.help = {
    name: "skip"
}