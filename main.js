// Classe base
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greeting() {
    console.log(`Olá meu nome é ${this.name} e tenho ${this.age} de idade`);
  }
}

// Subclasse da classe -Person-
class Student extends Person {
  constructor(name, age, course) {
    super(name, age); //Chama o contructor da classe base
    this.course = course;
  }

  // Método específico da classe -student-
  info() {
    console.log(`${this.name} está estudando ${this.course}`);
  }
}

// Subclasse da classe -Person-
class Worker extends Person {
  constructor(name, age, job) {
    super(name, age); //Chama o contructor da classe base
    this.job = job;
  }

  // Método específico da classe -Worker-
  work() {
    console.log(`${this.name} é um ${this.job}`);
  }
}

// Instâncias das Classes
const person1 = new Person("Maria", 23);
const student1 = new Student("Ana", 20, "Ciência da Computação");
const worker1 = new Worker("Gabriel", 25, "Jogador de Futebol");
