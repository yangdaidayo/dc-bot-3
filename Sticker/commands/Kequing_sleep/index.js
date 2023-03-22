import { SlashCommandBuilder } from "discord.js";

export const command = new SlashCommandBuilder()
 .setName('晚安')
 .setDescription('快去睡覺');

export const action = async (ctx) => {
    const embed = {
        image: {
            url: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/435355069/android/sticker.png',
        },
    };
    ctx.reply({ embeds: [embed] });
};
