// IIFE > Immediately invoked function expression

(function (idade, peso, altura) {
    const sobrenome = 'Romano';
    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }
    function falaNome() {
        console.log(criaNome('Leandro'))
    }

    falaNome();
    console.log(idade, peso, altura)
})(30, 60, 1.80);

const nome = 'quaklquer'

