const {SlashCommandBuilder, EmbedBuilder, ChannelType} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("setup")
    .setDescription("Sets up CordConnect for your server"),

    async execute(interaction) {
        let channel = interaction.guild.channels.cache.find(channel => channel.name === "cord-connect");

        let embed = new EmbedBuilder()
            .setColor(0x700434)
            .setTitle("Setup")
            .setDescription("A text channel named \`cord-connect\` has already been created!");

        if (!channel) {
            embed = new EmbedBuilder()
                .setColor(0x700434)
                .setTitle("Setup")
                .setDescription("A text channel named \`cord-connect\` has been created! Here, updates from your Minecraft server's chat will be posted.");

            interaction.guild.channels.create({
                name: "cord-connect",
                type: ChannelType.GuildText
            });

           
        }

        await interaction.reply({embeds:[embed]});

        
    }
}