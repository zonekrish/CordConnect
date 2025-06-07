const fs = require("node:fs");
const path = require("node:path");

const {Client, Events, GatewayIntentBits, Collection} = require("discord.js");
const {TOKEN} = require("./config.json");

const client = new Client({intents: [GatewayIntentBits.Guilds]});

client.commands = new Collection();

const foldersPath = path.join(__dirname, "commands");
const commands = fs.readdirSync(foldersPath);

for (const file of commands) {

    const filePath = path.join(foldersPath, file);
    const command = require(filePath);

    if (command.data) {
        
        client.commands.set(command.data.name, command);

    } else {
        const name = file.split(".")[0]
        client.commands.set(name, command);
    }

}

client.once(Events.ClientReady, () => {
    console.log("CordConnect has... well, connected.");
});

client.on(Events.InteractionCreate, async (interaction) => {
    if (interaction.isChatInputCommand()) {
        const command = interaction.client.commands.get(interaction.commandName);

        try {

            await command.execute(interaction);

        } catch (error) {

            console.error(error);

            if (interaction.replied || interaction.deferred) {

                await interaction.followUp({ content: "Error", flags: MessageFlags.Ephemeral });

            } else {

                await interaction.reply({ content: "Error", flags: MessageFlags.Ephemeral });

            }
        }

    }

    if (interaction.isButton()) {
        const command = interaction.client.commands.get(interaction.customId);

        try {

            await command.execute(interaction);

        } catch (error) {

            console.error(error);

            if (interaction.replied || interaction.deferred) {

                await interaction.followUp({ content: "Error", flags: MessageFlags.Ephemeral });

            } else {

                await interaction.reply({ content: "Error", flags: MessageFlags.Ephemeral });

            }
        }

    }
})

client.login(TOKEN);