const fs = require('fs')

console.log(1);

// 1. Approach: this does not block main thread of execution. Hadouken code
/** 
fs.readFile('1.txt', (error, content) => {
    console.log(4)
    fs.readFile('2.txt', (error2, contents2) => {
        fs.readFile('3.txt', (error3, contents3) => {
            console.log(error, String(content))
            console.log(error2, String(contents2))
            console.log(error3, String(contents3))
        })
    })
})
 */

// 2. Approach: promises. With promises, our code starts to grow down
/**
const readFilePromise = fileToRead => new Promise((resolve, reject) => {
    fs.readFile(fileToRead, (err, contents) => {
        if (err){
            reject(err)
        } else {
            resolve(contents)
        }
    })
})
readFilePromise('1.txt')
    .then(contents => {
        console.log(null, String(contents))
        return readFilePromise('2.txt')
    })
    .then(contents => {
        console.log(null, String(contents))
        return readFilePromise('3.txt')
    })
    .then(contents => {
        console.log(null, String(contents))
    })
 */

 // 3. Approach: promises with async await. Same promise as Approach 2. Syntax sugar for promise!
 const readFilePromise = fileToRead => new Promise((resolve, reject) => {
    fs.readFile(fileToRead, (err, contents) => {
        if (err){
            reject(err)
        } else {
            resolve(contents)
        }
    })
})

// an async function is a promise. what can we do? 
// this looks like synchronous, but it's not! it's a proxy over callbacks, 
// easy code to maintain.
// in case of errors, you can catch the error. easy to deal with errors.
const init = async() => {
    try {
        const contents = await readFilePromise('1.txt')
        const contents2 = await readFilePromise('2.txt')
        const contents3 = await readFilePromise('3.txt')
        const contents4 = await readFilePromise('nonexistingfile.txt')
        console.log(String(contents))
        console.log(String(contents2))
        console.log(String(contents3))
    } catch (err) {
        console.log("Erro: ", err)
    }
}
// init is a promise. you can do init().then(contents => console.log(contents))
init() 

console.log(2);
console.log(3);