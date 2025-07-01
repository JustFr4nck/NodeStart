
/*
const val = 10

if (val < 10){

    console.log("Il valore è minore di 10")

}
else if (val > 10){

    console.log("Il valore è maggiore di 10")

}
else{

    console.log("Il valore è uguale a 10")
}

//console.log("Prova: ", require)
*/


//esportazione MODULI

/*
const saluta = require('./utils')
const nomi = require('./nomi')

saluta(nomi.persona1)
saluta("Emma")
saluta(nomi.persona2)

*/


//MODULO BUILT-IN os

const os = require ('os')
// os è un modulo built-in 

//console.log(os.userInfo())
//console.log(os.uptime())
//console.log(os.version())
//console.log(os.arch())

/*
const prova = {

    nome: os.type(),
    release: os.release(),
    memoria: os.totalmem(),
    disponibile: os.freemem()

};

console.log(prova)

*/


/*
//MODULO path

const path = require('path')

//console.log(path.sep)
const percorsoFile = path.join('/cartella', 'sottocartella', 'prova.txt')
//console.log(percorsoFile)

const percorsoAssoluto = path.resolve(__dirname, 'cartella', 'sottocartella', 'prova.txt')

//const percorsoAssoluto = path.resolve(__dirname, percorsoFile)
//console.log(path.basename(percorsoAssoluto))

console.log(percorsoAssoluto)

*/