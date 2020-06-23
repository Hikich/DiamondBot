const Discord = require("discord.js")

exports.run = async (bot, message, args) => {
    
    let frases = [`Ai quer uma piada ? https://www.piadas.com.br/sites/default/files/styles/large/public/reacoes_do_alcool.jpg?itok=-Ougyig9 `, `Ai quer uma piada ? https://www.piadas.com.br/sites/default/files/styles/large/public/na_delegacia_seu_delegado_meu_marido_saiu_de_casa.jpg?itok=wKHmQ109`, `Ai quer uma piada ? https://www.piadas.com.br/sites/default/files/styles/large/public/um_homem_esta_em_casa.jpg?itok=tEDA-nkw`, `Ai quer uma piada ? https://www.piadas.com.br/sites/default/files/styles/large/public/o_rapaz_apaixonado_diz_a_sua_amada.jpg?itok=IAthTXkj`, `Ai quer uma piada ? https://www.piadas.com.br/sites/default/files/styles/large/public/horario_do_medicamento.jpg?itok=mJUn3bY_`, `Ai quer uma piada ? https://www.piadas.com.br/sites/default/files/styles/large/public/amigo_bom_de_conta.jpg?itok=bhbZClTR`, `Ai quer uma piada? https://www.piadas.com.br/sites/default/files/styles/large/public/piadas_-_copia_-_copia_0.jpg?itok=9MgPZ75s`, `Ai quer uma piada? https://www.piadas.com.br/sites/default/files/styles/large/public/papai_tem_um_palito_e_a_mamae_um_buraquinho.jpg?itok=wNiB7QIB`]

let frasesRandom = frases[Math.floor(Math.random() * frases.length)]
message.reply(frasesRandom)

}

exports.help = {
    name: 'Dpiada'
}