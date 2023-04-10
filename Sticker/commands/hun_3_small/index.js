import { SlashCommandBuilder } from "discord.js";

export const command = new SlashCommandBuilder()
 .setName('蛤三小')
 .setDescription('哩洗勒蛤三小');

export const action = async (ctx) => {
    const embed = {
        image: {
            url: 'https://i.imgur.com/PeNrqju.jpeg',
        },
    };
    ctx.reply({ embeds: [embed] });
};
