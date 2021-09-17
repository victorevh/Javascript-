// Control Flow

// se estiver sujo
// console.log('lavar o copo')

// console.log('servir cafe')

// if...else     se...se não

let temperature = 45.5
let highTemperature = temperature >= 37.5
let mediumTemperature = temperature < 37.5 && temperature >= 37

/*
if(temperature >= 37.5) {
    console.log('Febre Alta')
} else if(temperature < 37.5 && temperature >= 37) {
    console.log('Febre Moderada')
} else {
    console.log('Saudável')
}

if(highTemperature){
    console.log('Febre Alta')
} else if(mediumTemperature){
    console.log('Febre Moderada')
} else {
    console.log('Saudável')
}
*/

// switch
// case = caso ; break = mostra que o caso acabou, caso não utilize o console vai imprimir todos os casos a seguir

/*
let expression = 'b'

switch (expression) {
    case 'a':
        // codigo
        console.log('a')
        break
    case 'b':
        // codigo para expression b
        console.log('b')
        break
    default:
        console.log('default')
        break
}
*/

/*
function calculate(number1, operator, number2) {
    let result

    switch (operator) {
        case '+':
            result = number1 + number2
            break
        case '-':
            result = number1 - number2
            break
        case '*':
            result = number1 * number2
            break
        case '/':
            result = number1 / number2
            break
        default:
            console.log('não implementado')
            break
    }

    return result
}

console.log(calculate(4, '*', 9))
console.log(calculate(9, '/', 2))
console.log(calculate(60, '%', 20))
*/

// throw  lançar ou disparar

/*
function sayMyName(name = '') {
    if (name === '') {
        throw new Error("O nome é obrigatorio")
    }

    console.log(name)
}

// Try...catch    tentar e capturar
try {
    sayMyName('Victor')
} catch(e) {
    console.log(e)
}

console.log('após ao try/catch')
*/