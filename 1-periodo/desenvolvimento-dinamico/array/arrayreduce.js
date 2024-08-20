var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var soma = numeros.reduce((total, num) => {
  return total + num;
}, 0);

console.log(soma);