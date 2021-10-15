// (arguments)argumentos que sustenta todos os argumentos enviados

// function funcao(a, b, c) {
//   let total = 0;
//   for (let argumento of arguments) {
//     total += argumento;
//   }
//   console.log(total)
// }
// funcao(1, 2, 3, 4, 5, 6, 7, 8, 9);

// function funcao(a, b, c, d, e, f) {
//   console.log(a, b, c, d, e, f)
// }
// funcao(1, 2, 3);

// function funcao(a = 1, b = 4, c = 3) {
//   b = b || 0;
//   console.log(a + b + c)
// }
// funcao(1, undefined, 4)

// function funcao({ nome, sobrenome, idade }) {
//   console.log(nome, sobrenome, idade)
// }
//   //let obg = { nome: 'Leandro', sobrenome: 'Romano', idade: 20 }
//   // funcao(obg)
// funcao({ nome: 'Leandro', sobrenome: 'Romano', idade: 20 })

// function funcao([valor1, valor2, valor3]) {
//   console.log(valor1, valor2, valor3)
// }
// funcao(['Leandro', 'Romano', 20])

// const conta = function (operador, acumulador, ...numeros) {
//   for (let numero of numeros) {
//     if (operador === '+') acumulador += numero;
//     if (operador === '-') acumulador -= numero;
//     if (operador === '*') acumulador *= numero;
//     if (operador === '/') acumulador /= numero;
//   }
//   console.log(acumulador)
// };
// conta('+', 2, 20, 30, 40, 50)


// const conta = (operador, acumulador, ...numeros) => {
//   console.log(operador, acumulador, numeros)
// };
// conta('+', 2, 20, 30, 40, 50)

const conta = (...args) => {
  console.log(args)
};
conta('+', 2, 20, 30, 40, 50)