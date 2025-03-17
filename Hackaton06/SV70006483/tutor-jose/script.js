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

  //   set estado(valor){
  //     this.estado=valor
  //   }

  //   get estado(){
  //     return this.estado
  //   }
}

class Central {
  celularesRobados = [];
  sucursales = [];

  agregarCelularRobado(celular) {
    this.celularesRobados.push(celular);
  }
  eliminarCelularRobado(imei) {
    ///logica para eliminar un celular robado
  }

  agregarSucursal(sucursal) {
    const existSucursal = this.sucursales.find(
      (valor) => valor.nombre == sucursal.nombre
    );

    if (existSucursal) return;

    this.sucursales.push(sucursal);
    console.log("central", this.sucursales);

    const sucursalesTemporal = this.sucursales.map((valor) => ({
      nombre: valor.nombre,
      direccion: valor.direccion,
      contacto: valor.contacto,
      central: { ...valor.central, sucursales: [] },
    }));
    localStorage.setItem("sucursales", JSON.stringify(sucursalesTemporal));
  }
  buscarTecnicoPorSucursal(sucursal, tecnico) {
    // 1: buscar sucursal : sucursales
    //2: buscar tecnico en sucursal: sucursal encontrada
    //3: retornar el tecnico
  }

  addAllSucursal(sucursales = []) {
    this.sucursales = sucursales.map(
      (sucursal) =>
        new Sucursal(
          sucursal.nombre,
          sucursal.direccion,
          sucursal.contacto,
          sucursal.central
        )
    );
  }
}

//TECNOIDAT-TRUJILLO, TECNOIDAT-LIMA

const estadosTicket = {
  inicializado: "inicializado",
  proceso: "en proceso",
  finalizado: "finalizado",
};

class Ticket {
  telefono;
  diagnostico;
  porcentaje;
  montoFinal;
  estado;
  cliente;
  autorizado = 0;
  repuestos = [];

  constructor(telefono, diagnostico, porcentaje, montoFinal, cliente) {
    this.telefono = telefono;
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
  iniciarServicio() {
    // pasar el tecnico

    if (this.autorizado && this.porcentaje >= 50) {
      //validar si el tecnico asignado sabe sobre el sistema operativo
      //   switch (this.telefono.sistema) {
      //     case "ios":
      //       //validar con tecnico si tiene esta skill
      //       break;
      //     case "android":
      //       //validar con tecnico si tiene esta skill
      //       break;
      //     default:
      //       return " no hay tecnico para esta marca";
      //   }
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
    console.log("🚀 ~ Sucursal ~ agregarTicket ~ central:", this.central);
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

///WEb storage

const init = () => {
  const dataLocal = JSON.parse(localStorage.getItem("sucursales"));
  const dataPhoneReported = JSON.parse(
    localStorage.getItem("telefonosReportados")
  );
  if (dataPhoneReported) {
  } //TODO:
  if (dataLocal) {
    return tecnoIdat.addAllSucursal(dataLocal);
  }

  // se crea sucursales cuando no existen
  let arraySucursales = [];

  const tecnoIdatLima = new Sucursal(
    "tecnoIdatLima",
    "trujillo-ovalo larco",
    "8373849",
    tecnoIdat
  );
  arraySucursales.push(tecnoIdatLima);
  const tecnoIdatChiclayo = new Sucursal(
    "tecnoIdatChiclayo",
    "trujillo-ovalo larco",
    "8373849",
    tecnoIdat
  );
  arraySucursales.push(tecnoIdatChiclayo);

  const tecnoIdatGuadalupe = new Sucursal(
    "tecnoIdatGuadalupe",
    "trujillo-ovalo larco",
    "8373849",
    tecnoIdat
  );
  arraySucursales.push(tecnoIdatGuadalupe);
  console.log(arraySucursales);
  localStorage.setItem("sucursales", JSON.stringify(arraySucursales));
};

init();

const updateSelect = () => {
  const selectElement = document.querySelector("#branch");
  selectElement.innerHTML = "";

  tecnoIdat.sucursales.forEach((sucursal, index) => {
    const optionElement = document.createElement("option");
    optionElement.value = sucursal.nombre;
    optionElement.textContent = sucursal.nombre;
    selectElement.appendChild(optionElement);
  });
};

updateSelect();

const newSucursal = new Sucursal(
  "tecnoIdatIca",
  "ica- las palmeras",
  "987867567",
  tecnoIdat
);
tecnoIdat.agregarSucursal(newSucursal);
const newSucursalCusco = new Sucursal(
  "tecnoIdatCusco",
  "ica- bolivar",
  "987887567",
  tecnoIdat
);
tecnoIdat.agregarSucursal(newSucursalCusco);
// console.log(tecnoIdat);

// // const tecnoIdatLima = new Sucursal(
// //   "tecnoIdatLima-trujillo",
// //   "trujillo-ovalo larco",
// //   "8373849",
// //   tecnoIdat
// // );
// // console.log(tecnoIdatLima);
// // const tecnoIdatChiclayo = new Sucursal(
// //   "tecnoIdatChiclayo-trujillo",
// //   "trujillo-ovalo larco",
// //   "8373849",
// //   tecnoIdat
// // );
// // console.log(tecnoIdatChiclayo);

// // const tecnoIdatGuadalupe = new Sucursal(
// //   "tecnoIdatGuadalupe-trujillo",
// //   "trujillo-ovalo larco",
// //   "8373849",
// //   tecnoIdat
// // );
// console.log(tecnoIdatGuadalupe);
// //TODO: asignacion de sucursales a central
// tecnoIdat.agregarSucursal(tecnoIdatLima);
// tecnoIdat.agregarSucursal(tecnoIdatChiclayo);
// tecnoIdat.agregarSucursal(tecnoIdatGuadalupe);

// console.log(tecnoIdat);

// //TODO: creacion de celulares

// const s23Ultra = new Telefono("471874334", "Samsung", "s23ultra");
// const iphone16 = new Telefono("59849534", "Apple", "16");
// const xiomi = new Telefono("8763423", "Xiomi", "readmi note7");

// tecnoIdat.agregarCelularRobado(s23Ultra);
// console.log("----------------------------------");

// console.log(tecnoIdat);
// //1 caso: celular robado
// const newticket = new Ticket(s23Ultra, "bloqueado", 50, 60, "Jose Montenegro");
// tecnoIdatChiclayo.agregarTicket(newticket);

// //2 caso: celular sin autorizacion
// const newticket2 = new Ticket(iphone16, "bloqueado", 50, 60, "Jose Montenegro");

// tecnoIdatChiclayo.agregarTicket(newticket2);

// console.log(newticket2.iniciarServicio());

// // 3 caso: celular con autorizacion 💵
// const newticket3 = new Ticket(
//   xiomi,
//   "pantalla rota",
//   50,
//   230,
//   "maria mestanza"
// );

// tecnoIdatChiclayo.agregarTicket(newticket3);

// newticket3.autorizar(1);

// console.log(newticket3.iniciarServicio());

// newticket3.agregarRepuesto("pantalla");
// newticket3.finalizarServicio();

// console.log("costo", newticket3.montoFinal);
// console.log("repuestos", newticket3.repuestos);
// console.log(newticket3);

// //TODO: crear clase tecnico y agregar (sucursal, ticket)
