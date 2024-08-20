var produtos = [
    { nome: 'Maçã', preco: 2.99, categoria: 'Frutas' },
    { nome: 'Banana', preco: 1.99, categoria: 'Frutas' },
    { nome: 'Laranja', preco: 1.50, categoria: 'Frutas' },
    { nome: 'Morango', preco: 5.99, categoria: 'Frutas' },
    { nome: 'Arroz', preco: 4.99, categoria: 'Grãos' },
    { nome: 'Feijão', preco: 3.99, categoria: 'Grãos' },
    { nome: 'Leite', preco: 3.50, categoria: 'Laticínios' },
    { nome: 'Queijo', preco: 9.99, categoria: 'Laticínios' },
    { nome: 'Ovos', preco: 6.99, categoria: 'Frios' },
    { nome: 'Salsicha', preco: 8.99, categoria: 'Frios' },
    { nome: 'Carne Bovina', preco: 25.99, categoria: 'Carnes' },
    { nome: 'Frango', preco: 12.99, categoria: 'Carnes' },
    { nome: 'Sabonete', preco: 2.49, categoria: 'Higiene' },
    { nome: 'Shampoo', preco: 14.99, categoria: 'Higiene' }
];

produtos.forEach(produto => {
    console.log(`O produto ${produto.nome} custa R$ ${produto.preco} e pertence à categoria ${produto.categoria}`);
});