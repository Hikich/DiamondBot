const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://imgur.com/VikKHPj.gif',
  'https://imgur.com/9hOts2A.gif',
  'https://imgur.com/HBrhKQx.gif',
  'https://imgur.com/0wlI8Ed.gif',
  'https://imgur.com/vRqudjp.gif',
  'https://imgur.com/d1JJPiK.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('lembre-se de mencionar um usuário válido para dar o tapa!');
}
/*
message.channel.send(`${message.author.username} **acaba de bater** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: "png"});
  const embed = new Discord.MessageEmbed()
        .setTitle('Uii deve ter doído')
        .setColor('#000000')
        .setDescription(`${message.author} acaba de bater no(a) ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('bem no meio da sua cara')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}

exports.help = {
    name: "Dtapa"
}