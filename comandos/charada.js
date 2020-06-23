const Discord = require("discord.js")

exports.run = async (bot, message, args) => {
    
    let frases = [`Por que a mulher não pode ser eletricista? Porque ela leva 9 meses para dar a luz!`, `O que fala o livro de Matemática para o livro de História? Não me venha com história que eu já estou cheio de problema!`, `Porque o anão não pode lutar boxe? Porque ele dá golpe baixo.`, `Qual o cachorro que é professor? É o cãolecionador.`, `Quem é que fala errado o cebolinha ou a Monica? A monica ela fala errado o cebolinha fala ellado`]

let frasesRandom = frases[Math.floor(Math.random() * frases.length)]
message.reply(frasesRandom)

}

exports.help = {
    name: 'Dcharada'
}