const express = require('express');
const path = require('path');
const app = express();
const server = require('http').Server(app);

const io = require('socket.io')(server);
const bodyParser = require('body-parser');
const session = require('express-session');

const passport = require('passport');
const cookieSession = require('cookie-session');
const bcrypt = require('bcrypt');

require('dotenv').config();

const PORT = process.env.PORT || 3000
const SECRET = process.env.SECRET;

const CON = require('./database/db');


app.use(
    cookieSession({
        name: 'google-auth-session',
        keys: ['key1', 'key2']
    })
);

require('./passport');

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: SECRET }));

app.get('/', (req, res) => {
    authenticate(req, res);
})

app.get('/google', passport.authenticate("google", {
    scope: ["email"]
}))

let username;
let email = "";
function authenticate(req, res) {
    if (!req.session.user) {
        res.sendFile(__dirname + '/public/login.html');
    }
    else {
        username = req.session.user;
        res.sendFile(__dirname + '/public/chat.html');
    }
}

app.get('/google/callback', passport.authenticate("google", {
    failureRedirect: '/failed'
}), (req, res) => {
    email = req.user.email;
    res.redirect('/success');
})

app.get('/success', (req, res) => {
    let pass = bcrypt.hashSync('oauth', 8)
    let sql = `REPLACE INTO login (username, password)
    values('${email}','${pass}')`;
    CON.query(sql, (err, result) => {
        if (err) throw err;
    });
    req.session.user = email;
    username = email;
    res.redirect('/chat_start');
});

app.get('/chat_start', (req, res) => {
    authenticate(req, res);
});

app.get('/login', (req, res) => {
    authenticate(req, res);
})

app.post('/login', (req, res) => {
    login(req, res);
})

function login(req, res) {
    let post = req.body;
    username = post.user;
    let password = post.password;
    let sql = `SELECT * FROM login WHERE username = '${username}'`;
    CON.query(sql, (err, result, fields) => {
        if (result.length === 1) {
            let jsonString = JSON.stringify(result);
            let jsonData = JSON.parse(jsonString);
            if (bcrypt.compareSync(password, jsonData[0].password)) {
                req.session.user = post.user;
                username = post.user;
                res.redirect('/chat_start');
            }
            else {
                res.redirect('/login');
            }
        }
        else {
            res.redirect('/login')
        }
    })
}

app.get('/logout', (req, res) => {
    delete req.session.user;
    req.session = null;
    res.redirect('/login');
})
let connections = [];
function chat_start() {
    io.sockets.on('connection', (socket) => {
        connections.push(socket);
        socket.on('disconnect', (data) => {
            connections.splice(connections.indexOf(data), 1);
        });
        socket.on('initial-messages', (data) => {
            let sql = 'SELECT * FROM message';
            CON.query(sql, (err, result, fields) => {
                console.log()
                let jsonMessages = JSON.stringify(result);
                io.sockets.emit('initial-messages', { msg: jsonMessages });
            })
        });
        socket.on('username', (data) => {
            socket.emit('username', { username: username });
        });
        socket.on('send-message', (data, user) => {
            let sql = `INSERT INTO message (message, user) VALUES('${data}','${user}')`
            CON.query(sql, (err, result) => {
                if (err) throw err;
            })
            io.sockets.emit('new-message', { msg: data, username: user });
        })
        socket.on('typing', (data, user) => {
            io.sockets.emit('typing', { msg: data, username: user })
        })
    });



}

chat_start();

server.listen(PORT, () => {
    console.log("Inicio el servidor en el puerto " + PORT)
})