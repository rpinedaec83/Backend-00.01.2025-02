const express = require('express');
const path = require('path');
const app = express();
const server = require('http').Server(app);

const io = require('socket.io')(server);
const bodyParser = require('body-parser');
const session = require('express-session');

const passport = require('passport');
const cookieSession = require('cookie-session');

require('dotenv').config();

const PORT = process.env.PORT || 3000
const SECRET = process.env.SECRET;

const CON = require('./database/db');


app.use(
    cookieSession({
        name: 'google-auth-session',
        keys:['key1','key2']
    })
);

require('./passport');

app.use(express.static(path.join(__dirname,"public")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(session({secret:SECRET}));

app.get('/',(req,res)=>{
    res.status(200).send("Bienvenido a mi server");
})

app.get('/google',passport.authenticate("google", {
    scope:["email"]
}))


server.listen(PORT, ()=>{
    console.log("Inicio el servidor en el puerto "+PORT)
})