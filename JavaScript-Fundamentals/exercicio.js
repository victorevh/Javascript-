// 1. Declare uma variável de nome weight
//let weight;

// 2. Que tipo de dado é a veriável acima?
// console.log(typeof weight)
/* 3. Declare uma variável e atribua valores para cada um dos dados:
      * name: String
      * age: Number (interger) inteiro
      * stars: Number (float) quebrado
      * isSubscribed: Boolean

let name = "Victor"
let age = 24
let stars = 4.8

   4. A variável student abaixo é de que tipo de dados?
   Objeto

   4.1 Atribua a ela as mesmas propriedades e valores do exercício 3.

   4.2 Mostre no console a seguitne mensagem:
    <name> de idade <age> pesa <weight> kg.

    Atenção, substitua <name> <age> e <weight> pelos valores de cada propriedade do objeto

*/

let student = {
    name: "Lucas",
    age: 23,
    weight: 88.3,
    isSubscribed: true
};

/*
console.log(`O ${student.name} tem ${student.age} de idade e pesa ${student.weight} kg.`);
console.log(' O '+ student.name +' é um subscrito no canal? ' + student.isSubscribed);

 
   5. Declare uma variável do tipo Array, de nome students e atribua a ela nenhum valor, ou seja, somente o Array vazio
*/


/*
   6. Reatribua valor para a variável acima, colocando dentro dela o objeto student da questão 4. (Não copiar e colar o objeto, mas usar o objeto criado e inserir ele no Array).
*/

let students = [
    student
]


/* 
   7. Coloque no console o valor da posição zero do Array acima
*/


/*
   8. Crie um novo student e coloque na posição 1 do Array students
*/

const cesar = {
    name: "Cesar",
    age: 38,
    weight: 76.3,
    isSubscribed: false,
}

/*
students = [
    student,
    cesar
]
*/
// Ou apenas adiciona na array assim

students[1] = cesar

console.log(students)

/* 
   9. Sem rodaro código responda qual é a resposta do código abaixo e por que? Após sua resposta, rode o código e veja se você acertou.

   console.log(a)

   var a = 1

   está indefnido zzzzZ
*/

var a = 1

console.log(a)

