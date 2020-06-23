const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    //-8ball <question fjdksf>
    let replies = ["Sim.", "Não.", "Talvez.", "Não sei.", "Não sei se devo te dizer isso agora...", "Claro que sim", "Claro que não", "Obvio.", "Claro", "Talvez.", "Talvez..."];

    let result = Math.floor((Math.random() * replies.length));
    let question = args.slice(0).join(" ");

    let ballembed = new Discord.MessageEmbed()
    .setAuthor(message.author.tag)
    .setColor("#FF9900")
    .addField("Pergunta", question)
    .addField("Resposta", replies[result]);

    message.channel.send(ballembed);



}

module.exports.help = {
    name: "D8ball"
}