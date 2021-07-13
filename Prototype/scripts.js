/* Expressões e Operadores

- Expressions
- Operators
    Binary
    Unary
    Ternary


let number = 1

console.log(number + 1) // operador binario

console.log(++number) // Unary 

console.log(false ? 'alo' : 'nada') // Ternary */

/* função autoexecutavel, nesse caso não utilizando o ponto e virgula ele usaria a variavel definida a cima
(function(){
    console.log('alo')
})()
*/

/*
   New

   * left-hand-side expression
   * Criar um novo objeto


let name = new String('Victor')
name.surName = "Oliveira"
let age = new Number(24)
console.log(name.surName, age)
let date = new Date ('2021-07-12')
console.log(date.__proto__)
*/

/* 
   Operadores unários
   typeof
   delete

const person = {
    name: 'Victor',
    age: 24,
}

delete person.age

console.log(typeof "Victor")
console.log(person)
*/

// Operadores Aritiméticos

// multiplicação *
// console.log(5.2 * 5.2)

// divisão /
// console.log(12.8 / 2)

// soma +
// console.log(2.5 + 2.5)

// subtração -
// console.log(2.9 - 2)

// resto da divisão %
let remainder
remainder = 11 % 9
//console.log(remainder)

// incremento ++
let increment = 0
//console.log(++increment)
//console.log(increment)

// decremento --
let decrement = 0
decrement --
//console.log(decrement)

// exponencial **
// console.log(3 ** 3)

// Grouping operator ()

// let total = (2 + 3) * 5
// console.log(total)

// Operadores de comparação

// Irá comparar valores e retornar um Boolean como resposta à comparação

let one = 1
let two = 2

// =      receber ou atribuir um valor
// ==     igual a
// console.log( two == 1 )
// console.log( one == "1")

// != diferente de
// console.log(one != two)
// console.log(one != 1)
// console.log(one != "1")

// ===   estritamente igual a
// === compara os valores e tipos do elemento, leva em consideração tanto os valores quanto os tipos pois "1" (string) + 1 (number) = 11
// console.log (one === "1")
// console.log (one === 1)

// !== estritamente diferente de
// console.log( two !== "2")
// console.log( two !== 2)

// >     Maior que
// console.log(one > two)

// >=    Maior igual a
// console.log(one >= 1)
// console.log(two >= 1)

// <     Menor igual a
// console.log( one <= two)
// console.log( one <= 1)
// console.log( one <= 0)

// Operadores de atribuição (Assignment)
let x


// assignment
x = 1

// addition assignment
// x = x + 2 expressão
x += 2

// subtraction assignment
// x = x - 1
x -= 1

// multiplication assignment
// x = x * 2
x *= 2

// division assignment
// x = x /2
x /= 2

// remainder, exponentiation
// x %= 2
x **=2
// console.log(x)

// Operadores lóficos (logical operators)

// - 2 valores booleanos, quando verificados,
// resultará em verdadeiro ou falso

// let pao = true
// let queijo = true

// AND &&
// console.log(pao && queijo)


// OR ||
// console.log(pao || queijo)

// NOT !  quando se nega uma variavel ela tem seu valor trocado
// console.log(!pao)

// Operador Condicional (Ternário)

// Dependendo da condição, nós receberemos valores diferentes

// Condição então valor 1 se não valor 2
// condition ? value1 : value2

// Exemplos
// Café da manhã top
// let pao = false
// let queijo = false

// const niceBreakfast = pao && queijo ? 'Café top' : 'Café ruim'
// const niceBreakfast = pao || queijo ? 'Café bom' : 'Café ruim'
// console.log(niceBreakfast)

// Maior que 18

// let age = 16

// const canDrive = age >= 18 ? 'Can Drive' : "Can't drive"
// console.log(canDrive)


// Operador de String (String operator)

// comparison (comparação)
// console.log( 'a' == 'a')


// concatenation (concatenação)
// Retorna a união de duas Strings
// let alpha = 'alfa'
// console.log( alpha + 'bet' + 's')
// alpha += 'bet'
// console.log(alpha + 's')