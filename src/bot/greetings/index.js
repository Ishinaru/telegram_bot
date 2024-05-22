const commandsConfig = require("../../config/bot")

class Greetings  {
    execute = (bot) => {
        bot.onText(commandsConfig.greetings.regex, (message, match)=>{
            console.log(message) 
            const chatID = message.chat.id
            const first_name = message.chat.first_name
            bot.sendMessage(chatID, `Olá ${first_name} !!!`)
            bot.sendSticker(chatID, `CAACAgIAAxkBAAMMZk9LGkX7lctvEWEd7-VKRfdbXOgAAgoAA8A2TxP_Da4-6A79CDUE` )
        })
    }
}

module.exports = new Greetings ();