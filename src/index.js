/*aqui estamos criando um array de informações o array é um conjunto de informações agrupadas em linha*/

let valores = [7.7, 8.5, 5.5];

console.log(valores[0], valores[3]);
console.log(valores);

valores[4] = 10;
console.log(valores.longth);

valores.push({ id: 3 }, false, null, "teste");
console.log(valores);

valores.pop();
console.log(valores);

delete valores[0];
console.log(typeof valores);
console.log(valores);

let calculo = [10, 15];
let resultado = calculo[0] + calculo[1];
console.log(resultado);
