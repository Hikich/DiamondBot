const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://imgur.com/BVkp8KP.gif',
  'https://imgur.com/oTOOVPa.gif',
  'https://imgur.com/vkZuivo.gif',
  'https://imgur.com/c5x5rRP.gif',
  'https://imgur.com/27sodb0.gif',
  'https://imgur.com/0omjaJS.gif'
];

var frasesdocomando = [
    'A saudades bateu',
    'A felicidade e linda',
    'Que lindo!!',
    'Ohhhh'
]

var topeira = frasesdocomando[Math.floor(Math.random() * frasesdocomando.length)];
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
        .setTitle('Que fofura')
        .setColor('#000000')
        .setDescription(`${message.author} acaba de abraçar o(a) ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter(topeira)
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}

exports.help = {
    name: "Dhug"
}