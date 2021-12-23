// Reduce - reduz a array

/* Some todos os números
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
const total = numeros.reduce(function(acumulador, valor, indice, array) {
    acumulador += valor;
    return acumulador
}, 0)
console.log(total)
*/

/* Retorne um array com os pares (Filter)
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
const total = numeros.reduce(function(acumulador, valor, indice, array) {
    if (valor % 2 === 0) acumulador.push(valor)
    return acumulador
}, [])
console.log(total)
*/

// Retorne um array com o dobro dos valores (Map)
//               0  1    2  3  4.....
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
const total = numeros.reduce(function(acumulador, valor) {
   acumulador.push(valor * 2)
    return acumulador
}, [])
// console.log(total)


// Para cada elemento:
// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave "nome" do objeto
// Adicione uma chave id em cada objeto
const pessoas  = [
    {nome: 'Luiz', idade: 73},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 42},
    {nome: 'Letícia', idade: 21},
    {nome: 'Rosana', idade: 34}
]

const maisVelha = pessoas.reduce(function(acumulador, valor) {
    if (acumulador.idade > valor.idade) return acumulador;
})
console.log(maisVelha)