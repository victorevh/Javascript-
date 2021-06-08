// Aqui tenho um comentário em linha, // serve para ignorar codigos
/* 
  Aqui tenho um comentario multi linha ou comentario de bloco
*/

// o código abaixo escreve alguma mensagem no devtools

console.log('Bem vindos ao Starter!!') // console.log('ieia ignorar')
console.log('não iria ignorar')

/*
  String

  * Cadeia de caracteres

  ""  // aspas duplas
  ' ' // aspas simples
  ``  // template literals ou template strings

*/

/*
  String

  * Cadeia de caracteres

  ""  // aspas duplas
  ' ' // aspas simples
  ``  // template literals ou template strings

*/
console.log('vic"to"r')

console.log(`victor" ' '"` )

console.log(`

victor

`)


console.log(`Victor ${4+5}`) //interpolação = colocar uma expressão dentro de uma template literals

console.log(`Victor ${64000/4}`)

/*
 Number
   * números
   
   33 // inteiros
   12.5 // reais - float
   Nan // Not a Number
   Infinity // infinito
*/
console.log(-33)
console.log(12.5)
console.log(12.5 / "asdf")
console.log(12.5 === Infinity)
console.log(Infinity)

/*
  Boolean
   Boolean
     * somente 2 valores

         true // verdadeiro
         false // falso
*/
console.log(true)
console.log(false)

/*
* undefined
  * indefinido
* null
  * nulo
  * objeto que não possui nada dentro
  * diferente de indefinido

*/


console.log(undefined)
console.log(null === undefined)


/*
* Object
  * Objeto
  * Propriedades / Atributos
  *  Funcionalidades / Métodos
{ propriedade: "valor" }

*/
console.log({
  propriedade: "atributo",
  name: "Victor",
  idade: "24",
  andar: function() {
    console.log('andar')
  },
  dormir: function() {
    console.log('dormir')
  },
  estudar: function() {
    console.log('estudar')
  },
  comer: function() {
    console.log('comer')
  }
})

/*
* Array (Vetores)
  * Uma lista
  * Agrupamento de dado
  ["Victor", 24]
*/
console.log([
  "Leite",
  "Ovos",
  2,
  3,
])

 // variaveis
    // var
    // let
    // const : não pode mudar pois o valor está atribuido a variavel constante
    
    const clima = "Quente"
    console.log(typeof clima)
    
    var solo = "litosolo"
    console.log(typeof solo)

    let numero = 38
    console.log(typeof numero)

    let TORF = false //boolean
    TORF = "" //string
    console.log(typeof TORF) //typeof para mostrar o tipo de variavel no console

// var é global e, também local
// hoisting
console.log('> existe x antes do bloco? ', x)

{
    var x = 0;
}

console.log('> existe x depois do bloco? ', x)

// const e let são locais e só funcionam no escopo onde foi criada
let y = 1;
{
    let y = 0
    console.log('> existe y antes do bloco ', y)
}
console.log('> existe y depois do bloco ', y)


    // variáveis e tipos de dados
    // declaração or declaration
    var name

    // assignment or atribuição de valores
    name = "Lucas"

    // que tipo de dado foi colocado na variável

    console.log(typeof name)

    // informações desagrupadas

    // let age = 20
    // let isHuman = true

    // as mesmas informações agrupadas

    let age, isHuman

    age = 44
    isHuman = true

    // informações agrupadas na função log *multiplos argumentos*
    // console.log(name, age, isHuman)
    
    // escrita de texto + variáveis
    // concatenando valores
    // console.log('o ' + name + ' tem ' + age + ' anos.')

    // interpolando valores com template literals or template strings
    console.log(`o ${name} tem ${age} anos.`)


// Object

const person = {
  name: 'John',
  age: 30,
  weight: 88.6,
  isAdmin: true
}

//console.log(person.age)

console.log(`${person.name} tem ${person.age} anos`)

// Array

const animals = [
  'Lion',
  'Monkey',
  {
      name: 'Cat',
      age: '3'
  }
]

// acessar valores no array

console.log(animals)

// saber numeros de objetos

// console.log(animals.length)

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


console.log(`O ${student.name} tem ${student.age} de idade e pesa ${student.weight} kg.`);
console.log(' O '+ student.name +' é um subscrito no canal? ' + student.isSubscribed);

/*
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

