console.log("Inicio de la Aplicacion");
if (typeof Storage !== "undefined") {
  console.log("Si se puede usar el storage");
} else {
  console.log("No se peude usar el storage");
}

let arrPersonasEnMemoria = JSON.parse(localStorage.getItem("propietarios"))

arrPersonasEnMemoria.forEach(element => {
    console.log(element.nombres)
});


localStorage.setItem("nombre","Roberto")
swal.fire({
    title: "Ingresa tus datos",
    icon: "info",
    text: localStorage.getItem("nombre")
})
localStorage.removeItem("nombre")



class Persona{
    constructor(nombres, apellidos){
        this.nombres = nombres;
        this.apellidos = apellidos
    }
}


let arrPersonas = [];
let objPersona1 =new Persona("Roberto", "Pineda");
let objPersona2 =new Persona("David", "Lopez");
let objPersona3 =new Persona("Juan", "Perez");

arrPersonas.push(objPersona1);
arrPersonas.push(objPersona2);
arrPersonas.push(objPersona3);

console.log(arrPersonas)

localStorage.setItem("propietarios", JSON.stringify(arrPersonas))


console.log(JSON.stringify(objPersona1));

let strClima = `
{
    "ubicacion": "Lima",
    "temp":{
        "celcius": 25,
        "farengieftrter": 50
    }
}
`;

let objClima = JSON.parse(strClima);

console.log(objClima)

let objClima2 = {ubicacion: "Lima", temp: {celcius: 25, farengieftrter: 50}};

console.log(objClima2.temp.celcius)

sessionStorage.setItem("clima", JSON.stringify(objClima2))