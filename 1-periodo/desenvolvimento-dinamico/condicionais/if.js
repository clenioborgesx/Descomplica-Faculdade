var numeros = [1, 10, 25, 3, 15, 50];

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] < 10) {
    console.log(numeros[i] + " é menor que 10");
  } else if (numeros[i] < 20) {
    console.log(numeros[i] + " está entre 10 e 20");
  } else if (numeros[i] < 50) {
    console.log(numeros[i] + " está entre 20 e 50");
  } else {
    console.log(numeros[i] + " é maior ou igual a 50");
  }
}

var numeros = [2, 5, 8, 15, 20];

numeros.forEach(numero => {
  if (numero % 2 === 0 && numero % 5 === 0) {
    console.log(numero + " é par e múltiplo de 5");
  } else if (numero % 2 === 0) {
    console.log(numero + " é par");
  } else if (numero % 5 === 0) {
    console.log(numero + " é múltiplo de 5");
  } else {
    console.log(numero + " é ímpar");
  }
});

var numeros = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 === 0) {
    console.log(numeros[i] + ' é par!');
  } else {
    console.log(numeros[i] + ' é ímpar!');
  }
}

var frutas = ['maçã', 'banana', 'laranja', 'uva'];

frutas.forEach(fruta => {
  if (fruta === 'banana') {
    console.log('Achei a banana!');
  } else {
    console.log('Não é banana!');
  }
});

var notas = [1, 2, 3, 4, 5, 6, 7, 8, 7, 9, 6, 10];

var media = notas.reduce((soma, nota, indice) => {
  if (indice === notas.length - 1) {
    return (soma + nota) / notas.length;
  } else {
    return soma + nota;
  }
}, 0);

console.log('A média é:', media);