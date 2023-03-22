import { SlashCommandBuilder } from "discord.js";

export const command = new SlashCommandBuilder()
 .setName('欸嘿')
 .setDescription('えへへって何だよ!');

export const action = async (ctx) => {
    const embed = {
        image: {
            url: 'https://media.tenor.com/images/2383c7889778ea732d2aaf046346f4c9/tenor.gif',
        },
    };
    ctx.reply({ embeds: [embed] });
};
