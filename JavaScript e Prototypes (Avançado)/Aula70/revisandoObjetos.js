// Factory Functions / Constructor Functions / Classes


/* Constructor Function
function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
}

// {} <- this -> this 
const p1 = new Pessoa('Leandro', 'Romano')
console.log(p1)
*/



/* Factory Function
function criaPessoa (nome, sobrenome) {
    return {
        nome,
        sobrenome,
        nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        }
    }
}

const p1 = criaPessoa('Luiz', 'Otávio');
console.log(p1.nomeCompleto)
*/


/* Objetos por constructor 

const pessoa1 = new Object();
pessoa1.nome = 'Leandro'
pessoa1.sobrenome = 'Romano'
pessoa1.idade = 30
pessoa1.falarNome = function() {
    return(`${this.nome} está falando seu nome,`)
}
pessoa1.getDataNascimento = () => {
    const dataAtual = new Date()
    return dataAtual.getFullYear() - pessoa1.idade
}

for (let chave in pessoa1) {
    console.log(pessoa1[chave])
}
*/

