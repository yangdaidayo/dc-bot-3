import { SlashCommandBuilder } from "discord.js";

export const command = new SlashCommandBuilder()
 .setName('功德減1')
 .setDescription('你一定會下地獄');

export const action = async (ctx) => {
    const embed = {
        image: {
            url: 'https://azhaijia.com/wp-content/uploads/2022/11/1669128566-e16fc503gy1h7o8qmptdzg208c08cjrp.gif',
        },
    };
    ctx.reply({ embeds: [embed] });
};
