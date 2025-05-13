const express = require('express');
const path = require('path');
const app = express();
const server = require('http').Server(app);

const io = require('socket.io')(server);
const bodyParser = require('body-parser');
const session = require('express-session');

const passport = require('passport');
const cookieSession = require('cookie-session');


app.use(
    cookieSession({
        name: 'google-auth-session',
        keys:['key1','key2']
    })
);

app.use(express.static(path.join(__dirname,"public")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(session({secret:'SECRETO'}));

app.get('/',(req,res)=>{
    res.status(200).send("Bienvenido a mi server");
})



server.listen(7979, ()=>{
    console.log("Inicio el servidor")
})