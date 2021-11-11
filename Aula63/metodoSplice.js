//               -5       -4         -3        -2      -1
//                0        1          2         3       4
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];
// nomes.splice(índice atual, quantos delete, elem1, elem2, elem3);

// pop()
// const removidos = nomes.splice(4, 1); // Irá remover Júlia
// const removidos = nomes.splice(-2, 1); // Irá remover Gabriel
//const removidos = nomes.splice(3, 0, 'Leandro'); // Irá adicionar no índice 3

// shift()
//const removidos = nomes.splice(0, 1)

// push()
//nomes.splice(nomes.length, 0, 'Luiz');

// unshift()
nomes.splice(0, 0, 'Luiz');
console.log(nomes)
