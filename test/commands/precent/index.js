import { SlashCommandBuilder } from "discord.js";

//可以利用
//export default{
//    所有要導出的東西
//}
export const command = new SlashCommandBuilder()
 .setName('precent')
 .setDescription('求籤的機率')

export const action = async (ctx) =>{
    ctx.reply(`嗯?想要知道求籤的機率?
呵呵...讓你看看吧
大吉:5%
吉:20%
平:50%
凶:20%
大凶:5%`)
}
//名稱不能有特殊字元、空格，說明和回復可以，換行的話要使用``，且最前面的空格要刪掉