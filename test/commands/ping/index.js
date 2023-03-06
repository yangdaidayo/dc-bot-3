import { SlashCommandBuilder } from "discord.js";

//可以利用
//export default{
//    所有要導出的東西
//}
export const command = new SlashCommandBuilder()
 .setName('ping')
 .setDescription('ping command')

export const action = async (ctx) =>{
    ctx.reply('pong')
}