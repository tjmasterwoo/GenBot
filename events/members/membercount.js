module.exports = (client) => {
      setInterval(() =>{
        let myGuild = client.guilds.cache.get("899560455993966633"); //guild id
        let memberCount = myGuild.members.cache.filter(member => !member.user.bot).size.toLocaleString();
        let memberCountChannel = myGuild.channels.cache.get("905224390092939424"); //channel id (recommend to have this id as a voice channel id)
        memberCountChannel.setName(`👥・${memberCount}`);
    }, 30000); //every 30 seconds, keep it around here so your bot don't get banned for api abuse
}