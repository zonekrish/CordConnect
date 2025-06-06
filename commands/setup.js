const {SlashCommandBuilder, EmbedBuilder} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("setup")
    .setDescription("Sets up CordConnect for your server"),

    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setColor(0x700434)
            .setTitle("Setup")

        await interaction.reply({embeds:[embed]});
    }
}