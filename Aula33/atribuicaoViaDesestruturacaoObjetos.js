const pessoa = {
  nome: 'Leandro',
  sobrenome: 'Romano',
  idade: 30,
  endereco: {
    rua: 'Av Brasil',
    numero: 320
  }
};

// Atribuição via desestruturação
const { nome, sobrenome, idade } = pessoa
console.log(nome, sobrenome, idade)