const { Client, Collection, TextChannel, Intents } = require('discord.js');
const { loadCommands, loadEvents } = require('./util/loader')
const membercounter = require("./events/members/membercount.js")

const client = new Client({
    disableMentions: 'everyone',
    ws: {intents: Intents.ALL},
    partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
    fetchAllMembers: true
});
["commands", "cooldowns"].forEach(x => client[x] = new Collection());

client.config = require("./config")
client.login(client.config.Token.Discord);

loadCommands(client);
loadEvents(client)
client.once(("ready"), () => {
    membercounter(client)
})

process.on('uncaughtException', (error) => {
    console.warn(error);
});
process.on('unhandledRejection', (listener) => {
    console.warn(listener);
});
process.on('rejectionHandled', (listener) => {
    console.warn(listener);
});
process.on('warning', (warning) => {
    console.warn(warning);
});

TextChannel.prototype.sendSuccessMessage = function (content, file) {
    return this.send(`${client.config.emojis.success} ${content}`, file);
};
TextChannel.prototype.sendErrorMessage = function (content, file) {
    return this.send(`${client.config.emojis.error} ${content}`, file);
};