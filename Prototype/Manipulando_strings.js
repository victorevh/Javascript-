// Manipulando Strings e Números

// Transformar String em Número e Número em String
/* let string = "123"
Number(String)

let number = 321
String(Number)

console.log(number)
console.log(string)
*/

// Contar quantos caracteres tem uma palavra e quantos dígitos tem um número

let word = "Paralelepipedo"
console.log(word.length)
// Lenght não conta caracteres númericos, mas você pode transformar o number em String como no modelo abaixo
let number = 1234
console.log(String(number).length)

// Manipulanod Strings e Números


// Transformar um número quebrado com 2 casas decmiais e trocar ponto por vírgula

let number = 345.343545455445
console.log(number.toFixed(2).replace(".", ","))