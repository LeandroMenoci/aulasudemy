
// Funciona para String, Objetos, Funções, Números

// Array literal para alterar um indice
//                0           1       2
// const nomes = ['Eduardo', 'Maria', 'Joana'];
// nomes[2] = 'João';
//console.log(nomes)

// // Valor por referência
// pop()
// const nomes = ['Eduardo', 'Maria', 'Joana'];
// const novo = nomes;
// novo.pop(); // Utilizado para retirar o último indice o array
// console.log(nomes)

// Shift()
// const nomes = ['Eduardo', 'Maria', 'Joana'];
// nomes.shift(); // Utilizado para retirar o primeiro índice do array
// console.log(nomes)

// push()
// const nomes = ['Eduardo', 'Maria', 'Joana'];
// nomes.push('João'); // Utilizado para adicionar mais um índice no final array 
// console.log(nomes)

// unshift()
// const nomes = ['Eduardo', 'Maria', 'Joana'];
// nomes.unshift('João'); // Utilizado para adicionar mais um índice no começo do array 
// console.log(nomes)

// slice()
// const nomes = ['Eduardo', 'Maria', 'Joana', 'Wallace', 'Rosana'];
// const novo = nomes.slice(1, 3); // utilizado para fatiar o array
// const novo1 = nomes.slice(0, -1); // utilizado para fatiar o array
// console.log(novo, novo1)

// Converter uma string em uma Array com split()
// const nome = 'Leandro Romano Menoci';
// const nomes = nome.split(' ') // separar por espaço
// console.log(nomes)


// Converter um Array em uma string com join()
const nomes = ['Leandro', 'Romano', 'Menoci']
const nome = nomes.join(' ')
console.log(nome);


// Spread
// const nomes = ['Eduardo', 'Maria', 'Joana'];
// const novo = [...nomes]; // Spread -> espalhamento
// console.log(nomes)

// Tamanho do Array
// const nomes = ['Eduardo', 'Maria', 'Joana'];
// console.log(nomes.length); // Sempre irá mostrar quantos elementos tem no array e não o índice

