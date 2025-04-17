console.log("Inicio del Programa");
require('dotenv').config();
const { MongoClient, ObjectId } = require('mongodb');
const URI = process.env.MONGOURI;
const client = new MongoClient(URI);
async function run() {
    try {
        await client.connect();
        console.log("Conexion exitosa");
        const db = client.db('sample_mflix');
        const collection = db.collection('movies');
        const firstMovie = await collection.findOne();
        return firstMovie;
    } catch (error) {
        console.log(error)
    }
    finally {
        client.close();
    }
}

// run().then(data=>{
//     console.log(data)

// }).catch(error=>{
//     console.log(error)
// })

async function crud(base, collection, accion, filtro = null) {
    await client.connect();
    const db = client.db(base);
    const coleccion = db.collection(collection);
    let respuesta = null;
    switch (accion) {
        case 'leerUno':
            if (filtro !== null) {
                respuesta = await coleccion.findOne(filtro);
            }
            else {
                respuesta = coleccion.findOne();
            }
            break;
        case 'leerVarios':
            if (filtro !== null) {
                respuesta = await coleccion.find(filtro).toArray();
            }
            else {
                respuesta = coleccion.findOne().toArray();
            }
            break;
        default:
            break;
    }
    return respuesta;
}

let filtro = { year: 2001 }

// crud('sample_mflix', 'movies', 'leerUno', filtro).then(data => {
//     console.log(data)
// })


crud('sample_mflix', 'movies', 'leerVarios', filtro).then(data => {
    console.log(data)
})