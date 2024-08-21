class Funcionario {
    constructor(nome, idade, cargo) {
      this.nome = nome;
      this.idade = idade;
      this.cargo = cargo;
    }
  
    seApresentar() {
      console.log(`Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e sou ${this.cargo}.`);
    }
  
    trabalhar() {
      console.log('Estou trabalhando.');
    }
  }
  
  class Gerente extends Funcionario {
    constructor(nome, idade, cargo, departamento) {
      super(nome, idade, cargo);
      this.departamento = departamento;
    }
  
    gerenciar() {
      console.log(`Estou gerenciando o departamento de ${this.departamento}.`);
    }
  }
  
  class Desenvolvedor extends Funcionario {
    constructor(nome, idade, cargo, linguagem) {
      super(nome, idade, cargo);
      this.linguagem = linguagem;
    }
  
    programar() {
      console.log(`Estou programando em ${this.linguagem}.`);
    }
  }

  // Criando um gerente
const gerente1 = new Gerente('Clênio', 29, 'Gerente', 'Negócios');
gerente1.seApresentar();
gerente1.trabalhar();
gerente1.gerenciar();

// Criando um desenvolvedor
const desenvolvedor1 = new Desenvolvedor('Priscila', 29, 'Desenvolvedora', 'Python');
desenvolvedor1.seApresentar();
desenvolvedor1.trabalhar();
desenvolvedor1.programar();