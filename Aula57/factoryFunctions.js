//Factory function (Função Fábrica)
function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome, 
        sobrenome,
        // Getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        },
        // Setter
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');

        },
        fala: function(assunto = 'falando sobre nada') {
            return `${this.nome} está ${assunto}`;
        },
        altura: altura,
        peso: peso,
        // Getter, faz o atributo deixar de ser uma função para só obter o valor
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    }
}

const p1 = criaPessoa('Leandro', 'Romano', 1.8, 80);
p1.nomeCompleto = "Maria Justino Oliveira"
console.log(p1.nome)
console.log(p1.sobrenome)
console.log(p1.fala())
