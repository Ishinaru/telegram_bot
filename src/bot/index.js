const commandsConfig = require("../config/bot")

const information = require("./information");
const help = require("./help");
const greetings = require("./greetings");

class Bot{

    constructor(bot){
        this.bot = bot;
    }

    // função assincrona
    // inicializção das configurações do robô
    execute = async() =>{
        this.errorHandler();
        
        await this.startConfig();

        this.bot.on("message", (message, metadata)=>{
            console.log(message, metadata);
        })

        information.execute(this.bot);
        help.execute(this.bot);
        greetings.execute(this.bot);
    }

    // função assincrona
    // configs iniciais do robô

    startConfig = async() =>{
        try{  
            //const changeCommands = await this.bot.setMyCommands(); //alterar os comandos

            const changeCommands = await this.bot.setMyCommands(
                Object.keys(commandsConfig).map((command) => ({
                    command: commandsConfig[command].command,
                    description: commandsConfig[command].description,
                    regex: commandsConfig[command].regex,
                }))
            );
            console.log(changeCommands);
        }
        catch(error){
            console.log(error);
        }
    }

    errorHandler = ()=>{
        this.bot.on("error", (message) => console.log(message));
        this.bot.on("polling_error", (message) => console.log("[ERROR] polling error: ", message));
        this.bot.on("webhook_error", (message) => console.log("[ERROR] webhook error: ", message));
    }

}

module.exports = Bot;