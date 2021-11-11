// Filter -> Sempre retorna um array, com a mesma quantidade de elementos ou menos


// Retorne os números maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numerosFiltrados = numeros.filter(valor => valor > 10);
//console.log(numerosFiltrados)




// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome termina com A
const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47}
];
const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 5);
const pessoas50Anos = pessoas.filter(obj => obj.idade >= 50);
const nomeTerminaComA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'));
//console.log(pessoasComNomeGrande)
// console.log(pessoas50Anos)
console.log(nomeTerminaComA)