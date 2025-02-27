console.log("Inicio de la aplicacion");

let objPersona = {
    nombre: "Roberto",
    apellido: "Pineda",
    edad:41,
    esCasado: false,
    hobbies:[
        "Gunpla", "AeroModelismo", "Musica"
    ],
    comer(plato){
        console.log("Estoy empezando a comer un "+ plato);

        console.log("Ya termine de comer el "+ plato);
    },
    trabajar(horario){
        console.log(`${this.nombre} empezo a trabajar a las ${horario.entrada}`)

        console.log(`${this.nombre} termino de trabajar a las ${horario.salida}`)
    }
}

let objPersona2 = {
    nombre: "Juan",
    apellido: "Perez",
    edad:41,
    esCasado: false,
    hobbies:[
        "Gunpla", "AeroModelismo", "Musica"
    ],
    comer(plato){
        console.log("Estoy empezando a comer un "+ plato);

        console.log("Ya termine de comer el "+ plato);
    },
    trabajar(horario){
        console.log(`${this.nombre} empezo a trabajar a las ${horario.entrada}`)

        console.log(`${this.nombre} termino de trabajar a las ${horario.salida}`)
    }
}

console.log(objPersona.nombre)

objPersona.hobbies.forEach(element=>{console.log(element)})


objPersona.nombre = "David";
objPersona.apellido = "Lopez";

console.log(objPersona)

objPersona.comer("Chaufa de Carne");

let objHorario ={
    entrada: "09:00",
    salida: "18:00"
}

objPersona.trabajar(objHorario);

for (let index = 0; index < 80; index++) {
    objPersona.comer("Chaufa de Carne");
}