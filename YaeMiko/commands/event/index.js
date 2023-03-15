import { SlashCommandBuilder } from "discord.js";

export const command = new SlashCommandBuilder()
 .setName('活動')
 .setDescription('當前的活動')

export const action = async (ctx) =>{
    ctx.reply(`小傢伙，來看看現在有甚麼活動吧
蒙德風花節:即將結束
振晶實驗(戰鬥活動):進行中
七聖召喚熱鬥活動:進行中
蕈獸活動(戰棋):尚未開始
有香自西來:尚未開始
地脈雙倍:尚未開始
深淵:即將更新
Twitch掉寶:進行中
活動連結:https://www.twitch.tv/drops/campaigns?dropID=70eab8bd-66c9-4d56-9924-9bbf5e49e284
網頁活動:Null
活動連結:Null`)
}
