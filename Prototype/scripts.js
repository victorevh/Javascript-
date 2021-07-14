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
*/
if(highTemperature){
    console.log('Febre Alta')
} else if(mediumTemperature){
    console.log('Febre Moderada')
} else {
    console.log('Saudável')
}
