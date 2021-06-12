/* function scope
let subject = 'create video'
// o subject da varíavel é diferente do subject da função, observe abaixo
function createThink(subject) {
    subject = 'study'
    return subject
}
// invocando o subject da função
console.log(createThink(subject))
// invocando o subject da variavel
console.log(subject)
*/

let subject

function creatThink() {
    subject = 'study'
    return subject
}

// observe que ao invocar a variavel subject o valor mostrado será indefinido, pois o mesmo não tem valor atribuido.
console.log(subject)
// observe que ao invocar a função creatThink com o parametro vazio, ele vai retornar o valor de subject que é = study 
console.log(creatThink())
// observe que apos invocar o parametro da função que é o mesmo da primeira variavel ele vai retornar o valor de subject que é = study
console.log(subject)
// toda função que não tem return vai ser undefined 