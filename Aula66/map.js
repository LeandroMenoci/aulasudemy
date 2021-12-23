// Dobre os números
//               0  1    2  3  4.....
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
const numerosEmDobro = numeros.map(valor => valor * 2)
// console.log(numerosEmDobro)


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

const nomes = pessoas.map(obj => obj.nome);
const idades = pessoas.map(obj => ({idade: obj.idade}))

const comIds = pessoas.map(function(obj, indice) {
    const newObj = {...obj}
    newObj.id = indice;
    return newObj
})
console.log(comIds)