// Array de números

var numbers = [1, 2, 3, 4, 5];

// Variável para armazenar a soma

let sum = 0;

// Índice inicial para o reduce

let index = 0;

// Executa o reduce utilizando do while

do {

  sum = numbers.reduce((accumulator, currentValue, currentIndex) => {

    if (currentIndex <= index) {

      return accumulator + currentValue;

    } else {

      return accumulator;

    }

  }, sum);

  index++;

} while (index < numbers.length);

console.log("A soma dos números é:", sum);