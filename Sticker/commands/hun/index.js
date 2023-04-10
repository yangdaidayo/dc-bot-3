import { SlashCommandBuilder } from "discord.js";

export const command = new SlashCommandBuilder()
 .setName('蛤')
 .setDescription('虫合?');

export const action = async (ctx) => {
    const embed = {
        image: {
            url: 'https://memeprod.ap-south-1.linodeobjects.com/user-gif/5b6eae08efbe071480a5fdf707594681.gif',
        },
    };
    ctx.reply({ embeds: [embed] });
};
