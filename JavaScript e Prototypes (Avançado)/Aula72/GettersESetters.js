
function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque;
    Object.defineProperty(this, 'estoque', { // para definir algumas propriedades 
        enumerable: true, // mostra a chave
        // value: estoque, // para mostrar o valor do estoque
        // writable: false, // permite alteração no valor
        configurable: true, // true é configurável e false não é configurável
        get: function() {
            return estoquePrivado;
        }, 
        set: function(valor) {
            if (typeof valor !== 'number') {
                throw new TypeError('Coloque somente números')
            }
            estoquePrivado = valor
        }
    })
}

function criaProduto(nome) {
    return {
        get nome() {
            return nome;
        },
        set nome(valor) {
            valor = valor.replace('coisa', '')
            nome = valor;
        }
    }
}

const p2 = criaProduto('Camiseta')
p2.nome = 'Qualquer coisa'
console.log(p2.nome)

// const p1 = new Produto('Camiseta', 20, 3)
// // console.log(p1)
// p1.estoque = 'Outro valor';
// console.log(p1.estoque)

