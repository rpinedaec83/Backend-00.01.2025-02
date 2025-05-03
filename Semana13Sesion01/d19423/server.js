const express = require('express');
const cookieSession = require('cookie-session');
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger_output.json');
const bodyParser = require('body-parser');
const multer = require('multer');



const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 8080;


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

const storage = multer.diskStorage({
    destination(req,res,cb){
        cb(null,'storage')
    },
    filename(req,file,cb){
        cb(null,file.originalname)
    }
});
const upload = multer({storage});


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

app.post('/upload', upload.single('image'), (req,res)=>{
    try {
        if(req.file){
            res.json(req.file);
        }
    } catch (error) {
        res.status(500).send({message:error});
    }
})

require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);

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
