require('dotenv').config()
import {Context, Telegraf} from "telegraf";
import { Update } from 'typegram';

// @ts-ignore
const bot: Telegraf<Context<Update>> = new Telegraf(process.env.BOT_TOKEN)

bot.start((ctx) => {
    let message = `WELCOME TO BLOOM MAGIC CLUB ❗️`
    console.log(`>> Request from: ${ctx.update.message.from.username}`)
    ctx.reply(message)
})

bot.launch({
    webhook: {
        domain: 'https://new-bloommagic.glitch.me',
        port: 80
    }
})
