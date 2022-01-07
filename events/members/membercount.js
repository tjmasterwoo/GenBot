module.exports = (client) => {
    let myGuild = client.guilds.cache.get("899560455993966633") //your guild id
    setInterval(() => {
        let memberCount = myGuild.members.cache.filter(member => !member.user.bot).size.toLocaleString();
        let memberCountChannel = myGuild.channels.cache.get("905224390092939424"); //channel id (recommend to have this id as a voice channel id)
        memberCountChannel.setName(`👥〢${memberCount}`); //name of the channel
    }, 15000); //every 15 seconds, keeping it around here is good
}