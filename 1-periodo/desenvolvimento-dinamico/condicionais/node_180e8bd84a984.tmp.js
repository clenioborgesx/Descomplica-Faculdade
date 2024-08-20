const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Escolha uma opção:\n1. Café\n2. Leite\n3. Chá\n", (opcao) => {
  opcao = parseInt(opcao);

  switch (opcao) {
      case 1:
          var valor = 2.50;
          var bebida = "Café";
          break;
      case 2:
          var valor = 1.75;
          var bebida = "Leite";
          break;
      case 3:
          var valor = 1.00;
          var bebida = "Chá";
          break;
      default:
          console.log("Opção inválida. Por favor, escolha entre 1, 2 ou 3.");
          rl.close();
          return;
  }

  if (valor) {
      console.log(`Você escolheu ${bebida}. O valor a ser pago é R$ ${valor.toFixed(2)}.`);
  }
  rl.close();
});

/*
let escolha = prompt("Escolha sua bebida:\n" +
    "1. Café (expresso): R$ 5,00\n" +
    "2. Leite: R$ 6,00\n" +
    "3. Chá: R$ 7,00\n" +
    "4. Chá preto: R$ 3,00\n" +
    "5. Chá verde: R$ 3,50\n" +
    "6. Suco de laranja: R$ 4,00\n" +
    "7. Suco de morango: R$ 4,50\n" +
    "8. Água com gás: R$ 2,00\n" +
    "9. Água sem gás: R$ 1,50\n" +
    "10. Refrigerante: R$ 3,00");

escolha = parseInt(escolha);

switch (escolha) {
    case 1:
        console.log("Você escolheu café expresso. O valor é R$ 5,00.");
        break;
    case 2:
        console.log("Você escolheu cappuccino. O valor é R$ 6,00.");
        break;
    case 3:
        console.log("Você escolheu latte. O valor é R$ 7,00.");
        break;
    case 4:
        console.log("Você escolheu chá preto. O valor é R$ 3,00.");
        break;
    case 5:
        console.log("Você escolheu chá verde. O valor é R$ 3,50.");
        break;
    case 6:
        console.log("Você escolheu suco de laranja. O valor é R$ 4,00.");
        break;
    case 7:
        console.log("Você escolheu suco de morango. O valor é R$ 4,50.");
        break;
    case 8:
        console.log("Você escolheu água com gás. O valor é R$ 2,00.");
        break;
    case 9:
        console.log("Você escolheu água sem gás. O valor é R$ 1,50.");
        break;
    case 10:
        console.log("Você escolheu refrigerante. O valor é R$ 3,00.");
        break;
    default:
        console.log("Opção inválida. Por favor, escolha um número entre 1 e 10.");
}
        */
       