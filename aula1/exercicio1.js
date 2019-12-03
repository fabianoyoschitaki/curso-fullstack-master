console.log('Os exercícios aqui propostos visam reforçar a prática da linguagem javascript de acordo com o que foi visto na primeira aula extra.')

console.log('\n1) Dado um vetor de números, como poderia ser realizada a soma de todos os valores utilizando reduce.')
const vetor = [1, 2, 3, 4, 5, 5]
const soma = (acumulado, atual) => acumulado + atual
console.log(vetor.reduce(soma))

console.log('\n2) Dado um vetor de números, como poderia ser realizada a soma de todos os valores pares utilizando reduce e filter.')
const isEven = item => item % 2 === 0
console.log(vetor.filter(isEven).reduce(soma))

console.log('\n3) Dado um vetor de números, como poderia ser realizada a soma de todos os valores ímpares utilizando reduce e filter.')
const isOdd = item => item % 2 === 1
console.log(vetor.filter(isOdd).reduce(soma))

console.log('\n4) Dado um vetor de valores, retorne um objeto com quantas vezes cada valor está presente no vetor (dica: utilize reduce)')
const countOccurences = function(acc, curr){
    if (typeof acc[curr] == 'undefined'){
        acc[curr] = 1
    } else {
        acc[curr] += 1
    }
    return acc
}
const vetorRepeatedOccurence = vetor.reduce(countOccurences, {})
console.log(vetorRepeatedOccurence)

console.log('\n5) Dado um vetor de valores, retorne um vetor com somente os valores únicos do vetor (aqueles que ocorrem apenas 1 vez dentro do vetor) (Dica 1: utilize reduce, filter e keys, Dica 2: escreva console.log(objeto.keys()) e veja como ele poderá te ajudar neste exercício)')
const objectRepeatedOccurence = vetor.reduce(countOccurences, {})
const vetorValoresUnicos = Object.keys(objectRepeatedOccurence)
    .filter(item => objectRepeatedOccurence[item] == 1)
    .map(Number)
console.log(vetorValoresUnicos)

console.log('\n6) Dado um vetor com números, retorne somente os números pares;')
console.log(vetor.filter(item => item % 2 === 0))

console.log('\n7) Dado um vetor com números, retorne somente os números ímpares;')
console.log(vetor.filter(item => item % 2 === 1))

console.log('\n8) Uma função é chamada da seguinte forma:')
console.log('calculadora(10, \'+\', 20)')
console.log('crie o corpo da função de forma que ela realize as 4 operações aritméticas')
const calculadora = (num1, op, num2) => op(num1, num2)

console.log('\n9) Modifique a calculadora do exercício anterior para que ela receba 2 números e uma função, e realize o cálculo. Exemplo:')
console.log('const soma = (num1, num2) => num1+num2')
console.log('const calculadoraFn = (....) => ….')
console.log('calculadoraFn(10, soma, 20)')
const adicao = (num1, num2) => num1 + num2
const subtracao = (num1, num2) => num1 - num2
const multiplicacao = (num1, num2) => num1 * num2
const divisao = (num1, num2) => num1 / num2;
console.log(calculadora(10, adicao, 5))
console.log(calculadora(10, subtracao, 5))
console.log(calculadora(10, multiplicacao, 5))
console.log(calculadora(10, divisao, 5))