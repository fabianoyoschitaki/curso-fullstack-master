
//--------------------------------------------------------
// if condition
//--------------------------------------------------------
valor = 10
if (valor === 10){ // checks type and value
    console.log("valor is equal to 10")
}

//--------------------------------------------------------
// let and const
//--------------------------------------------------------
let valorLet = 20 // let you can change another value
const valorConst = 10 // const you can't change the value

valorLet = 22 // run
// valorConst = 1 // does not run
console.log(valorConst, valorLet)

//--------------------------------------------------------
// Creating Object
//--------------------------------------------------------
const object = {
    keyString: 'ValorString',
    keyNumber: 1
}
console.log(object)
console.log(object.keyString)

//--------------------------------------------------------
// Creating variable type function - functions are first class citizens
//--------------------------------------------------------
const soma = function(a, b){
    return a + b;
}
const calculadora = function(op, a, b){
    return op(a,b)
}
console.log('calculadora:', calculadora(soma, 10, 20))

//--------------------------------------------------------
// Vector -> map
//--------------------------------------------------------
const vetorMap = [1, 2, 3, 4, 5]
const vetorMapDobrado = vetorMap.map(function(item){
    return item * 2
})
const vetorMapComObjetoDobrado = vetorMap.map(function(item){
    return { original : item, dobrado : item * 2}
})
console.log('Vetor: ', vetorMap)
console.log('Vetor Dobrado: ', vetorMapDobrado)
console.log('Vetor Map Dobrado: ', vetorMapComObjetoDobrado)

//--------------------------------------------------------
// Vector -> filter
//--------------------------------------------------------
const vetorFilter = [1,2,3,4,5]
const vetorFilterPar = vetorFilter.filter(function(item){
    return item % 2 === 0
})
console.log('Vetor Filter: ', vetorFilter)
console.log('Vetor Filter Par: ', vetorFilterPar)

//--------------------------------------------------------
// Vector -> map and filter
//--------------------------------------------------------
const vetorMapAndFilter = [1, 2, 3, 4, 5, 6]
const vetorMapAndFilterDobradoPar = vetorMapAndFilter.filter(function(item){
    return item % 2 ===0
}).map(function(item){
    return item * 2
})
console.log('Vetor Map and Filter:', vetorMapAndFilter)
console.log('Vetor Map and Filter Dobrado Par:', vetorMapAndFilterDobradoPar)

//--------------------------------------------------------
// Vector -> arrow function
//--------------------------------------------------------
const dobrar = item => item * 2
const somentePares = item => item % 2 === 0

const vetorParDobradoComArrowFunction = [1, 2, 3, 4, 5].filter(somentePares).map(dobrar)
console.log('Vetor Par Dobrado com Arrow:', vetorParDobradoComArrowFunction)

//--------------------------------------------------------
// Vector -> reduce
//--------------------------------------------------------
const somar = (acumulado, atual) => acumulado + atual
const vetorParDobradoReduce = [1, 2, 3, 4, 5, 6].filter(somentePares).map(dobrar).reduce(somar)
console.log('Vetor Par Dobrado Reduzido a soma:', vetorParDobradoReduce)

//--------------------------------------------------------
// Vector -> Filter, Map, High Order Function - functions which receive another function
//--------------------------------------------------------