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

async function crud(base, collection, accion, filtro = null, data = null) {
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
        case 'agregarUno':
            if (data !== null) {
                respuesta = await coleccion.insertOne(data);
            }
            else {
                respuesta = "No se ha proporcionado un documento a insetar"
                throw new Error(respuesta);

            }
            break;
        case 'agregarVarios':
            if (data !== null) {
                respuesta = await coleccion.insertMany(data)
            }
            else {
                respuesta = "No se ha proporcionado un documento a insetar"
            }
            break;
        case 'actualizarUno':
            if (data !== null && filtro !== null) {
                respuesta = await coleccion.updateOne(filtro, { $set: data });
            }
            else {
                respuesta = "No se ha proporcionado un documento a actualizar"
                throw new Error(respuesta);

            }
            break;
        case 'actualizarVarios':
            if (data !== null && filtro !== null) {
                respuesta = await coleccion.updateMany(filtro, { $set: data })
            }
            else {
                respuesta = "No se ha proporcionado un documento a actualizar"
            }
            break;
        case 'borrarUno':
            if (filtro !== null) {
                respuesta = await coleccion.deleteOne(filtro);
            }
            else {
                respuesta = "No se ha proporcionado un documento a borrar"
                throw new Error(respuesta);

            }
            break;
        case 'borrarVarios':
            if (filtro !== null) {
                respuesta = await coleccion.deleteMany(filtro)
            }
            else {
                respuesta = "No se ha proporcionado un documento a borrar"
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


// crud('sample_mflix', 'movies', 'leerVarios', filtro).then(data => {
//     console.log(data)
// })

let data = {
    plot: 'An American master chemist plans to score big on a once in a lifetime drug deal. All does not go as planned and he is soon entangled in a web of deceit.',
    genres: ['Action', 'Comedy', 'Crime'],
    runtime: 93,
    metacritic: 23,
    rated: 'R',
    cast: [
        'Samuel L. Jackson',
        'Nigel Whitmey',
        'Robert Jezek',
        'Emily Mortimer'
    ],
    poster: 'https://m.media-amazon.com/images/M/MV5BMTg5NzU4NjEwNV5BMl5BanBnXkFtZTYwNTk4NzM3._V1_SY1000_SX677_AL_.jpg',
    title: 'Formula 51',
    fullplot: "Elmo McElroy is a streetwise American master chemist who heads to England to sell his special new formula - a powerful, blue concoction guaranteed to take you to 'the 51st state.' McElroy's new product delivers a feeling 51 times more powerful than any thrill, any pleasure, any high in history. But his plans for a quick, profitable score go comically awry when he gets stuck in Liverpool with an unlikely escort and his ex-girlfriend and becomes entangled in a bizarre web of double-dealing and double-crosses.",
    languages: ['English'],
    released: '2002-10-18T00:00:00.000Z',
    directors: ['Ronny Yu'],
    writers: ['Stel Pavlou'],
    awards: { wins: 0, nominations: 1, text: '1 nomination.' },
    lastupdated: '2015-09-17 04:46:00.190000000',
    year: 2001,
    imdb: { rating: 6.3, votes: 41498, id: 227984 },
    countries: ['UK', 'Canada'],
    type: 'movie',
    tomatoes: {
        website: 'http://www.sonypictures.com/movies/formula51',
        viewer: [Object],
        dvd: '2003-02-04T00:00:00.000Z',
        critic: [Object],
        boxOffice: '$5.1M',
        consensus: "Filled with profanities, Formula 51 is a stylized and incoherent mess that doesn't add up to much.",
        rotten: 76,
        production: 'Screen Gems',
        lastUpdated: '2015-08-19T18:03:20.000Z',
        fresh: 26
    },
    num_mflix_comments: 0
}
let data2 = [
    {

        plot: 'On the Edge is about suicidal patients discovering their true selves while going through therapy in a treatment center.',
        genres: ['Drama'],
        runtime: 85,
        rated: 'R',
        cast: [
            'Martin Carney',
            'Paul Hickey',
            "Camille O'Sullivan",
            'Cillian Murphy'
        ],
        num_mflix_comments: 0,
        poster: 'https://m.media-amazon.com/images/M/MV5BMTAyMTUxNTE4NjZeQTJeQWpwZ15BbWU3MDMwODg3MTE@._V1_SY1000_SX677_AL_.jpg',
        title: 'On the Edge',
        fullplot: "After the death of his alcoholic father, Jonathan Breech steals his father's ashes from his brother's house. He drives a stolen car off a cliff in order to commit suicide but he survives. After this, he accepts an alternative sentence of three months in therapy in a psychiatric hospital. There, he joins a suicide group under the supervision of Dr. Figure. He befriends a disturbed Rachel Row (who saw her mother dying in an accident) and Toby (who accidentally killed his brother in a car crash). During the treatment, the sarcastic Jonathan changes his behavior and sees the importance of being alive.",
        languages: ['English'],
        released: '2001-09-21T00:00:00.000Z',
        directors: ['John Carney'],
        writers: ['Daniel James', 'John Carney'],
        awards: { wins: 1, nominations: 1, text: '1 win & 1 nomination.' },
        lastupdated: '2015-08-07 01:02:37.523000000',
        year: 2001,
        imdb: { rating: 7.1, votes: 2879, id: 221559 },
        countries: ['Ireland'],
        type: 'movie',
        tomatoes: {
            website: 'http://www.ontheedgemovie.com',

            dvd: '2002-05-21T00:00:00.000Z',

            lastUpdated: '2015-07-22T18:17:03.000Z',
            rotten: 3,
            production: 'Universal Pictures',
            fresh: 5
        }
    },
    {

        plot: 'Ayurveda is science of life and art of healing; where body, mind and spirit are given equal importance. This voyage of thousands of miles across India and abroad takes you on a unique ...',
        genres: ['Documentary'],
        runtime: 102,
        metacritic: 45,
        title: 'Ayurveda: Art of Being',
        num_mflix_comments: 0,
        poster: 'https://m.media-amazon.com/images/M/MV5BMTMyOTEwMjU2NV5BMl5BanBnXkFtZTYwMTkxODc5._V1_SY1000_SX677_AL_.jpg',
        countries: ['India', 'Switzerland', 'Germany'],
        fullplot: `Ayurveda is science of life and art of healing; where body, mind and spirit are given equal importance. This voyage of thousands of miles across India and abroad takes you on a unique poetic journey, where we encounter remarkable men of medicine or simply a villager who lives in harmony with nature. "Hope is nature's way of enabling us to survive so that we can discover nature itself."`,
        languages: ['English', 'Hindi'],
        released: '2001-09-20T00:00:00.000Z',
        directors: ['Pan Nalin'],
        writers: ['Pan Nalin'],
        awards: { wins: 2, nominations: 0, text: '2 wins.' },
        lastupdated: '2015-08-31 00:54:13.607000000',
        year: 2001,
        imdb: { rating: 7.5, votes: 318, id: 221809 },
        type: 'movie',
        tomatoes: {
            website: 'http://www.kino.com/ayurveda',

            dvd: '2004-07-06T00:00:00.000Z',

            lastUpdated: '2015-09-03T18:52:53.000Z',
            rotten: 6,
            production: 'Kino',
            fresh: 8
        }
    },
    {
        plot: "A young Hungarian girl struggles to find her place in the world when she's reunited with her parents in the USA years after she was left behind during their flight from the communist country in the 1950s.",
        genres: ['Drama'],
        runtime: 106,
        metacritic: 51,
        rated: 'PG-13',
        cast: [
            'Scarlett Johansson',
            'Nastassja Kinski',
            'Raffaella Bènsègi',
            'Tony Goldwyn'
        ],
        poster: 'https://m.media-amazon.com/images/M/MV5BYmI3MTkwOWQtMmY2OC00ZDAzLTlkNDAtZTJjYWJkNWI0Njc3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY1000_SX677_AL_.jpg',
        title: 'An American Rhapsody',
        fullplot: 'In 1950, a Hungarian couple, Peter and Margit, are forced to flee from the oppressive communist country for the USA with their eldest daughter Maria, but are forced to leave behind their infant daughter Suzanne who is raised by kindly foster couple. 6 years later, Peter and Margit arrange for the American Red Cross to bring Suzanne to their new home in Los Angeles where the perplexed youth is forced to accept her sudden change in home and country which leads to a troubled growing up. At age 15, the rebelious and unsure-of-herself Suzanne tries to come to terms with her roots and decides to travel back to Budapest, Hungary to find her true idenity.',
        languages: ['English', 'Hungarian'],
        released: '2002-02-28T00:00:00.000Z',
        directors: ['èva Gèrdos'],
        writers: ['èva Gèrdos'],
        awards: { wins: 5, nominations: 5, text: '5 wins & 5 nominations.' },
        lastupdated: '2015-09-13 00:05:08.017000000',
        year: 2001,
        imdb: { rating: 6.9, votes: 3171, id: 221799 },
        countries: ['USA', 'Hungary'],
        type: 'movie',
        tomatoes: {

            dvd: '2002-11-19T00:00:00.000Z',
            production: 'LionsGate Entertainment',
            lastUpdated: '2015-09-10T18:36:32.000Z'
        },
        num_mflix_comments: 0
    },
    {

        fullplot: "While pursuing a suspect one night, Chicago Police officer Sharon Pogue nearly becomes the victim of a fatal ambush. A mysterious stranger, Catch intervenes, disarms the assassin and saves Sharon's life. Is it a stroke of luck? A twist of fate? Or just a concerned citizen who happened to pass by at the right time and wasn't afraid to get involved? Maybe, But Sharon and Catch have met once before. As the two fall in love, they discover the truth about each other and are forced to deal with the secrets from their past.",
        imdb: { rating: 5.6, votes: 18985, id: 225071 },
        year: 2001,
        plot: 'A mysterious man is drawn to a feisty female police officer and a unusual relationship ensues, as not everything is as it seems.',
        genres: ['Drama', 'Romance'],
        rated: 'R',
        metacritic: 39,
        title: 'Angel Eyes',
        lastupdated: '2015-08-14 00:52:38.753000000',
        languages: ['English'],
        writers: ['Gerald Di Pego'],
        type: 'movie',
        tomatoes: {

            dvd: '2004-10-26T00:00:00.000Z',
            production: 'Bandai',
            lastUpdated: '2015-08-18T19:11:10.000Z'
        },
        poster: 'https://m.media-amazon.com/images/M/MV5BNDQwNzI2OTY2Ml5BMl5BanBnXkFtZTYwOTI3ODc5._V1_SY1000_SX677_AL_.jpg',
        num_mflix_comments: 1,
        released: '2001-05-18T00:00:00.000Z',
        awards: { wins: 1, nominations: 4, text: '1 win & 4 nominations.' },
        countries: ['USA'],
        cast: [
            'Jennifer Lopez',
            'Jim Caviezel',
            'Jeremy Sisto',
            'Terrence Howard'
        ],
        directors: ['Luis Mandoki'],
        runtime: 102
    },
    {

        fullplot: `Inspired by "The Canterbury Tales," as well as the story of Ulrich von Lichtenstein, this is the story of William, a young squire with a gift for jousting. After his master dies suddenly, the squire hits the road with his cohorts Roland and Wat. On the journey, they stumble across an unknown writer, Chaucer. William, lacking a proper pedigree, convinces Chaucer to forge genealogy documents that will pass him off as a knight. With his newly-minted history in hand, the young man sets out to prove himself a worthy knight at the country's jousting competition, and finds romance along the way.`,
        imdb: { rating: 6.9, votes: 127496, id: 183790 },
        year: 2001,
        plot: 'After his master dies, a peasant squire, fueled by his desire for food and glory, creates a new identity for himself as a knight.',
        genres: ['Action', 'Adventure', 'Romance'],
        rated: 'PG-13',
        metacritic: 54,
        title: "A Knight's Tale",
        lastupdated: '2015-08-30 21:11:36.693000000',
        languages: ['English'],
        writers: ['Brian Helgeland'],
        type: 'movie',
        tomatoes: {
            website: 'http://www.aknightstale.com',

            dvd: '2001-09-25T00:00:00.000Z',

            boxOffice: '$55.0M',
            consensus: "Once you get past the anachronism, A Knight's Tale becomes a predictable, if spirited, Rocky on horseback.",
            rotten: 61,
            production: 'Columbia Pictures',
            lastUpdated: '2015-09-12T17:12:07.000Z',
            fresh: 85
        },
        poster: 'https://m.media-amazon.com/images/M/MV5BMTE5OTE4OTE2Nl5BMl5BanBnXkFtZTYwMDkzMTQ3._V1_SY1000_SX677_AL_.jpg',
        num_mflix_comments: 2,
        released: '2001-05-11T00:00:00.000Z',
        awards: { wins: 4, nominations: 10, text: '4 wins & 10 nominations.' },
        countries: ['USA'],
        cast: [
            'Heath Ledger',
            'Rufus Sewell',
            'Shannyn Sossamon',
            'Paul Bettany'
        ],
        directors: ['Brian Helgeland'],
        runtime: 132
    }
]
crud('sample_mflix', 'movies', 'agregarVarios', filtro, data2).then(data => {
    console.log(data)
}).catch(error => {
    console.log(error)
})