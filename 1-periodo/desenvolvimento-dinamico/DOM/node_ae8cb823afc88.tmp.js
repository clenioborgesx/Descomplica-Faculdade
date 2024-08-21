const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calcularMedia() {
  let totalNotas = 0;
  let quantidadeEstudantes = 0;

  console.log("Digite as notas dos estudantes (digite um valor negativo para encerrar):");

  function obterNota() {
    rl.question("Digite a nota do estudante: ", (nota) => {
      const notaFloat = parseFloat(nota);

      if (isNaN(notaFloat)) {
        console.log("Valor inválido. Digite um número.");
        obterNota(); // Chama a função novamente para pedir uma nova entrada
      } else if (notaFloat < 0) {
        rl.close();
        if (quantidadeEstudantes > 0) {
          const media = totalNotas / quantidadeEstudantes;
          console.log("A média das notas é:", media.toFixed(2));
        } else {
          console.log("Nenhuma nota foi digitada.");
        }
      } else {
        totalNotas += notaFloat;
        quantidadeEstudantes++;
        obterNota();
      }
    });
  }

  obterNota();
}

calcularMedia();