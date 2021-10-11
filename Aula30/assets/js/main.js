
const h1 = document.querySelector('.container h1');
const data = new Date();

h1.innerHTML = Intl.DateTimeFormat('pt-BR', { dateStyle: "full", timeStyle: "medium" }).format(new Date());

// const h1 = document.querySelector('.container h1');
// const data = new Date();

// function getDiaSemanaTexto(diaSemana) {
//     const diasSemana = ['domingo', 'segunda', 'terça', 'quarto', 'quinta', 'sexta', 'sábado'];
//     return diasSemana[diaSemana]
// }

// function getNomeMes(numeroMes) {
//     const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
//     return meses[numeroMes]
// };

// function zeroAEsquerda (num) {
//     return num >= 10 ? num : `0${num}`
// }

// function criaData (data) {
//     const diaSemana = data.getDay();
//     const numeroMes = data.getMonth();

//     const nomeDia  = getDiaSemanaTexto(diaSemana);
//     const nomeMes = getNomeMes(numeroMes);

//     return (`${nomeDia}, ${zeroAEsquerda(data.getDate())} de ${nomeMes}` +
//     ` de ${zeroAEsquerda(data.getFullYear())} ${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}`)
// }

// h1.innerHTML = criaData(data);


// const h1 = document.querySelector('.container h1');
// const data = new Date();

// function getDiaSemanaTexto(diaSemana) {
//     let diaSemanaTexto;

//     switch (diaSemana) {
//         case 0:
//             diaSemanaTexto = 'Domingo';
//             return diaSemanaTexto;
//         case 1:
//             diaSemanaTexto = 'Segunda';
//             return diaSemanaTexto;
//         case 2:
//             diaSemanaTexto = 'Terça';
//             return diaSemanaTexto;
//         case 3:
//             diaSemanaTexto = 'Quarta';
//             return diaSemanaTexto;
//         case 4:
//             diaSemanaTexto = 'Quinta';
//             return diaSemanaTexto;
//         case 5:
//             diaSemanaTexto = 'Sexta';
//             return diaSemanaTexto;
//         case 6:
//             diaSemanaTexto = 'Sábado';
//             return diaSemanaTexto;
//         default:
//             diaSemanaTexto = '';
//     }
// }

// function getNomeMes(numneroMes) {
//     let nomeMes;

//     switch (numneroMes) {
//         case 0:
//             nomeMes = 'Janeiro';
//             return nomeMes;
//         case 1:
//             nomeMes = 'Fevereiro';
//             return nomeMes;
//         case 2:
//             nomeMes = 'Março';
//             return nomeMes;
//         case 3:
//             nomeMes = 'Abril';
//             return nomeMes;
//         case 4:
//             nomeMes = 'Maio';
//             return nomeMes;
//         case 5:
//             nomeMes = 'Junho';
//             return nomeMes;
//         case 6:
//             nomeMes = 'Julho';
//             return nomeMes;
//         case 7:
//             nomeMes = 'Agosto';
//             return nomeMes;
//         case 8:
//             nomeMes = 'Setembro';
//             return nomeMes;
//         case 9:
//             nomeMes = 'Outubro';
//             return nomeMes;
//         case 10:
//             nomeMes = 'Novembro';
//             return nomeMes;
//         case 11:
//             nomeMes = 'Dezembro';
//             return nomeMes;
//         default:
//             nomeMes = '';
//     }
// };

// function zeroAEsquerda (num) {
//     return num >= 10 ? num : `0${num}`
// }

// function criaData (data) {
//     const diaSemana = data.getDay();
//     const numeroMes = data.getMonth();

//     const nomeDia  = getDiaSemanaTexto(diaSemana);
//     const nomeMes = getNomeMes(numeroMes);

//     return (`${nomeDia}, ${zeroAEsquerda(data.getDate())} de ${nomeMes}` +
//     ` de ${zeroAEsquerda(data.getFullYear())} ${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}`)
// }

// h1.innerHTML = criaData(data);