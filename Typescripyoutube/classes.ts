class UserAccount {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  logDateils(): void {
  console.log(`The player ${this.name} is ${this.age} years old.`);
}
}

const Max = new UserAccount("Max", 34);
 /*console.log(Max);
console.log(Max.name);
Max.logDateils() */

class CharAccount extends UserAccount {
nickname: string; 
//private nao pode ser acessado fora da classe.
// readonly permite somente a leitura de um valor, nao pode ser alterado.
// public permite acesso a todos os valores.
// protected permite acesso somente dentro das classes ou subclasses.
level: number;
//constructor recebe todos os valores que ele tem, e os valores que ele esta herdando.
constructor(name: string, age: number, nickname: string, level: number) {
  super(name, age);// pega os valores da classe superior
  this.nickname = nickname;
  this.level = level;  
}
get getLevel() { // get permite acesso ao valor.
  console.log("----GET----");
    return this.level;
  }
  set setLevel(level: number) { // set permite alterar o valor.
    console.log("----SET----");
    this.level = level;
}};
const john = new CharAccount("John", 45, "jonhmaster", 80);// declara a contante 'john', cria novo objeto da classe 'CharAccount' e entre parenteses passa os valores que ele tem.
console.log(john.nickname);
john.logDateils();
console.log(john.getLevel);
john.logDateils();
john.setLevel = 100;// alterando o level com o set.
console.log(john.getLevel);//exibindo valor alterado. usando o get.

abstract class Animal {
  abstract makeSound(): void;
  move(): void {
    console.log("roaming the earth...");
  }
}// cria classe que não pode ser instanciada, apenas herdada.
//usadas para criar modelos para outras classes.mas nada será criada a partir delas.