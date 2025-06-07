const {SlashCommandBuilder, EmbedBuilder} = require("discord.js");

module.exports = {

    async execute(interaction) {
        const info = new EmbedBuilder()
            .setColor(0x700434)
            .setDescription("**Button Pressed**");

        await interaction.reply({embeds:[info]});
    }
}