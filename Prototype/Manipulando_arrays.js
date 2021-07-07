// Transforme letrasm inúsculas me maiúsculas. Faça o contrário disso também

// let word = "Progamar é muito bacana!"
// console.log(word.toUpperCase()) deiar letra caixa alta

// console.log(word.toLowerCase().toUpperCase()) Uma string agrega uma cadeia dem métodoss

// Manipulando Strings e Arrays

// Separe umt exto que contem espaços em um novo array onde cada exto é uma posição do array. Depois disso, transforme o array em um texto e onde eram espaços, coloque _
/*
let phrase = "Eu quero viver o Amor"
let myArray = phrase.split("o")
let phraseWithUnderscore = myArray.join("_")
console.log(phraseWithUnderscore.toUpperCase())
*/

// Verficiar se o texto contém a palavra Amor

// let phrase = "Eu quero viver Amor!"
// console.log(phrase.includes("Amor"))

// Manipulando Arrays
// Criar Array com construtor
// let myArray = new Array('a','b','c')
// console.log(myArray)

/* Contar elementos de um array
console.log([
    "a",
    {type: "array"},
    function() {return "alo"},
][2]()) */

// para contar os elementos do array basta utilizar o .length ou para executar um determinado item do array basta declarar a ordem [2] e se quiser pode rodar a função usando ()

// Transformar uma cadeia de caracteres em elementos de um array

// let word = "manipulação"
// console.log(Array.from(word))

let techs = ["html","css","js"]

// adicionar um item no fim 
techs.push("nodejs")
// adicionar um item no começo
techs.unshift("sql")
// remover do fim
// techs.pop()
// remover do começo
// techs.shift()
// pegar somente alguns elementos do array

// console.log(techs.slice(1,3))

// remover 1 ou mais items qem qualquer posição do array

//techs.splice(1, 2)

// encontrar a posição de um elemento no array

//let index = techs.indexOf('html')
techs.splice(index, 1)

console.log(techs)