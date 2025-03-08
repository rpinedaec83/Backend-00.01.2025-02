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
  async function reservar(e){
    e.preventDefault();
    $("#divReserva").hide();
    console.log("Hizo Clic en Reservar")

    const {value: formValues}= await Swal.fire({
        title: "Ingresa tus datos",
        icon: "info",
        showCloseButton:true,
        showCancelButton:true,
        confirmButtonText: "Guardar",
        cancelButtonText: "Cancelar",
        html: `<!-- Text input-->
<div class="form-group">
<div >
<input id="origen" name="origen" type="text" placeholder="Escribe el origen del vuelo" class="form-control input-md">
<span class="help-block">Escribe el origen del vuelo</span>  
</div>
</div>

<!-- Text input-->
<div class="form-group">
<div >
<input id="destino" name="destino" type="text" placeholder="Escribe el destino de tu vuelo " class="form-control input-md">
<span class="help-block">Escribe el destino de tu vuelo </span>  
</div>
</div>

<!-- Text input-->
<div class="form-group">
<div >
<input id="fechaIda" name="fechaIda" type="text" placeholder="Escribe la Fecha de Ida" class="form-control input-md">
<span class="help-block">Escribe la Fecha de Ida</span>  
</div>
</div>

<!-- Text input-->
<div class="form-group">
<div >
<input id="fechaVuelta" name="fechaVuelta" type="text" placeholder="Escribe la fecha de retorno" class="form-control input-md">
<span class="help-block">Escribe la fecha de retorno</span>  
</div>
</div>`,
        preConfirm:()=>{
            return {
                origen: $("#origen").val(),
                destino: $("#destino").val(),
                fechaIda: $("#fechaIda").val(),
                fechaVuelta: $("#fechaVuelta").val()
            }
        }
    });

    if(formValues){
        let objReserva = new Reservas(formValues.origen, formValues.destino, formValues.fechaIda, formValues.fechaVuelta);
        //incluir los pasajeros
        incluirPasajeros().then(data=>{
            console.log("Llego la data");
            console.log(data);
            objReserva.asignarAvionIda(new Aviones("JA 7742", "AirBuss 320 Neo", 196,98,10000));
            objReserva.asignarAvionVuelta(new Aviones("JA 7743", "AirBuss 320 Neo", 196,98,10000))
            objReserva.avionIda.agregarPasajeros(data);
            objReserva.avionVuelta.agregarPasajeros(data);
            dibujarReserva(objReserva);
        }).catch(err=>{
            console.log(err)
        })
    }
}

    function dibujarReserva(objReserva){
        console.log(objReserva);
        $("#idaNombre").val(objReserva.avionIda.arrPasajeros[0].nombres);
        $("#idaApellido").val(objReserva.avionIda.arrPasajeros[0].apellidos);
        $("#idaFecha").val(objReserva.fechaIda);
        $("#idaVuelo").val(objReserva.avionIda.matricula);
        $("#idaOrigen").val(objReserva.origen);
    
        $("#retNombre").val(objReserva.avionVuelta.arrPasajeros[0].nombres);
        $("#retApellido").val(objReserva.avionVuelta.arrPasajeros[0].apellidos);
        $("#retFecha").val(objReserva.fechaVuelta);
        $("#retVuelo").val(objReserva.avionVuelta.matricula);
        $("#retDestino").val(objReserva.destino);
    
        $("#divReserva").show();
    }


async function incluirPasajeros() {
    console.log("Cargar el formulario de pasajeros");
    const {value: formValues}= await Swal.fire({
        title: "Ingresa tus datos personales",
        icon: "info",
        showCloseButton:true,
        showCancelButton:true,
        confirmButtonText: "Guardar",
        denyButtonText: "Cancelar",
        html: `<!-- Text input-->
<div class="form-group">
<div >
<input id="nombres" name="nombres" type="text" placeholder="Escribe los nombres del pasajero" class="form-control input-md">
<span class="help-block">Escribe los nombres del pasajero</span>  
</div>
</div>

<!-- Text input-->
<div class="form-group">
<div >
<input id="apellidos" name="apellidos" type="text" placeholder="Escribe los apellidos del pasajero " class="form-control input-md">
<span class="help-block">Escribe los apellidos del pasajero </span>  
</div>
</div>

<!-- Text input-->
<div class="form-group">
<div >
<input id="documento" name="documento" type="text" placeholder="Escribe tu documento" class="form-control input-md">
<span class="help-block">Escribe tu documento</span>  
</div>
</div>


</div>`,
        preConfirm:()=>{
            return {
                nombres: $("#nombres").val(),
                apellidos: $("#apellidos").val(),
                documento: $("#documento").val()
            }
        }
    });
    if(formValues){
        let pasajero = new Cliente(formValues.documento, formValues.nombres, formValues.apellidos,"","","");
        return pasajero;
    }

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