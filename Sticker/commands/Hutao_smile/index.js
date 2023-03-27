import { SlashCommandBuilder } from "discord.js";

export const command = new SlashCommandBuilder()
 .setName('壞笑')
 .setDescription('嘿嘿嘿');

export const action = async (ctx) => {
    const embed = {
        image: {
            url: 'https://stickershop.line-scdn.net/stickershop/v1/product/16800998/LINEStorePC/main.png',
        },
    };
    ctx.reply({ embeds: [embed] });
};
