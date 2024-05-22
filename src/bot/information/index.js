const commandsConfig = require("../../config/bot")

class Information{
    execute = (bot) => {
        bot.onText(commandsConfig.info.regex, (message, match)=>{
            console.log(message) 
            const chatID = message.chat.id
            const first_name = message.chat.first_name
            bot.sendMessage(chatID, `Olá ${first_name} !!! Esse robô foi desenvolvido por David`)
        })
    }
}

module.exports = new Information();