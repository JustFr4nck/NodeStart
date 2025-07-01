
//MODULO http

const http = require('http')

const server = http.createServer((req, res) => {

    //res.write("Benvenuto sul nostro sito");
    //res.end();

    if(req.url === '/'){

        res.end("Benvenuto sul mio sito")
    }
    else if(req.url === '/francesco'){

        res.end("Pagina di Francesco")
    }
    else{

        res.end(`<h1>ERRORE: </h1>
            <p>url non raggiungibile </p>
            <a href="/">Home</a>`)
    }

})

server.listen(3000)