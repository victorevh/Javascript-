/* ### Sistema de gastos familiar


Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
   * Receitas: []
   * Despesas: []

Agora, crie uma função que irá calcular o total e receitas e despesas e irá mostrar uma mensagem se a família está com o saldo positivo ou negativo, seguido do valor do saldo

*/

let family = {
    incomes: [500.40, 500.34, 1300.10, 900.00],
    expenses: [430.20, 1130.45, 1000.40, 1500.00]
}

// Função para somar os numeros dentro de cada array

function sum(array) {
    let total = 0
    
    for(let value of array) {
        total += value
    }
    
    return total
}

function calculateBalance() {
    const calculateIncomes = sum(family.incomes)
    const calculateExpenses = sum(family.expenses)

    const total = calculateIncomes - calculateExpenses

    const itsOk = total >= 0

    let balanceText = "Negativo"
    
    if(itsOk) {
        balanceText = "Positivo"
    }

    console.log(`Seu saldo é ${balanceText}: ${total.toFixed(2)} R$`)
}

calculateBalance()