const {SlashCommandBuilder, EmbedBuilder} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("info")
    .setDescription("Provides information about this bot"),

    async execute(interaction) {
        const info = new EmbedBuilder()
            .setColor(0x403c44)
            .setTitle("Information")
            .setDescription("This bot is powered by CordConnect.");

        await interaction.reply({embeds:[info]});
    }
}