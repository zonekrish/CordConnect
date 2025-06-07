const {SlashCommandBuilder, EmbedBuilder, ChannelType, ButtonBuilder, ButtonStyle, ActionRowBuilder} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("setup")
    .setDescription("Sets up CordConnect for your server"),

    async execute(interaction) {
        let channel = interaction.guild.channels.cache.find(channel => channel.name === "cord-connect");

        let embed = new EmbedBuilder()
            .setColor(0x700434)
            .setTitle("Setup")
            .setDescription("A text channel named \`cord-connect\` has already been created!\n\nWould you like to reconnect this bot to a different Minecraft server?");
        
        let button = new ButtonBuilder()
            .setCustomId("connect")
            .setLabel("Reconnect")
            .setStyle(ButtonStyle.Danger);

        if (!channel) {
            embed = new EmbedBuilder()
                .setColor(0x700434)
                .setTitle("Setup")
                .setDescription("A text channel named \`cord-connect\` has been created! Here, updates from your Minecraft server's chat will be posted.\n\nPress the button below to connect this bot to a Minecraft server.");
            
            button = new ButtonBuilder()
                .setCustomId("connect")
                .setLabel("Connect")
                .setStyle(ButtonStyle.Danger);
            
            interaction.guild.channels.create({
                name: "cord-connect",
                type: ChannelType.GuildText
            });

           
        }

        const row = new ActionRowBuilder()
            .addComponents(button);

        await interaction.reply({embeds:[embed], components:[row]});

        
    }
}