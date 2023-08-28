require('dotenv').config()
const { Telegraf } = require('telegraf')

const bot = new Telegraf(process.env.BOT_TOKEN)

bot.start((ctx) => {
    let message = `WELCOME TO BLOOM MAGIC CLUB ❗️`
    ctx.reply(message)
})

bot.launch()
