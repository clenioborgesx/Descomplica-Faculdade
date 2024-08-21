function converterNomes(nomes) {
    // Utiliza o método map para iterar sobre cada nome do array
    return nomes.map(nome => {
      // Verifica se o tamanho do nome é menor que 5 caracteres
      if (nome.length < 5) {
        // Converte o nome para maiúsculas e retorna o novo valor
        return nome.toUpperCase();
      } else {
        // Retorna o nome original, sem alterações
        return nome;
      }
    });
  }

var nomes = ["Clenio", "Priscila", "Cristina", "João", "Pedro"];
var nomesConvertidos = converterNomes(nomes);
console.log(nomesConvertidos);