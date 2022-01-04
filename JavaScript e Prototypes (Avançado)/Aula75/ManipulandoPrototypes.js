function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function (percentual) {
    this.preco = this.preco - (this.preco * (percentual /100))
}
Produto.prototype.aumento = function (percentual) {
    this.preco = this.preco + (this.preco * (percentual /100))
}

const p1 = new Produto('Camiseta', 50)

// Literal
const p2 = {
    nome: 'Caneca',
    preco: 15
};
Object.setPrototypeOf(p2, Produto.prototype)

p2.aumento(10)

const p3 = Object.create(Produto.prototype);
p3.preco = 113
p3.aumento(10)
console.log(p3)




/*
// new Object -> Object.prototype
const objA = {
    chaveA: 'A',
    //__proto__: Object.prototype
}
const objB = {
    chaveB: 'B',
    //__proto__: objA
}
const objC = new Object();
objC.chaveC = 'C'


Object.setPrototypeOf(objB, objA)
Object.setPrototypeOf(objC, objB)
console.log(objC.chaveA)
*/