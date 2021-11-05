module.exports = async client => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setPresence({ activity: { name: `${client.config.PREFIX}help・https://rdimo.github.io/CheatAway/`, type: 'WATCHING' }, //PLAYING, STREAMING, LISTENING, WATCHING, CUSTOM_STATUS
  status: 'online' }); //online, idle, dnd
}