function processarItem(item) {
  return new Promise((resolve, reject) => {
    if (typeof item !== 'number') {
      reject(`O valor ${item} não é um número.`);
    }

    setTimeout(() => {
      if (item % 2 === 0) {
        resolve(`O número ${item} é par.`);
      } else {
        resolve(`O número ${item} é ímpar.`); // Resolve mesmo para números ímpares
      }
    }, 1000);
  });
}

function processarArray(array) {
  const promises = array.map(item => processarItem(item));
  return Promise.all(promises)
    .then(resultados => {
      resultados.forEach(resultado => console.log(resultado));
    })
    .catch(erro => {
      console.error(erro);
    });
}

const arrayNumeros = [1, 2, 3, 4, 'clenio', 5]; // Incluindo um valor não numérico para testar

processarArray(arrayNumeros);