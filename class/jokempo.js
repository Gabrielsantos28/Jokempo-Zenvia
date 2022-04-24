const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

module.exports = class Jokempo {
    constructor() {
        this.init();
    }

    init() {
        this.pergunta()
    }

    pergunta() {
        try {
            rl.question('\nQual sua jogada? pedra[0], papel[1] ou tesoura[2]?\n ou digite "done" para finalizar\n\n', resposta => {
                this.jogo(resposta)
                if (resposta === 'done') {
                    rl.close();
                } else {
                    this.pergunta()
                }
            });
        } catch (error) { throw e }

    }

    jogo(resposta) {
        try {
            if (resposta !== 'done') {


                const pessoa = resposta;
                const bot = Math.floor(Math.random() * 3);

                //EMPATE
                if (pessoa == 0 && bot == 0) {
                    console.log("Empate");
                }
                if (pessoa == 1 && bot == 1) {
                    console.log("Empate");
                }
                if (pessoa == 2 && bot == 2) {
                    console.log("Empate");
                }

                //VITÓRIA
                if (pessoa == 0 && bot == 2) {
                    console.log("Ganhou", "Pedra x Tesoura");
                }
                if (pessoa == 1 && bot == 0) {
                    console.log("Ganhou", "Papel x Pedra");
                }
                if (pessoa == 2 && bot == 1) {
                    console.log("Ganhou", "Tesoura x Papel");
                }

                //DERROTA
                if (bot == 0 && pessoa == 2) {
                    console.log("Perdeu", "Tesoura x Pedra");
                }
                if (bot == 1 && pessoa == 0) {
                    console.log("Perdeu", "Pedra x Papel");
                }
                if (bot == 2 && pessoa == 1) {
                    console.log("Perdeu", "Papel x Tesoura");
                }
            }
        } catch (error) {
            throw error
        }


    }
}