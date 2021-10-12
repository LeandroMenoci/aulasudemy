// let a = 'A';
// let b = 'B';
// let c = 'C';

// const letras = [b, c, a];
// [a, b, c] = letras;

// console.log(a, b, c);
// ... rest, ... spread

// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const [um, , tres, quatro, , seis] = numeros;
// console.log(um, tres, quatro, seis);
//                   0          1          2
//                0  1  2    0  1  2    0  1  2
const numeros = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
//const [, [, , seis]] = numeros
const [lista1, lista2, lista3] = numeros;

console.log(lista3[1])