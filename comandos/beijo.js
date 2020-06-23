const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://imgur.com/XJUwYao.gif',
  'https://imgur.com/l60V3bN.gif',
  'https://imgur.com/nwWKcqe.gif',
  'https://imgur.com/qOa1trF.gif',
  'https://imgur.com/AkpGjyh.gif',
  'https://imgur.com/LOQXO9m.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('lembre-se de mencionar um usuário válido para dar o beijo!');
}
/*
message.channel.send(`${message.author.username} **acaba de bater** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: "png"});
  const embed = new Discord.MessageEmbed()
        .setTitle('Que lindo')
        .setColor('#000000')
        .setDescription(`${message.author} acaba de beijar o(a) ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('o amor esta no ar')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}

exports.help = {
    name: "Dbeijo"
}