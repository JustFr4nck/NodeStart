const {writeFileSync, readFileSync, createReadStream} = require('fs')



/*
for(let i = 0; i < 10000; i++){

    writeFileSync('./filegrande.txt', `Ciao riga n ${i}\n`, {flag: 'a'})
}

*/


//const filegrande = readFileSync('./filegrande.txt');

//console.log(filegrande)

const stream = createReadStream('./filegrande.txt');

stream.on('data', (result) => {


    console.log(result)
})