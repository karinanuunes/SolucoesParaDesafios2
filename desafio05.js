// 5) Escreva um programa que inverta os caracteres de um string.

// IMPORTANTE:
// a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
// b) Evite usar funções prontas, como, por exemplo, reverse;

const readline = require("readline-sync");

const palavra = readline.question("Digite uma palavra: ");

let palavraInvertida = "";

for (let i = palavra.length - 1; i >= 0; i--) {
  palavraInvertida += palavra[i];
}

console.log(`String invertida: ${palavraInvertida}`);

// Como usar o terminal:
// 1) Digite 'node desafio05.js'
// 2) Digite uma palavra
