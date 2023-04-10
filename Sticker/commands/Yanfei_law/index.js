import { SlashCommandBuilder } from "discord.js";

export const command = new SlashCommandBuilder()
 .setName('抓')
 .setDescription('你他媽犯法了你知道嗎?');

export const action = async (ctx) => {
    const embed = {
        image: {
            url: 'https://www.zbfuns.com/wp-content/uploads/2021/04/imwprobot-025fa2d4acb97c2091bd84ce7357d60d.jpg',
        },
    };
    ctx.reply({ embeds: [embed] });
};
