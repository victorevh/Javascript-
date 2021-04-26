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

