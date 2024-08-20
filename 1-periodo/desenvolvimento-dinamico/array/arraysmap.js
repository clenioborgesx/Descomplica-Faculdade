var numeros = [1,2,3,4,5,6,7,8,9,10];

var num = numeros.map(function(valor){
    return valor * 5;
});

console.log(num);

var produtos = [
    {id: 1 ,descricao: "Telefone", categoria: "Portateis", peso: 1},
    {id: 2 ,descricao: "Geladeira", categoria: "Eletrodomésticos", peso: 80},
    {id: 3 ,descricao: "Televisão", categoria: "Eletrônico", peso: 10},
    {id: 4 ,descricao: "Mesa", categoria: "Móvel", peso: 120},
]

descricoes = produtos.map(informacao => informacao.descricao);
console.log(descricoes);