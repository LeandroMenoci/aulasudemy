// For in => lê os índices ou chaves do objeto

const pessoa = {
  nome: 'Leandro',
  sobrenome: 'Romano',
  idade: 30
}


for (let chave in pessoa) {
  console.log(chave, pessoa[chave])
}


// const frutas = ['Pera', 'Maçã', 'Uva'];

// for (let i in frutas) {
//   console.log(frutas[i])
// }