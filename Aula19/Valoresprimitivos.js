/*
Primitivos (imutáveis) - string, number, boolean, undefined, null (bigint, symbol);

Referência (mutáveis) - Arrays, Object, Function
*/

let a = [1, 2, 3]
let b = a;
console.log(a, b)

a.push(4)
console.log(a, b)




// let a = 'A';
// let b = a; // cópia
// console.log(a, b);

// a = 'outra coisa';
// b = a
// console.log(a, b);

// let nome = 'leandro';
// nome = 'Romano';
// console.log(nome[2])