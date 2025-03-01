const { Telegraf } = require("telegraf")
const { message } = require("telegraf/filters")
const bot = new Telegraf("7658813202:AAFov6AGcIWaYcF8b04pAwUXv5ZSzH6WaiM")

bot.start(ctx => {
  try {
    return ctx.reply("Hi I am bot created by Andrii")
  } catch (e) {
    return ctx.reply("Error occured")
  }
})
bot.on(message('text'), ctx => {
  try {
    ctx.reply(ctx.text);
  } catch(e) {
    return ctx.reply("Error occured");
  }
})

// AWS event handler syntax (https://docs.aws.amazon.com/lambda/latest/dg/nodejs-handler.html)
exports.handler = async event => {
  try {
    await bot.handleUpdate(JSON.parse(event.body))
    return { statusCode: 200, body: "" }
  } catch (e) {
    console.error("error in handler:", e)
    return { statusCode: 400, body: "This endpoint is meant for bot and telegram communication" }
  }
}