import { SlashCommandBuilder } from "discord.js";

export const command = new SlashCommandBuilder()
 .setName('活動')
 .setDescription('當前的活動')

export const action = async (ctx) =>{
    ctx.reply(`小傢伙，來看看現在有甚麼活動吧
蒙德風花節:已結束
振晶實驗(戰鬥活動):進行中
七聖召喚熱鬥活動:即將結束
蕈獸活動(戰棋):即將開始
有香自西來:尚未開始
地脈雙倍:尚未開始
深淵:已更新
Twitch掉寶:Null
活動連結:Null
網頁活動:Null
活動連結:Null`)
}
