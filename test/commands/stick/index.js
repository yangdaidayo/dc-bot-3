import { SlashCommandBuilder } from "discord.js";

export const command = new SlashCommandBuilder()
 .setName('求籤')
 .setDescription('搖籤筒後交給神子來幫你解籤吧')


export const action = async (ctx) =>{ 
    var number = Math.floor(Math.random() * (99 - 1)) + 1;
    if (number>=96){
        return ctx.reply('唉呀~小傢伙，你抽到大凶呢，要不要今天就待在神社裡，讓我這個美麗與智慧兼具的宮司大人，替你消災呢?');
    }
    else if (95>=number && number>=76){
        return ctx.reply('嗯?是兇呢，把這個御守帶著吧，說不定能為小傢伙帶來好運喔，呵呵...');
    }
    else if (75>=number && number>=26){
        return ctx.reply('這張是平，平平淡淡的也沒什麼不好，對吧?沒有厄運就是好運呢');
    }
    else if (25>=number && number>=6){
        return ctx.reply('呵...小傢伙，運氣不錯，抽到吉呢，相信今天都會很幸運的喔');
    }
    else if (5>=number){
        return ctx.reply('啊啦~居然是大吉呢，小傢伙，要好好把握難得的運氣喔')
    }
    
}
