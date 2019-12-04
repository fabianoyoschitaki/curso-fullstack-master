const express = require('express')
const app = express()

app.set('view engine', 'ejs')
// here we say: if you don't find anything, post, get etc
// take this path as default
app.use(express.static('public'))

// callback function
app.get('/', (request, response) => {
    console.log('Function being called at: ', new Date())
    // response.send('<h1>Hello Fullstack Lab</h1>')
    response.render('home', {
        date: new Date()
    })
})

app.get('/vaga', (request, response) => {
    response.render('vaga')
})

// ports under 1000 are already used by OS.
// I/O instruction, heavy. JS is essentially monothread.
app.listen(3000, (err) => {
    if (err)
        console.log('It was not possible to start Jobify server.')
    else
        console.log('Jobify was created successfully!')
})