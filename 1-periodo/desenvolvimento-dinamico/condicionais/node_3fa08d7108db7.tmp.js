const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calcular() {
  rl.question('Escolha uma operação:\n1. Somar\n2. Subtrair\n3. Multiplicar\n4. Dividir\n', (operacao) => {
    operacao = parseInt(operacao);

    if (operacao >= 1 && operacao <= 4) {
      rl.question('Digite o primeiro número:', (num1) => {
        num1 = parseFloat(num1);
        rl.question('Digite o segundo número:', (num2) => {
          num2 = parseFloat(num2);

          switch (operacao) {
            case 1:
              console.log("Resultado: " + (num1 + num2));
              break;
            case 2:
              console.log("Resultado: " + (num1 - num2));
              break;
            case 3:
              console.log("Resultado: " + (num1 * num2));
              break;
            case 4:
              if (num2 === 0) {
                console.log("Divisão por zero não é permitida!");
              } else {
                console.log("Resultado: " + (num1 / num2));
              }
              break;
            default:
              console.log("Opção inválida!");
          }
          rl.close();
        });
      });
    } else {
      console.log("Opção inválida!");
      rl.close();
    }
  });
}

calcular();