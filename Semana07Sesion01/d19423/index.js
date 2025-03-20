console.log("Inicio de la aplicacion")
let http = require('http');
let moment = require('moment')
http.createServer((req,res)=>{
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hola desde mi primera aplicacion en nodejs del curso de Pachaqtec! '+ moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
}).listen(3001)