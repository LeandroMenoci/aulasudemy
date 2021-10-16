function retornaFuncao(nome) {
  return function () {
    return nome;
  };
}

const funcao = retornaFuncao('Leandro');
const funcao2 = retornaFuncao('Romano');
console.dir(funcao())
console.dir(funcao2())