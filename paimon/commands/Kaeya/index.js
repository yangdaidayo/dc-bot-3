import { SlashCommandBuilder } from "discord.js";

export const command = new SlashCommandBuilder()
 .setName('凱亞')
 .setDescription('凱亞的素材')

export const action = async (ctx) =>{
    ctx.reply(`突破素材:嘟嘟蓮、鴉印(盜寶團)、極寒之核(急凍樹)
天賦素材:詩文(禮拜三、禮拜六)、鴉印(盜寶團)、北風的渾匣(北風狼)
聖遺物:絕緣、冰套
聖遺物有效詞條:攻擊、雙爆、充能
武器:霧切、綠劍、西風、祭禮、天目`)
}