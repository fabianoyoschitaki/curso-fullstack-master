const fs = require('fs')

// callback hell
// fs.readFile('temporizadores.js', (err, data) => {
//     fs.writeFile('temporizadores-copy.js', data, (err) => {
//         if (err)
//             console.log('Error when copying file')
//         else
//             console.log('File copied successfully!')
//     })
// })

// how to solve callback hell?
// promise! async await: code keeps the same
const readFile = path => new Promise((resolve, reject) => {
    fs.readFile(path, (err, data) => {
        if (err){
            reject(err)
        } else {
            resolve(data)
        }
    })
})

const writeFile = (path, data) => new Promise((resolve, reject) => {
    fs.writeFile(path, data, (err) => {
        if (err)
            reject(err)
        else
            resolve(data)
    })
})

// Promise example 1
// readFile('temporizadores.js')
//     .then(data => writeFile('copia-promise.js', data).t)
//     .then(() => console.log('Arquivo copiado'))
//     .catch(err => console.log(err))

// async/await - sugar syntax
const copyFile = async() => {
    console.log('ola async/await')
    try {
        const data = await readFile('temporizadores.js')
        await writeFile('copy-async-await.js', data)
        // console.log(String(data))
        console.log('Arquivo lido e escrito')
    } catch(err){
        console.log('erro', err)
    }
}
copyFile().then(() => console.log('fim do async wait'))