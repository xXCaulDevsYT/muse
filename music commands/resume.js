module.exports.run = async (client,msg,args,searchString,url,serverQueue,queue,youtube,handleVideo,play) => {
    if (serverQueue && !serverQueue.playing) {
        serverQueue.playing = true;
        serverQueue.connection.dispatcher.resume();
        return msg.channel.send('▶ Resumed the music for you!');
    }
    return msg.channel.send('There is nothing playing.');
}

module.exports.help = {
    name: "resume"
}