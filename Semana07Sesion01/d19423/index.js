console.log("Inicio de la aplicacion")
let http = require('http');
http.createServer((req,res)=>{
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hola desde mi primera aplicacion en nodejs del curso de Pachaqtec!');
}).listen(3001)