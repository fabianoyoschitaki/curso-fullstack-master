console.log('Comes first')
setTimeout(() => {
    console.log('Scheduled! Comes third')
}, 2000) // even if it's 0! it will be scheduled after finishing
console.log('Comes second')
// process very slow (10 seconds). Comes third will wait 12 seconds
// never do something slow in the main thread!
// to read a file, read asynchronously
// when to read synchronously?
// when a file needs to be loaded in the start, for instance.
// remember, never do something here!

let count = 0
let interval = setInterval(() => {
    console.log('For each 1 second...')
    count++
    if (count > 5){
        clearInterval(interval)
    }
}, 1000)

let count2 = 0
let interval2 = setInterval(() => {
    console.log('For each 0.5 second...')
    count2++
    if (count2 > 15){
        clearInterval(interval2)
    }
}, 500)
console.log('Comes after second')