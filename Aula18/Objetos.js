const pessoa1 = {
  nome: 'Leandro',
  sobrenome: 'Menoci',
  idade: 29,

  fala() {
    console.log(`a minha idade atual é ${this.idade}`)
  },

  incrementaIdade() {
    this.idade++
  }
}

pessoa1.fala()
pessoa1.incrementaIdade()
pessoa1.fala()




// function criaPessoa(nome, sobrenome, idade) {
//   return {
//     nome,
//     sobrenome,
//     idade
//   }
// }

// const pessoa1 = criaPessoa('Leandro', 'Menoci', 29);
// const pessoa2 = criaPessoa('Agata', 'Bressan', 33);
// const pessoa3 = criaPessoa('Ben', 'Bressan', 9);

// console.log(pessoa1.nome, pessoa2.nome)