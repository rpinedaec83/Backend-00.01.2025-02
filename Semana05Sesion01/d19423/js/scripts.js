console.log("Inicio de la Aplicacion");

const Reserva = (function () {
  let Nombre, Pais;

  function configurar(){
    $("#txt_nombre").text( Nombre);
    $("#txt_pais").text( Pais);
  }

  function eventos(){
    $("#btnReservar").on("click", reservar)
  }
  function reservar(){
    console.log("Hizo Clic en Reservar")
}

  return {
    init: function (parametros) {
      console.log(parametros);
      Nombre = parametros.nombre;
      Pais = parametros.pais;
      configurar();
      eventos();
    },
  };
})();


//dni
//nombres
//apellidos
//direccion
//telefono
//pagar()
//registrarEquipaje()
//ElegirAsiento()
//cancelarReservacion()

class Persona{
    #logged = false;
    constructor(dni, nombres, apellidos, direccion, telefono){
        this.dni = dni;
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.direccion = direccion;
        this.telefono = telefono;
       
    }
    getLogged(){
        return this.#logged;
    }
    setLogged(log){
        this.#logged = log
    }
    
    login(){
        if(this.#logged){
            console.log(`El usuario ${this.nombres} ${this.apellidos} ya inicio sesion en el sistema`)
        }else{
            this.#logged = true;
            console.log(`El usuario ${this.nombres} ${this.apellidos} a ingresado al sistema`)
        }
        
    }

    logout(){
        console.log(`El usuario ${this.nombres} ${this.apellidos} a salido del sistema`)
        this.#logged =false;
    }
    
}

class Empleado extends Persona{
    #isModerator = true;
    constructor(dni, nombres, apellidos, direccion, telefono, codigoEmpleado){
        super(dni, nombres, apellidos, direccion, telefono);
        this.codigoEmpleado = codigoEmpleado;
    }
    login(){
        if(this.getLogged()){
            this.#isModerator = true;
            console.log(`El empleado ${this.nombres} ${this.apellidos} ya inicio sesion en el sistema`)
        }else{
            this.setLogger(true);
            console.log(`El empleado ${this.nombres} ${this.apellidos} a ingresado al sistema`)
        }
    }
}

class Cliente extends Persona{
    constructor(dni, nombres, apellidos, direccion, telefono, codigoCliente){
        super(dni, nombres, apellidos, direccion, telefono);
        this.codigoCliente = codigoCliente
    }
    pagar(medioPago){
        console.log(`El cliente ${this.nombres} ${this.apellidos} esta pagando con ${medioPago}`);
    }
    registrarEquipaje(){

    }
    elegirAsiento(){

    }
    cancelarReservacion(){

    }
}

class Aviones{
    constructor(matricula, modelo, nroAsientos, capacidadMinima, costoVuelo){
        this.matricula = matricula;
        this.modelo = modelo;
        this.nroAsientos = nroAsientos;
        this.capacidadMinima = capacidadMinima;
        this.costoVuelo = costoVuelo;

        this.arrPasajeros = [];
        this.habilitado = false;
        this.resevados = 0;
    }

    agregarPasajeros(pasajero){
        if(this.resevados >= this.capacidadMinima){
            this.habilitado =true;
        }else{
            this.habilitado = false;
        }
        this.arrPasajeros.push(pasajero);
        this.resevados++;
    }
}

class Reservas{
    constructor(origen, destino, fechaIda, fechaVuelta){
        this.origen = origen;
        this.destino = destino;
        this.fechaIda=fechaIda;
        this.fechaVuelta = fechaVuelta;

        this.avionIda = null;
        this.avionVuelta = null;
    }
    asignarAvionIda(avionIda){
        this.avionIda = avionIda; 
    }
    asignarAvionVuelta(avionVuelta){
        this.avionVuelta = avionVuelta;
    }
}

// let persona1 = new Persona('09876543', "Roberto", "Pineda", "Lince","916730940");//instancia de la clase
// let persona2 = new Persona("67676768", "David", "Lopez", "San Isidro", "9223332233");

let empleado1 = new Empleado('09876543', "Roberto", "Pineda", "Lince","916730940",'00002369')
let cliente1 = new Cliente("67676768", "David", "Lopez", "San Isidro", "9223332233",'CL89898989')
// persona1.login();
// persona2.login();

// persona1.login();
// persona1.logout();

// console.log(persona1.direccion)
// persona1.setLogger(true)
// console.log(persona1.getLogged());

empleado1.login()
cliente1.login()
cliente1.pagar("Visa")