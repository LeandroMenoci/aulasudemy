// Função construtora -> constroi objetos
// Função fabrica -> fabrica objetos
// Construtora -> sempre criar com a primeira letra maiuscula = criaPessoa != Pessoa (new)

function Pessoa(nome, sobrenome) {
  // Atributos ou métodos privados
  const ID = 12345;
  const metodoInterno = () => {

  };

  // Atributos ou métodos públicos
  this.nome = nome;
  this.sobrenome = sobrenome;

  this.metodo = () => {
    console.log(this.nome + ": sou um método");
  }
}

const p1 = new Pessoa('Leandro', 'Romano')
const p2 = new Pessoa('Agata', 'Bressan')
console.log(p1.nome)
p1.metodo()

// ---------------------------------

function Calculadora() {
  display: document.querySelector('.display');

  this.inicia = () => {
    this.clickBotoes();
    this.pressionaEnter();
  };

  this.pressionaEnter = () => {
    this.display.addEventListener('keyup', e => {
      if (e.keyCode === 13) {
        this.realizaConta();
      }
    });
  };

  this.clearDisplay = () => {
    this.display.value = "";
  }

  this.apagaUm = () => {
    this.display.value = this.display.value.slice(0, -1)
  };

  this.realizaConta = () => {
    let conta = this.display.value;

    try {
      conta = eval(conta);
      if (!conta) {
        alert('Conta inválida');
        return
      }

      this.display.value = conta;
    } catch (e) {
      alert('Conta inválida')
    }
  };

  this.clickBotoes = () => {
    document.addEventListener('click', (e) => {
      const el = e.target;

      if (el.classList.contains('btn-num')) {
        this.btnParaDisplay(el.innerText)
      };

      if (el.classList.contains('btn-cler')) {
        this.clearDisplay();
      };

      if (el.classList.contains('btn-del')) {
        this.apagaUm();
      };

      if (el.classList.contains('btn-eq')) {
        this.realizaConta();
      }
    })
  };

  this.btnParaDisplay = (valor) => {
    this.display.value += valor;
  }
}

const calculadora = new Calculadora();
calculadora.inicia()