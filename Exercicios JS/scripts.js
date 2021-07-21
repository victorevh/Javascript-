/* ### Transformar notas escolares

Crie um algoritmo que transforme as notas do sistema numérico para sistemas den otas em caracteres tipo A B C

* de 90 para cima - A
* entre 80 - 89 - B
* entre 70 - 79 - C
* entre 60 - 69 - D
* menor que 60 - F

*/ 


function getNotas(notas) {
    let a = notas >= 90 && notas <= 100
    let b = notas < 90 && notas >= 80
    let c = notas < 80 && notas >= 70
    let d = notas < 70 && notas >= 60
    let f = notas < 60 && notas >= 0
    
    let notaFinal
    
    if(a){
        notaFinal = "A"
    } else if(b){
        notaFinal = "B"
    } else if(c){
        notaFinal = "C"
    } else if(d){
        notaFinal = "D"
    } else if(f){
        notaFinal = "F"
    } else {
        notaFinal = "Nota Inválida"
    }
    
    return notaFinal
    
}

console.log(getNotas(110))
console.log(getNotas(100))
console.log(getNotas(90))
console.log(getNotas(80))
console.log(getNotas(70))
console.log(getNotas(60))
console.log(getNotas(50))
console.log(getNotas(-15))