const mongoose = require('mongoose');
const options = {
    autoIndex : false,
    useNewUrlParser: true,
    useUnifiedTopology: true
};

const connectWithRetry=()=>{
    console.log("Conectandome a MongoDB");
    mongoose.connect(process.env.MONGOURI,options).then(()=>{
        console.log("MongoDB Conectado")
    }).catch(error=>{
        console.log("Intentando de nuevo", error);
        setTimeout(connectWithRetry, 5000);
    })
}

connectWithRetry();

exports.mongoose = mongoose;