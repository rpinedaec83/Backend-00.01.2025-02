const cors = require('cors');
const express = require('express'); 
require('dotenv').config();

const Culqi = require('culqi-node');



const culqi = new Culqi({
    publicKey: process.env.CULQI_PUBLIC_KEY,
    privateKey: process.env.CULQI_SECRET_KEY,
    pciCompliant: true
});

const app = express();
const PORT = process.env.PORT || 3000;  


app.use(cors({origin: '*'}));
app.use(express.json());    

app.use(express.urlencoded({extended: true})); // Para recibir datos en el body de la peticion

app.get('/', (req, res) => {
    res.send({msg: 'Hola desde el servidor'});
});


app.post('/api/process/pay', async (req, res) => {
    const product = req.body;
    console.log(product)
    await culqi.tokens.createToken({
        card_number: product.creditcard,
        cvv: product.cvv,
        expiration_month: product.month,
        expiration_year: product.year,
        email: product.email
    }).then((data)=>{
        console.log(data);
        try {
            culqi.charges.createCharge({
                amount: product.amount,
                currency_code: product.currency_code,
                email: product.email,
                installments: product.installments,
                description: product.description,
                source_id: data.id
            }).then((data)=>{
                console.log(data);
                res.send({msg: 'Pago realizado con exito', data});
            }).catch((error)=>{
                res.status(500).send({msg: 'Error al procesar el pago', error});
            })
        } catch (error) {
            res.status(500).send({msg: 'Error al procesar el pago', error});
        }
    }).catch((error)=>{ 
        console.log(error)
        res.status(500).send({msg: 'Error al procesar el pago', error});
    });
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});