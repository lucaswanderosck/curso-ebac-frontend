// Cria um array de estudantes com o nome e a nota.
const studentsList = [
  { name: "John", note: 10 },
  { name: "Luke", note: 5 },
  { name: "jake", note: 9 },
  { name: "Mary", note: 6 },
  { name: "Rose", note: 3 },
];

// Seleciona os estudantes com nota maior que 6.
const filterStudents = (student) => student.note >= 6;

// Crie um novo array com estudantes aprovados.
const approvedStudents = studentsList.filter(filterStudents);

console.log(approvedStudents); /* Saída [
                                           { name: 'John', note: 10 },
                                           { name: 'jake', note: 9 },
                                           { name: 'Mary', note: 6 }
                                        ]
*/
