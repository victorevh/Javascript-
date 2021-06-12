// callback function
// O callback é uma função que passa a ser parametro de uma outra função
function sayMyName(name) {
    console.log('antes de executar o callback')
// abaixo invoco a callback que é uma função logo abaixo e está passando a ser um parametro aqui dentro.
    name()

    console.log('depois de executar o callback')
}


// criei uma nova função para sayMyName em outro escopo e vou invoca-la na function acima
sayMyName(
    () => {
        console.log('estou em uma callback')
    }
)