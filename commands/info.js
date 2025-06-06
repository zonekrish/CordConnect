const {SlashCommandBuilder, EmbedBuilder} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("info")
    .setDescription("Provides information about this bot"),

    async execute(interaction) {
        const info = new EmbedBuilder()
            .setColor(0x700434)
            .setTitle("CordConnect")
            .setDescription(`\`${interaction.client.user.displayName}\` is powered by CordConnect.\n\nCordConnect allows chat logs from a Minecraft server to be posted onto a Discord server for offline players to see.`);

        await interaction.reply({embeds:[info]});
    }
}