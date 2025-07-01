
//EVENTS EMITTER



const EventEmitter = require('events')

const emitter = new EventEmitter();

const persona = 'Francesco'
const eta = 18

emitter.on('saluto', (nome, anno) =>{

    console.log(`Ciao, ${nome}.\nHai ${eta} anni!`);
});

emitter.emit('saluto', persona, eta)