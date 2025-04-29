const express = require('express');
const cookieSession = require('cookie-session');

const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(
    cookieSession({
        name:'auth-session',
        keys:[process.env.COOKIE_SECRET],
        httpOnly:true
    })
);

app.get('/',(req,res)=>{
    res.send({message:"Bienvenido a mi API"})
})

require('./app/routes/auth.routes')(app);

const db = require('./app/models');
db.mongoose.set('strictQuery',true);
db.mongoose.connect(process.env.mongoURI,{}).then(()=>{
    console.log("BD conectada");
    db.init();
}).catch((error)=>{
    console.error(error);
    process.exit();
})

app.listen(PORT, ()=>{
    console.log(`Escuchando en el puerto ${PORT}`);
})
