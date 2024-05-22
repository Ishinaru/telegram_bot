require("dotenv").config();
const telegramConfig = require("./config/telegram");
const Bot = require("./bot");
const TelegramBot = require("node-telegram-bot-api");

const telegramBot = new TelegramBot(telegramConfig.token, {polling: true})
const bot = new Bot(TelegramBot)