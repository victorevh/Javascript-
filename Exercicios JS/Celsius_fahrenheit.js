/* ### Celsius em fahrenheit

  Crie uma função que receba uma string em celsius ou fahrenheit e faça a transformação  euma unidade para a outra

  C = (F-32) * 5/9
 
  F = C * 9/5 + 32

*/

// transformDegree('50F')

function transformDegree(degree) {
    const celsiusExists = degree.toUpperCase().includes('C')
    const fahrenheitExists = degree.toUpperCase().includes('F')

    // Fluxo de erro
    if(!celsiusExists && !fahrenheitExists) {
        throw new Error('Grau não identificado')
    }

    // Fluxo ideal, F - > C
    let updatedDegree = Number (degree.toUpperCase().replace("F",""));
    let formula = (fahrenheit) => (fahrenheit - 32) * 5/9
    let degreeSign = ' Cº '

    // Fluxo Alternativo C - >
    if(celsiusExists) {
        updatedDegree = Number (degree.toUpperCase().replace("C",""));
        formula = (celsius) => celsius * 9/5 + 32
        degreeSign = ' Fº '
    }

    return formula(updatedDegree) + degreeSign
}

try {
    console.log(transformDegree('30 c'))
    console.log(transformDegree('50 F'))
    console.log(transformDegree('20 S'))
 //   transformDegree('50Z')
} catch (error) {
    console.log(error.message)
}
// criar expressão regular*