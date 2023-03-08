import { SlashCommandBuilder } from "discord.js";

export const command = new SlashCommandBuilder()
 .setName('班尼特')
 .setDescription('班尼特的素材')

export const action = async (ctx) =>{
    ctx.reply(`突破素材:風車菊、鴉印(盜寶團)、常燃火種(爆炎樹)
天賦素材:抗爭(禮拜二、禮拜五)、鴉印(盜寶團)、東風之翎(風魔龍)
聖遺物:宗室、少女
聖遺物有效詞條:生命、充能(攻擊沒用)
武器:背包白質最高的單手劍`)
}
