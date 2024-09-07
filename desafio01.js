// 1) Observe o trecho de código abaixo: int INDICE = 13, SOMA = 0, K = 0;
// Enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; }
// Imprimir(SOMA);
// Ao final do processamento, qual será o valor da variável SOMA?

let indice = 12;
let soma = 0;
let k = 1;

while (k < indice) {
  k += 1;
  soma += k;
}

console.log(`O valor da variável soma ao final do processamento é: ${soma}`);

// O valor da variável soma será 77.

// Como usar o terminal:
// 1) Digite 'node desafio01.js'
