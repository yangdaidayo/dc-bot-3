import { SlashCommandBuilder } from "discord.js";

export const command = new SlashCommandBuilder()
 .setName('派蒙問號')
 .setDescription('應急食品不知道你在說什麼');

export const action = async (ctx) => {
    const embed = {
        image: {
            url: 'https://img.nga.178.com/attachments/mon_202005/07/i2Q5-h9e9K13.jpg.medium.jpg',
        },
    };
    ctx.reply({ embeds: [embed] });
};
