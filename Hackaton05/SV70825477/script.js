class Telefono {
  estado = null;
  imei = "";
  modelo = "";
  marca = "";
  esRobado = false;
  constructor(imei, marca, modelo, estado = null) {
    this.imei = imei;
    this.marca = marca;
    this.modelo = modelo;
    this.estado = estado;
  }

  actualizarEstado(estado) {
    this.estado = estado;
  }

  actualizarEstadoRobado(esRobado) {
    this.esRobado = esRobado;
  }

}

class Central {
  celularesRobados = [];
  sucursales = [];
  consulta="";
  nuevonumero="";
  constructor(consulta,nuevonumero=null){
    this.consulta=consulta
    this.nuevonumero=nuevonumero
  }
  


  agregarCelularRobado(celular) {
    this.celularesRobados.push(celular);
  }
  eliminarCelularRobado(imei) {
    this.nuevonumero=imei
    this.nuevonumero="123456789"
    console.log(`Se cambio el imei a ${this.nuevonumero}`)
  }
  ConsultarTecnicos(sucursal){
    if("tecnoIdatLima-Lima"==sucursal) console.log(`Tecnico disponible ${tecnico1.name} de ${tecnico1.sucursal} `)
  }

  agregarSucursal(sucursal) {
    this.sucursales.push(sucursal);
  }
  agregarCelularRobado2(celular) {
    this.celularesRobados.push(celular)
  
}

//TECNOIDAT-TRUJILLO, TECNOIDAT-LIMA
}
const estadosTicket = {
  inicializado: "inicializado",
  proceso: "en proceso",
  finalizado: "finalizado",
};

////////////////////////////////////////////////////////////////////////////////////
class tec{
name="";
lastname="";
sistema="";
sucursal=[];
constructor(name,lastname,sistema){
this.name=name;
this.lastname=lastname;
this.sistema=sistema;

}
agregarsucur(a){
  this.sucursal.push(a)
}






}

const tecnico1=new tec("Mohamed","Corzo","android","tecnoIdatLima-Lima")
/////////////////////////////////////////////////////////////////////////////////////////
class Ticket {
  telefono;
  sistemaO="";
  diagnostico;
  porcentaje;
  montoFinal;
  estado;
  cliente;
  autorizado = 0;
  repuestos = [];
  tecnico=[];
  
  

  constructor(telefono,sistemaO, diagnostico, porcentaje, montoFinal, cliente) {
    this.telefono = telefono;
    this.sistemaO=sistemaO;
    this.diagnostico = diagnostico;
    this.porcentaje = porcentaje;
    this.montoFinal = montoFinal;
    this.cliente = cliente;
  }
  autorizar(estado) {
    this.autorizado = estado;
  }

  agregarRepuesto(repuesto) {
    if (!repuesto) {
      throw new Error("repuesto invalido");
    }
    this.repuestos.push(repuesto);
  }
  agregartec(tecnico){
this.tecnico.push(tecnico)
  }
  iniciarServicio() {
    // pasar el tecnico

    if (this.autorizado && this.porcentaje >= 50) {           ///////////////////////////////////////7
      //validar si el tecnico asignado sabe sobre el sistema operativo
       switch (tecnico1.sistema) {
          case "ios":
             console.log("Tecnico disponible en ios")
           break;
         case "android":
console.log("Tecnico disponible en android")
             break;
          default:
      return " no hay tecnico para esta marca";
         }
      this.telefono.actualizarEstado("en reparacion");
      this.estado = estadosTicket.proceso;
      return "servicio inicializado";
    } else {
      return "No cumple con las condiciones basicas para iniciar reparacion";
    }
  }
  finalizarServicio() {
    this.telefono.actualizarEstado("reparado");
    this.estado = estadosTicket.finalizado;
    return "servicio finalizado";
  }

  //TODO: entregar celular
  //1: validar si pago
  //2: validar si esta en estado finalizado
}


class Sucursal {
  tecnicos = [];
  clientes = [];
  tickets = [];
  contacto = "";
  nombre = "";
  direccion = "";
  central;

  constructor(nombre, direccion, contacto, central) {
    this.nombre = nombre;
    this.direccion = direccion;
    this.contacto = contacto;
    this.central = central;
  }

  // agregar tecnico
  //agregar cliente
  // eliminar tecnico
  // eliminar cliente

  //actualizarClientes --> extraer todos los clientes de todos los ticket
  agregarTicket(ticket) {
    const existCelRobado = this.central.celularesRobados.find(
      (e) => e.imei == ticket.telefono.imei
    );

    if (existCelRobado) {
      console.error("El celular no puede ser reparado porque es robado!!");
    } else {
      this.tickets.push(ticket);
    }
  }
}
const tecnoIdat = new Central();

console.log(tecnoIdat);

const tecnoIdatLima = new Sucursal(
  "tecnoIdatLima-Lima",
  "Lima-ovalo larco",
  "8373849",
  tecnoIdat
);
console.log(tecnoIdatLima);
const tecnoIdatChiclayo = new Sucursal(
  "tecnoIdatLambayeque-Chiclayo",
  "Lambayeque-ovalo larco",
  "8373849",
  tecnoIdat
);
console.log(tecnoIdatChiclayo);

const tecnoIdatGuadalupe = new Sucursal(
  "tecnoIdatLa libertad-Trujillo",
  "La libertad-ovalo larco",
  "8373849",
  tecnoIdat
);
console.log(tecnoIdatGuadalupe);
//TODO: asignacion de sucursales a central
tecnoIdat.agregarSucursal(tecnoIdatLima);
tecnoIdat.agregarSucursal(tecnoIdatChiclayo);
tecnoIdat.agregarSucursal(tecnoIdatGuadalupe);

console.log(tecnoIdat);

//TODO: creacion de celulares

const s23Ultra = new Telefono("471874334", "Samsung", "s23ultra");
const iphone16 = new Telefono("59849534", "Apple", "16");
const xiomi = new Telefono("8763423", "Xiomi", "readmi note7");

tecnoIdat.agregarCelularRobado(s23Ultra);

console.log("----------------------------------");

console.log(tecnoIdat);
//1 caso: celular robado
const newticket = new Ticket(s23Ultra,"ios", "bloqueado", 50, 60, "Jose Corzo");
tecnoIdatChiclayo.agregarTicket(newticket);

//2 caso: celular sin autorizacion
const newticket2 = new Ticket(iphone16,"ios", "bloqueado", 50, 60, "Jose Corzo");

tecnoIdatChiclayo.agregarTicket(newticket2);

console.log(newticket2.iniciarServicio());

// 3 caso: celular con autorizacion 💵
const newticket3 = new Ticket( xiomi,"ios","pantalla rota",50,230,"maria mestanza"
);

tecnoIdatChiclayo.agregarTicket(newticket3);

newticket3.autorizar(1);

console.log(newticket3.iniciarServicio());

newticket3.agregarRepuesto("pantalla");
newticket3.agregartec("Mohamed");
tecnico1.agregarsucur("tecnoIdatLima-Lima")

newticket3.finalizarServicio();

console.log("costo", newticket3.montoFinal);
console.log("repuestos", newticket3.repuestos);
console.log(newticket3);
// Datos del tecnico
console.log(tecnico1)
  
//central Cambia imei

const consultacentral=new Central("Cambiar imei")
console.log(consultacentral)
consultacentral.eliminarCelularRobado("0000011111")
consultacentral.ConsultarTecnicos("tecnoIdatLima-Lima")
