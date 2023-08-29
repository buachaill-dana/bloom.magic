require('dotenv').config()
// import {Context, Telegraf} from "telegraf";
// import { Update } from 'typegram';

// @ts-ignore
// const bot: Telegraf<Context<Update>> = new Telegraf(process.env.BOT_TOKEN)
//
// bot.start((ctx) => {
//     let message = `WELCOME TO BLOOM MAGIC CLUB ❗️`
//     console.log(`>> Request from: ${ctx.update.message.from.username}`)
//     ctx.reply(message)
// })
//
// bot.get("/health", (req, res) => res.send({ status: "ok" }}));

import express from "express";
import {Telegraf} from "telegraf";

const bot = new Telegraf(process.env.BOT_TOKEN || '');
const app = express();
const port = 443;
const webhookDomain = 'https://new-bloommagic.glitch.me'

async function main() {

// Set the bot API endpoint
    app.use(await bot.createWebhook({domain: webhookDomain}));

    bot.start((ctx) => {
        let message = `WELCOME TO BLOOM MAGIC CLUB ❗️`
        console.log(`>> Request from: ${ctx.update.message.from.username}`)
        ctx.reply(message)
    })
    // bot.on("text", ctx => ctx.reply("Hello"));
    app.get("/health", (_req: any, res: { send: (arg0: { status: string; }) => any; }) => res.send({ status: "ok" }))
    app.listen(port, () => console.log("Listening on port", port))
}

main();
