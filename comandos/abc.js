const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

var rand = list[Math.floor(Math.random() * list.length)];
  await message.channel.send(rand);
};

exports.help = {
    name: "ABC"
}