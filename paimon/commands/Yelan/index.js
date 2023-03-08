import { SlashCommandBuilder } from "discord.js";

export const command = new SlashCommandBuilder()
 .setName('夜蘭')
 .setDescription('夜蘭的素材')

export const action = async (ctx) =>{
    ctx.reply(`突破素材:星螺、徽記(愚人眾)、符紋之齒(遺跡巨蛇)
天賦素材:繁榮(禮拜一、禮拜四)、徽記(愚人眾)、鎏金之鱗(若陀)
聖遺物:絕緣、2千岩2水套(主C玩法)
聖遺物有效詞條:生命、雙爆、充能(極為重要)
武器:若水、西風、反曲弓`)
}