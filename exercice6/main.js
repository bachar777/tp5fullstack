const calcul = require('./addition');

const a = 10;
const b = 5;
const somme = calcul.addition(a, b);
const difference = calcul.soustraction(a, b);

console.log(`${a} + ${b} = ${somme}`);
console.log(`${a} - ${b} = ${difference}`);