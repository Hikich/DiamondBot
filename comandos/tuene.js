const Discord = require("discord.js");

exports.run = (bot, message, args) => {

    let embed = new Discord.MessageEmbed()
    .setColor("WHITE")
    .setTitle(`tu e gay ne?`)
    .setDescription(`Tu e gay ne viado?`)
    .setImage(`https://media.discordapp.net/attachments/721006028619120663/721539338911088700/926ee055ed5dde06bcb2570f41370fbe20f18bb4r1-1280-720v2_hq.png?width=832&height=468`)
    
message.channel.send(embed)

}

exports.help = {
    name: "Dtuene"
}