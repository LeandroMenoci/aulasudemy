// function criaCalculadora() {
//   return {
//     display: document.querySelector('.display'),
//     inicia() {
//       this.clickBotoes();
//       this.pressionaEnter();
//     },

//     pressionaEnter() {
//       this.display.addEventListener('keyup', e => {
//         if (e.keyCode === 13) {
//           this.realizaConta();
//         }
//       })
//     },

//     clearDisplay() {
//       this.display.value = "";
//     },

//     apagaUm() {
//       this.display.value = this.display.value.slice(0, -1);
//     },

//     realizaConta() {
//       let conta = this.display.value;

//       try {
//         conta = eval(conta);

//         if (!conta) {
//           alert('Conta inválida');
//           return;
//         }

//         this.display.value = conta;
//       } catch (e) {
//         alert('Conta inválida')
//       }
//     },

//     clickBotoes() {
//       // this = calculadora
//       document.addEventListener('click', (e) => {
//         const el = e.target;

//         if (el.classList.contains('btn-num')) {
//           this.btnParaDisplay(el.innerText);
//         }

//         if (el.classList.contains('btn-clear')) {
//           this.clearDisplay();
//         }

//         if (el.classList.contains('btn-del')) {
//           this.apagaUm();
//         }

//         if (el.classList.contains('btn-eq')) {
//           this.realizaConta();
//         }
//       })
//     },

//     btnParaDisplay(valor) {
//       this.display.value += valor;
//     }

//   }
// }

// const calculadora = criaCalculadora();
// calculadora.inicia()

function Calculadora() {
  this.display = document.querySelector('.display');

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

      if (el.classList.contains('btn-clear')) {
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