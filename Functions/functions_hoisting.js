// function hoisting
// quando se executa uma função antes de declarar a mesma o JS faz o hoisting, eleva a função para que ela seja executada
sayMyName();
 
function sayMyName() {
    console.log('Victor')
}

// caso você defina uma função numa maneira de expressão ela não sofre elevação.
// a função só sofre elevação caso ela seja do tipo stateman ou declaration
