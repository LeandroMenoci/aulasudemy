// 705.484.450-52  070.987.720-03
/*
7x  0x  5x  4x  8x  4x  4x  5x  0x
10  9   8   7   6   5   4   3   2
70  0   40  28  48  20  16  15  0

11 - (237 % 11) = 5 (Primeiro digito)
Se o dígito for maior que 9, consideramos 0

7x  0x  5x  4x  8x  4x  4x  5x  0x  5x
11  10  9   8   7   6   5   4   3   2
77  0   45  32  56  24  20  20  0   10

11 - (284 % 11) = 2 (Primeiro Digito)
*/

class ValidaCPF {
  constructor(cpfEnviado) {
    Object.defineProperty(this, 'cpfLimpo', {
      value: cpfEnviado.replace(/\D+/g, ''),
      writable: false,
      enumerable: false,
      configurable: false,
    })
  }

  isSequence() {
    return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo;
  }

  geraNovoCpf() {
    const cpfSemDigitos = this.cpfLimpo.slice(0, -2);
    const digito1 = ValidaCPF.geraDigito(cpfSemDigitos)
    const digito2 = ValidaCPF.geraDigito(cpfSemDigitos + digito1)
    this.novoCPF = cpfSemDigitos + digito1 + digito2
  }

  static geraDigito(cpfSemDigitos) {
    let total = 0;
    let reverso = cpfSemDigitos.length + 1

    for (let stringNumerica of cpfSemDigitos) {
      total += reverso * Number(stringNumerica)
      reverso--;
    }

    const digito = 11 - (total % 11);
    return digito <= 9 ? String(digito) : 0
  }

  valida() {
    if (!this.cpfLimpo) return false;
    if (typeof this.cpfLimpo !== 'string') return false
    if (this.cpfLimpo.length !== 11) return false
    if (this.isSequence()) return false;
    this.geraNovoCpf()
    console.log(this.novoCPF)

    return this.novoCPF === this.cpfLimpo
  }
}

let validacpf = new ValidaCPF('070.987.720-03')
// validacpf = new ValidaCPF('999.999.999-99')

if (validacpf.valida()) {
  console.log('CPF válido')
} else {
  console.log('CPF inválido')
}
