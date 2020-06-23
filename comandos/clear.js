const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

    //-clear 15
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("off");
    if(!args[0]) return message.channel.send("oof");
    message.channel.bulkDelete(args[0]).then(() => {
        message.channel.send(` `).then(msg => msg.delete(5000));
    })
}

module.exports.help = {
    name: "Dclear"
}