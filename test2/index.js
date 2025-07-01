//Module FS (file system)


//MODALITA SINCRONA
/*
const {readFileSync, writeFileSync} = require('fs')

const prova = readFileSync('./cartella/prova.txt', 'utf8')
const ciao = readFileSync('./cartella/ciao.txt', 'utf8')


writeFileSync('./cartella/prova.txt', ' 1234567890', {flag: 'a'})

writeFileSync('./cartella/bella.txt', 'bella a tutti ragazzi')


console.log(prova)
console.log(ciao)

*/



//MODALITA ASINCRONA
const {readFile, writeFile} = require('fs')

readFile('./cartella/prova.txt', 'utf8', (error, result) =>{


    if(error){

        console.log(error)
        return
    }
    const prova = result
    //console.log(prova)

    readFile('./cartella/ciao.txt', 'utf8', (error, result) => {

        if(error){

            console.log(error)
            return
        }
        //console.log(result)
        writeFile('./cartella/bella.txt', 'ciaoissimo', {flag: 'a'}, (error, result) =>{


            if(error){

                console.log(error)
                return
            }
            console.log(result)
        })
    })
})