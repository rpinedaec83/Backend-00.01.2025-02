const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 8080;
app.use(express.json());

app.set("view engine","ejs");
app.set("views",__dirname+"/views")


const UserRouter = require('./users/route.config');
UserRouter.routesConfig(app);

app.get('/',(req,res)=>{
    res.render('index',{ name: 'Roberto' })
    //res.send({message:"Hola desde mi API"})
})

app.listen(PORT, ()=>{
    console.log(`Aplicacion iniciada en el puerto: ${PORT}`);
})