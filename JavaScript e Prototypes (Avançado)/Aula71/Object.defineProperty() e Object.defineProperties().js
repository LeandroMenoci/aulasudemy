// defineProperty - defineProperties

function Produto(nome, preco, estoque) {

    Object.defineProperty(this, 'estoque', { // para definir algumas propriedades 
        enumerable: true, // mostra a chave
        value: estoque, // para mostrar o valor do estoque
        writable: false, // permite alteração no valor
        configurable: true, // true é configurável e false não é configurável
    })

    Object.defineProperties(this, {
        nome: {
            enumerable: true, // mostra a chave
            value: nome, // para mostrar o valor do estoque
            writable: false, // permite alteração no valor
            configurable: true, // true é configurável e false não é configurável
        },
        preco: {
            enumerable: true, // mostra a chave
            value: preco, // para mostrar o valor do estoque
            writable: false, // permite alteração no valor
            configurable: true, // true é configurável e false não é configurável
        }
    })
}

const p1 = new Produto('Camiseta', 20, 3)
p1.estoque = 50000
console.log(p1)
