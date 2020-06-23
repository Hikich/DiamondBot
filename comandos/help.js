const Discord = require("discord.js");

exports.run = (bot, message, args) => {

    let embed = new Discord.MessageEmbed()
    .setColor("BLUE")
    .setTitle(`**Meus comandos**`)
.setDescription(`
**${message.author}** MEU PREFIX E: **D**

**COMANDOS DE DIVERSÂO**
piada|tuene|8ball (pergunta)|charada|coinflip|jokempo|dog|cat|.

**COMANDOS UTEIS**
help|uptime|botinfo|lembrete (tempo você pode por o numero e depois os sinals s(segundos) m(minutos) h(horas) d(dias) exemplo: Dlembrete 50s terminar de explicar eu vou te lembrar daqui 50s)|.

**COMANDOS DE AÇÕES**
tapa @user|beijo @user|hug @user|atacar @user|shoot @user|.

**COMANDOS DE MODERAÇÂO**
say|settopic|warn @user motivo|anuncio|kick @user|ban @user|poll|slowmode <velocidade de envio de mensagens do slowmode(modo lento)|.
`)
    
    message.channel.send(embed)
}

exports.help = {
    name: "Dhelp"
}