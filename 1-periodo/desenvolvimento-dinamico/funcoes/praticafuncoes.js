const readline = require('readline-sync');

function calcularMediaPonderada() {
  // Solicita as notas ao usuário e armazena em um array
  const notas = [];
  for (let i = 1; i <= 3; i++) {
    notas.push(parseFloat(readline.question(`Digite a nota ${i}: `)));
  }

  // Define os pesos das notas
  const pesos = [2, 3, 5];

  // Calcula a média ponderada
  const somaPonderada = notas.reduce((acc, nota, index) => acc + nota * pesos[index], 0);
  const somaPesos = pesos.reduce((acc, peso) => acc + peso, 0);
  const mediaPonderada = somaPonderada / somaPesos;

  // Exibe o resultado
  console.log(`A média ponderada é: ${mediaPonderada.toFixed(2)}`);
}

calcularMediaPonderada();