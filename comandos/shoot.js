const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://imgur.com/1xay6Iv.gif',
  'https://imgur.com/0Tan6JA.gif',
  'https://imgur.com/XndY12Q.gif',
  'https://imgur.com/qLn1KKB.gif',
  'https://imgur.com/PPsB406.gif',
  'https://imgur.com/mpPiCug.gif',
  'https://imgur.com/J2W2FJx.gif',
  'https://imgur.com/kIw0ArR.gif',
  'https://imgur.com/QhYQGwt.gif'
];


var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('lembre-se de mencionar um usuário válido para atirar!');
}
/*
message.channel.send(`${message.author.username} **acaba de bater** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: "png"});
  const embed = new Discord.MessageEmbed()
        .setTitle('Pow Pow')
        .setColor('#000000')
        .setDescription(`${message.author} acaba de atirar no(a) ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('Pow')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}

exports.help = {
    name: "Dshoot"
}