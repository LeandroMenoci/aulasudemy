// Declaração de função (Function hoisting)
function falaOi() {
    console.log('Oie');
}
falaOi();

// First-class objects (Objetos de primeira classe)
// Function expression

const souUmDado = function () {
    console.log('Sou um dado')
}

function executaFuncao(funcao) {
    console.log('Vou executar sua função aqui')
    funcao();
}
executaFuncao(souUmDado);

// Arrow function
const funcaoArrow = () => {
    console.log('Sou uma arrow function')
}
funcaoArrow();

// Dentro de um objeto
const obj = {
    falar(){
        console.log('Estou falando...')
    }
};

obj.falar()