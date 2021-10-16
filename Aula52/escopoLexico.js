const nome = 'Leandro';

function falaNome() {
  console.log(nome)
}

function usaFalaNome() {
  const nome = 'Romano';
  falaNome()
}
usaFalaNome()