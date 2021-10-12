const elementos = [
  { tag: 'p', texto: 'Qualquer texto aqui.' },
  { tag: 'div', texto: 'Qualquer div aqui.' },
  { tag: 'section', texto: 'Qualquer section aqui.' },
  { tag: 'footer', texto: 'Qualquer rodapé aqui.' },
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++) {
  let { tag, texto } = elementos[i];
  let tagCriada = document.createElement(tag);
  let textoCriado = document.createTextNode(texto);
  tagCriada.appendChild(textoCriado);
  div.appendChild(tagCriada);
}

container.appendChild(div);