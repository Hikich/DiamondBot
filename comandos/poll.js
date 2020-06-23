const Discord = require('discord.js');

exports.run = async (bot, message, args, ops) => {

    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`${message.author}, você não possui permissão para executar esse comando.`).then(msg => msg.delete(8000))

    // Check for input
    if (!args[0]) return message.channel.send('Uso correto: !enquete <pergunta>');

    // Create Embed
    const embed = new Discord.MessageEmbed()
    
        .setColor("RANDOM") //To change color do .setcolor("#fffff")
        .setTitle('Votação criada, reaja para votar')
        .setDescription(args.join(' '))
        .setFooter(`Enquete criada por ${message.author.username}`)
        .setTimestamp()
        
        bot.channels.cache.get(`622291133782818826`)

    let msg = await bot.channels.cache.get(`622291133782818826`)

        message.channel.send(embed).then(function (msg) {
            msg.react("👍");
            msg.react("👎"); // You can only add two reacts
            message.delete({
                timeout: 1000
            });
        }).catch(function (error) {
            console.log(error);
        });

};


exports.help = {
    name: 'Dpoll',
    description: 'Cria uma enquete com UP ou DOWN',
    usage: 'Denquete <pergunta>'
};