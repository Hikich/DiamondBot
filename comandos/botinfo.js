const Discord = require('discord.js');

exports.run = async (client, message, args) => {

    let embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle("**__Minhas informaçôes__**")
    .addField('Hikich#7593', '**Meu criador: Hikich#7593**')
    .addField('Discord.js', '**Sou um bot feito em JavaScript**')
    .addField('15/06/2020', '**Fui feito no dia 15/06 de 2020**')
    
    message.channel.send(embed)
}

exports.help = {
    name: "Dbotinfo"
}