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
    constructor(dni, nombres, apellidos, direccion, telefono){
        this.dni = dni;
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.direccion = direccion;
        this.telefono = telefono;
        this.logged = false;
    }

    login(){
        if(this.logged){
            console.log(`El usuario ${this.nombres} ${this.apellidos} ya inicio sesion en el sistema`)
        }else{
            this.logged = true;
            console.log(`El usuario ${this.nombres} ${this.apellidos} a ingresado al sistema`)
        }
        
    }

    logout(){
        console.log(`El usuario ${this.nombres} ${this.apellidos} a salido del sistema`)
        this.logged =false;
    }
    
}

let persona1 = new Persona('09876543', "Roberto", "Pineda", "Lince","916730940");//instancia de la clase
let persona2 = new Persona("67676768", "David", "Lopez", "San Isidro", "9223332233");


persona1.login();
persona2.login();

persona1.login();
