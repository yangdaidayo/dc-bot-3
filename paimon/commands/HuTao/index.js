import { SlashCommandBuilder } from "discord.js";

export const command = new SlashCommandBuilder()
 .setName('胡桃')
 .setDescription('胡桃的素材')

export const action = async (ctx) =>{
    ctx.reply(`突破素材:霓裳花、騙騙花蜜、未熟之玉(古岩龍蜥)
天賦素材:勤勞(禮拜二、禮拜五)、騙騙花蜜、魔王之刃(公子)
聖遺物:魔女、追憶
聖遺物有效詞條:生命、精通、雙爆
武器:護摩、匣里、決鬥槍`)
}
//名稱不能有特殊字元、空格，說明和回復可以，換行的話要使用``，且最前面的空格要刪掉