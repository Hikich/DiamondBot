const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://imgur.com/8v3EFgg.gif',
  'https://imgur.com/3gyTrJ3.gif',
  'https://imgur.com/sPLHYCD.gif',
  'https://imgur.com/SRsJinz.gif',
  'https://imgur.com/8vVk59Z.gif',
  'https://imgur.com/KIALCXh.gif',
  'https://imgur.com/981uB9E.gif',
  'https://imgur.com/BLODYag.gif',
  'https://imgur.com/5WoO2hn.gif',
  'https://imgur.com/heTd1Na.gif',
  'https://imgur.com/KJw95io.gif',
  'https://imgur.com/qKi5EWO.gif',
  'https://imgur.com/4nj34az.gif',
  'https://imgur.com/taZ55gX.gif'
];

var frasesdocomando = [
    'k7 foda d+',
    'mano essa foi zika',
    'Ai isso doeu',
    'Ui essa deve ter doido'
]

var topeira = frasesdocomando[Math.floor(Math.random() * frasesdocomando.length)];
var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('lembre-se de mencionar um usuário válido para atacar!');
}
/*
message.channel.send(`${message.author.username} **acaba de bater** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: "png"});
  const embed = new Discord.MessageEmbed()
        .setTitle('Uiiiiiiii')
        .setColor('#000000')
        .setDescription(`${message.author} acaba de atacar o(a) ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter(topeira)
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}

exports.help = {
    name: "Datacar"
}