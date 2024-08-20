var numeros = [1,2,3,4,5,6,7,8,9,10];

var resultado = numeros.filter(item => item % 2 == 0);
console.log(resultado);

var numerosFiltrados = numeros.filter(
    function(valor){
        return valor > 5;
    }
)
console.log(numerosFiltrados);

function buscaval(valor){
    return valor > 8;
}

var numerosFiltrados = numeros.filter(buscaval);
console.log(numerosFiltrados);

var funcionarios = [
    {nome: "Clenio", idade: 29},
    {nome: "Priscila", idade: 29},
    {nome: "Cristina", idade: 59},
    {nome: "Joao Pedro", idade: 20},
]

var pessoasLista = funcionarios.filter(
    function(valor){
        return valor.nome.length < 10
    });

console.log(pessoasLista);

var produtos = [
    {id: 1 ,descricao: "Telefone", categoria: "Portateis", peso: 1},
    {id: 2 ,descricao: "Geladeira", categoria: "Eletrodomésticos", peso: 80},
    {id: 3 ,descricao: "Televisão", categoria: "Eletrônico", peso: 10},
    {id: 4 ,descricao: "Mesa", categoria: "Móvel", peso: 120},
]

var listaprodutos = produtos.filter(
    function(valor){
        return valor.peso > 10
    });

console.log(listaprodutos);