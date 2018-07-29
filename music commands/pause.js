module.exports.run = async (client,msg,args,searchString,url,serverQueue,queue,youtube,handleVideo,play) => {

    if (serverQueue && serverQueue.playing) {
        serverQueue.playing = false;
        serverQueue.connection.dispatcher.pause();
        return msg.channel.send('⏸ Paused the music for you!');
    }
    return msg.channel.send('There is nothing playing.');

}

module.exports.help = {
    name: "pause"
}