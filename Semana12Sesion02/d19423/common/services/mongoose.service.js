const mongoose = require('mongoose');

const connectWithRetry=()=>{
    console.log("Conectandome a MongoDB");
    mongoose.connect(process.env.MONGOURI).then(()=>{
        console.log("MongoDB Conectado")
    }).catch(error=>{
        console.log("Intentando de nuevo", error);
        setTimeout(connectWithRetry, 5000);
    })
}

connectWithRetry();

exports.mongoose = mongoose;