/*
  Function() constructor
  
  * expressão new
  * criar um novo objeto
  * this keyword
*/

function Person(name) {
    this.name = name
    this.walk = function() {
        return this.name + " está andando"
    }
}
// com isso declaro uma nova propriedade mame na função Person
const victor = new Person("Victor")
const joao = new Person("João")
console.log(victor.walk())
console.log(joao.walk())

let date = new Date("2021-06-11")

console.log(date)
