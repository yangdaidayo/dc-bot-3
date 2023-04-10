import { SlashCommandBuilder } from "discord.js";

export const command = new SlashCommandBuilder()
 .setName(`功德加1`)
 .setDescription('敲個木魚，消個業障');

export const action = async (ctx) => {
    const embed = {
        image: {
            url: 'https://qianp.com/uploads/images/kind/20221114/20221114115833_17701.gif',
        },
    };
    ctx.reply({ embeds: [embed] });
};
