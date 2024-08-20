var vetor = [1, 'dois', 3, 'quatro', 5, 'seis'];

// Utilizando map para duplicar os números e transformar as strings em letras maiúsculas
var mapVetor = vetor.map((valor) => {
  if (typeof valor === 'number') {
    return valor * 2;
  } else if (typeof valor === 'string') {
    return valor.toUpperCase();
  } else {
    return valor; // Mantém o valor original para outros tipos
  }
});

console.log('vetor mapeado:', mapVetor);

// Utilizando filter para filtrar somente os números do vetor
var filterVetor = vetor.filter((valor) => typeof valor === 'number');

console.log('vetor filtrado:', filterVetor);

// Utilizando reduce para somar os números do vetor
var soma = vetor.reduce((auxiliar, valor) => {
  if (typeof valor === 'number') {
    return auxiliar + valor;
  } else {
    return auxiliar; // Evita somar valores não numéricos
  }
}, 0);

console.log('Soma:', soma);