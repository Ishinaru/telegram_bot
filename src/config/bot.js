
const commands = {
    info: {
        command: "/info",
        description: "Informações do bot",
        regex: new RegExp("\/*(info|sobre)", 'i')
    } ,

    help: {
            command: "/help",
            description: "Ajuda sobre o bot",
            regex: new RegExp("\/*(help)", 'i')
    },

    greetings:{
        command: "/oi",
            description: "Ajuda sobre o bot",
            regex: new RegExp("\/*(oi)", 'i')
    }
}

module.exports = commands;