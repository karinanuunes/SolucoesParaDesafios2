// 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
// • O menor valor de faturamento ocorrido em um dia do mês;
// • O maior valor de faturamento ocorrido em um dia do mês;
// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

// IMPORTANTE:
// a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
// b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;

const faturamentoJSON = require("./faturamento.json");
const faturamento = faturamentoJSON.faturamento;

let menorValor = null;
let maiorValor = null;
let somaFaturamento = 0;
let diasComFaturamento = 0;

faturamento.forEach((dia) => {
  if (dia.valor > 0) {
    if (menorValor === null || dia.valor < menorValor) menorValor = dia.valor;
    if (maiorValor === null || dia.valor > maiorValor) maiorValor = dia.valor;
    somaFaturamento += dia.valor;
    diasComFaturamento++;
  }
});

const mediaFaturamento = somaFaturamento / diasComFaturamento;

const diasAcimaDaMedia = faturamento.filter(
  (dia) => dia.valor > mediaFaturamento
).length;

console.log(`Menor faturamento do mês: R$ ${menorValor.toFixed(2)}`);
console.log(`Maior faturamento do mês: R$ ${maiorValor.toFixed(2)}`);
console.log(
  `Número de dias com faturamento acima da média: ${diasAcimaDaMedia}`
);

// Observação: O dia 07/01/2021 não funcionou e não foi considerado no cálculo da média.

// Como usar o terminal:
// 1) Digite 'node desafio03.js'
