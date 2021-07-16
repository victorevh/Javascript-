// Estrutura de repetição
// for

// break = parar a execução do looping
// continue = pula a execução do looping 


/*
for(let a = 0; a <= 10; a++) {
    console.log(a)
}

for(let i = 20; i > 0; i--) {
    if(i === 10) {
        break;
    }
    if(i === 15) {
        continue;
    }

    console.log(i)
}
*/

// while
/*
let i = 0;
while(i < 10) {
    console.log(i)

    i++;
}
*/

// While faz muito sentido quando não sabemos qual o momento da parada exemplo

let i = 5000000;
while(i > 12) {
    console.log(i)

    i /= 25
}