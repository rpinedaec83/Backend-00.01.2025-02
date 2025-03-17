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
  
    actualizarEstadoRobado(esRobado, central) {
      if (typeof esRobado !== "boolean") {
          throw new Error("El estado de robo debe ser un booleano");
      }

      const celularRobado = central.celularesRobados.find(celular => celular.imei === this.imei);

      if (celularRobado) {
          celularRobado.esRobado = esRobado;

          if (esRobado) {
              celularRobado.actualizarEstado("robado");
          } else {
              celularRobado.actualizarEstado("disponible");
          }
      } else {
          throw new Error("El celular no existe en la lista de celulares robados");
      }
  }
  }
  
  class Tecnico {
    constructor(nombre, apellido, telefono, especialidad, experiencia) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.telefono = telefono;
      this.especialidad = especialidad;
      this.experiencia = experiencia;
    }
  
    
  }
  
  class Central {
    celularesRobados = [];
    sucursales = [];
    clientes = [];
  
    agregarCelularRobado(celular) {
      const celularExiste = this.celularesRobados.some(c => c.imei === celular.imei);

      if (!celularExiste) {
          this.celularesRobados.push(celular);
      } else {
          throw new Error("El celular ya existe en la lista de celulares robados");
      }
  }

  buscarCelularRobadoPorImei(imei) {
      return this.celularesRobados.find(celular => celular.imei === imei);
  }
  
    eliminarCelularRobado(imei) {
      this.celularesRobados = this.celularesRobados.filter(
        (celular) => celular.imei !== imei
      );
    }
  
    agregarSucursal(sucursal) {
      this.sucursales.push(sucursal);
    }
  
    agregarCliente(cliente) {
      this.clientes.push(cliente);
    }
  
    buscarTecnicoPorSucursal(sucursal, tecnico) {
      const tecnicosEnSucursal = sucursal.tecnicos.filter(
        (t) => t.especialidad === tecnico.especialidad
      );
  
      if (tecnicosEnSucursal.length > 0) {
        return tecnicosEnSucursal[0];
      } else {
        return null;
      }
    }
  }


  
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
    autorizado = false;
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
      if (repuesto) {
        this.repuestos.push(repuesto);

        // Actualizar el estado del equipo en la sucursal correspondiente
        const sucursal = central.sucursales.find(sucursal => sucursal.tickets.includes(this));

        if (sucursal) {
          sucursal.estadoEquipos[this.telefono.imei] = "en reparación";
        } else {
          console.log("No se encontró la sucursal correspondiente al ticket.");
        }
      } else {
        throw new Error("Repuesto inválido");
      }
    }
  
    iniciarServicio(tecnico) {
      if (this.autorizado && this.porcentaje >= 50 && tecnico) {
          const existeCelularRobado = central.buscarCelularRobadoPorImei(this.telefono.imei);

          if (!existeCelularRobado) {
              this.telefono.actualizarEstado("en reparación");
              this.estado = estadosTicket.proceso;
              return `Servicio iniciado para ${this.cliente.nombre} ${this.cliente.apellido} de celular ${this.telefono.marca} ${this.telefono.modelo} por el técnico ${tecnico.nombre} ${tecnico.apellido}.`;
          } else {
              return `Hola ${this.cliente.nombre} ${this.cliente.apellido}, No se puede iniciar el servicio para un celular robado.`;
          }
      } else {
          let errorMessage = "No se puede iniciar el servicio.";

          if (!this.autorizado) {
              errorMessage += " El ticket no está autorizado.";
          }

          if (this.porcentaje < 50) {
              errorMessage += ` El porcentaje de daños es de ${this.porcentaje}%, se requiere al menos 50%.`;
          }

          if (!tecnico) {
              errorMessage += " No se ha especificado un técnico.";
          }

          return errorMessage;
      }
  
  }
  
  finalizarServicio() {
    this.telefono.actualizarEstado("reparado");
    this.estado = estadosTicket.finalizado;
    return "Servicio finalizado";
  }

  calcularPagoTotal() {
    return this.montoFinal;
  }
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
      this.estadoEquipos = {};

    }
  
    agregarTecnico(tecnico) {
      this.tecnicos.push(tecnico);
    }
  
    eliminarTecnico(tecnico) {
      this.tecnicos = this.tecnicos.filter(
        (t) => t.nombre !== tecnico.nombre && t.apellido !== tecnico.apellido
      );
    }
  
    agregarTicket(ticket) {
      const existeCelularRobado = this.central.celularesRobados.some(
        (celular) => celular.imei === ticket.telefono.imei
      );
  
      if (!existeCelularRobado) {
        this.tickets.push(ticket);
        this.estadoEquipos[ticket.telefono.imei] = ticket.telefono.estado;
      } else {
        console.error(`El celular ${celularRobado.modelo} con IMEI ${celularRobado.imei} no puede ser reparado porque es robado!!`);
      }
    }
    buscarTecnicoPorMarca(marca) {
      const tecnico = this.tecnicos.find((tecnico) => {
        return tecnico.especialidad.includes(marca);
      });
  
      if (tecnico) {
        return tecnico;
      } else {
        return null;
      }
    }
    mostrarEstadoEquipo(imei) {
      return this.estadoEquipos[imei];
    }
  }

  class Cliente {
    constructor(nombre, apellido, contacto, direccion, telefono) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.contacto = contacto;
      this.direccion = direccion;
      this.telefono = telefono;
      this.tickets = [];
    }
  
    agregarTicket(ticket) {
      this.tickets.push(ticket);
    }
  
    buscarSucursalYMarca(central, marca) {
      const sucursal = central.sucursales.find((sucursal) => {
        const tecnico = sucursal.tecnicos.find((tecnico) => {
          return tecnico.especialidad.includes(marca);
        });
  
        return tecnico !== undefined;
      });
  
      if (sucursal) {
        return {
          sucursal: sucursal,
          marca: marca,
        };
      } else {
        return null;
      }
    }
  }

  

  const central = new Central();

  // crear Sucursales
  const sucursal1 = new Sucursal("Sucursal Central de Ucayali", "Av. Juan Pablo II, Cayalti", "061-222-111", central);
  const sucursal2 = new Sucursal("Sucursal Norte de Ucayali", "Av. Luis Carranza, Agua Blanca", "061-333-222", central);
  const sucursal3 = new Sucursal("Sucursal Sur de Ucayali", "Av. José Antonio Anaya, Pucallpa", "061-444-333", central);
  const sucursal4 = new Sucursal("Sucursal Este de Ucayali", "Av. Francisco Bolognesi, Santa Ana", "061-555-444", central);
  const sucursal5 = new Sucursal("Sucursal Oeste de Ucayali", "Av. Manuel Aguirre, Ayaviri", "061-666-555", central);
  
  // agregar Sucursales a Central
  central.agregarSucursal(sucursal1);
  central.agregarSucursal(sucursal2);
  central.agregarSucursal(sucursal3);
  central.agregarSucursal(sucursal4);
  central.agregarSucursal(sucursal5);
  
  // crear Tecnicos
  const tecnico1 = new Tecnico("José Luis Velásquez", "Velásquez", "061-111-111", ["Samsung", "Huawei"], 2);
const tecnico2 = new Tecnico("María Elena García", "García", "061-222-222", ["Xiaomi", "OnePlus"], 4);
const tecnico3 = new Tecnico("Carlos Alberto Ruiz", "Ruiz", "061-333-333", ["Google", "LG"], 6);
const tecnico4 = new Tecnico("Ana María Pérez", "Pérez", "061-444-444", ["Nokia", "BlackBerry"], 8);
const tecnico5 = new Tecnico("Daniel Fernando Sánchez", "Sánchez", "061-555-555", ["HTC", "Apple"], 10);

  
  // agregar Tecnicos a Sucursales
  sucursal1.agregarTecnico(tecnico1);
  sucursal1.agregarTecnico(tecnico2);
  sucursal2.agregarTecnico(tecnico3);
  sucursal3.agregarTecnico(tecnico4);
  sucursal4.agregarTecnico(tecnico5);
  
  console.log(central.sucursales);

// Creación de un nuevo cliente
const cliente1 = new Cliente("Jorge", "Kong", "061-777-888", "Calle 123, Ciudad", "0987654321");
const cliente2 = new Cliente("Kassandra", "Flores", "061-888-999", "Calle 456, San Pedro", "0987654322");

// Registrar el nuevo cliente en la central
central.agregarCliente(cliente1);
central.agregarCliente(cliente2);


console.log(`Bienvenido ${cliente1.nombre} ${cliente1.apellido}. Tu dirección es ${cliente1.direccion} y tu teléfono es ${cliente1.telefono}.`);
const marca = "Samsung";
const marca2 = "Xiaomi";
const resultado = cliente1.buscarSucursalYMarca(central, marca);

if (resultado) {
  const tecnico = resultado.sucursal.buscarTecnicoPorMarca(resultado.marca);

  if (tecnico) {
    console.log(`${cliente1.nombre} ${cliente1.apellido}, puedes reparar tu celular ${marca} en la sucursal ${resultado.sucursal.nombre}. El técnico disponible es ${tecnico.nombre} ${tecnico.apellido}.`);
  } else {
    console.log(`No hay un técnico disponible en la sucursal ${resultado.sucursal.nombre} que pueda reparar un celular ${marca}.`);
  }
} else {
  console.log(`No hay sucursales disponibles que puedan reparar un celular ${marca}.`);
}

const resultado2 = cliente2.buscarSucursalYMarca(central, marca2);


if (resultado2) {
  const tecnico = resultado2.sucursal.buscarTecnicoPorMarca(resultado2.marca);

  if (tecnico) {
    console.log(`${cliente2.nombre} ${cliente2.apellido}, puedes reparar tu celular ${marca2} en la sucursal ${resultado2.sucursal.nombre}. El técnico disponible es ${tecnico.nombre} ${tecnico.apellido}.`);
  } else {
    console.log(`No hay un técnico disponible en la sucursal ${resultado2.sucursal.nombre} que pueda reparar un celular ${marca2}.`);
  }
} else {
  console.log(`No hay sucursales disponibles que puedan reparar un celular ${marca2}.`);
}


// Creación de un nuevo celular robado
const celularRobado = new Telefono("1234567890", "Samsung", "Galaxy S21", "robado");

// Registrar el celular robado en la central
central.agregarCelularRobado(celularRobado);
console.log(`El celular ${celularRobado.marca} ${celularRobado.modelo} con IMEI ${celularRobado.imei} ha sido registrado como robado.`);

// Creación de celulares para los clientes
const celular1 = new Telefono("1234567890", "Samsung", "Galaxy S21");
const celular2 = new Telefono("2345678901", "Xiaomi", "Redmi Note 9");

// Asignación de celulares a los clientes
cliente1.telefono = celular1;
cliente2.telefono = celular2;

// Verificación de celulares de los clientes
console.log(`El celular de ${cliente1.nombre} es un ${cliente1.telefono.marca} ${cliente1.telefono.modelo}.`);
console.log(`El celular de ${cliente2.nombre} es un ${cliente2.telefono.marca} ${cliente2.telefono.modelo}.`);


// Creación de un nuevo ticket para el cliente 1
const ticket1 = new Ticket(celular1, "Reparación de pantalla", 70, 500, cliente1);

// Agregar el ticket del cliente 1 a la sucursal que le corresponde
sucursal1.agregarTicket(ticket1);
ticket1.autorizar(1);


// Creación de un nuevo ticket para el cliente 2
const ticket2 = new Ticket(celular2, "Reparación de batería", 80, 600, cliente2);
ticket2.autorizar(1);


// Agregar el ticket del cliente 2 a la sucursal que le corresponde
sucursal2.agregarTicket(ticket2);

Servicio1=ticket1.iniciarServicio(tecnico1);
console.log(Servicio1);
Servicio2=ticket2.iniciarServicio(tecnico2);
console.log(Servicio2);
const repuesto1 = {
  nombre: "Bateria Original",
  precio: 350,
};

ticket2.agregarRepuesto(repuesto1);

console.log(ticket2.repuestos); 

console.log(`Estado del equipo ${celular2.imei} en la sucursal ${sucursal2.nombre}: ${sucursal2.mostrarEstadoEquipo(celular2.imei)}`);

// Finalizar el servicio del ticket 2
const finalizarServicio2 = ticket2.finalizarServicio();
console.log(finalizarServicio2);

// Calcular el pago total del ticket 2
const pagoTotalTicket2 = ticket2.calcularPagoTotal();
console.log(`El pago total al cliente ${cliente2.nombre} es de ${pagoTotalTicket2}.`);
