const commandsConfig = require("../../config/bot")

class Help{
    execute = (bot) => {
        bot.onText(commandsConfig.help.regex, (message, match)=>{
            const chatID = message.chat.id
            const first_name = message.chat.first_name
            bot.sendMessage(chatID, `Para verificar os comandos digite /`)
        })
    }
}

module.exports = new Help();