const express = require('express');
const cors = require('cors');
require('dotenv').config();

const PORT = process.env.PORT || 8080;
const STRIPETOKEN = process.env.STRIPETOKEN;

const stripe = require('stripe')(STRIPETOKEN);

const app = express();

app.use(cors());
app.use(express.json())



app.get('/',(req,res)=>{
    res.send('Hola desde el back')
});

app.post('/api/create-checkout-session',async (req,res)=>{
    console.log(req.body)
    const {product} = req.body;
    console.log(product)
    const session = await stripe.checkout.sessions.create({
        payment_method_types:["card"],
        line_items:[
            {
                price_data:{
                    currency: "pen",
                    product_data:{
                        name: product.name
                    },
                    unit_amount: product.price * 100
                },
                quantity: product.quantity
            }
        ],
        mode: "payment",
        success_url: "http://localhost:3000/success",
        cancel_url: 'http://localhost:3000/cancel'
    });
    res.json({id:session.id});
})

app.listen(PORT,()=>{
    console.log(`Servidor iniciado en el puerto ${PORT}`)
})