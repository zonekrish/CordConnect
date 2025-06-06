const {Client, Events, GatewayIntentBits} = require("discord.js");
const {TOKEN} = require("./config.json");

const client = new Client({intents: [GatewayIntentBits.Guilds]});

client.once(Events.ClientReady, readyClient => {
    console.log("CordConnect has... well, connected.");
});

client.login(TOKEN);