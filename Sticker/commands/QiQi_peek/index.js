import { SlashCommandBuilder } from "discord.js";

export const command = new SlashCommandBuilder()
 .setName('暗中觀察')
 .setDescription('偷看你在做什麼');

export const action = async (ctx) => {
    const embed = {
        image: {
            url: 'https://img.nga.178.com/attachments/mon_202209/21/axsgQ182-cywyK2aT3cSmr-sg.jpg',
        },
    };
    ctx.reply({ embeds: [embed] });
};
