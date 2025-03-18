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
  
    const index = central.celularesRobados.findIndex(celular => celular.imei === this.imei);
  
    if (index !== -1) {
      central.celularesRobados[index].esRobado = esRobado;
      central.celularesRobados[index].estado = esRobado ? "robado" : "disponible";
      central.guardarCelularesRobados();
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

  constructor() {
    this.sucursales = [];
    this.clientes = [];
    this.celularesRobados = [];
    this.cargarSucursales();
    this.cargarCelularesRobados();
  }


  agregarCelularRobado(celular) {
    const celularExiste = this.celularesRobados.some(c => c.imei === celular.imei);

    if (!celularExiste) {
      this.celularesRobados.push(celular);
      this.guardarCelularesRobados(); // Guardar en localStorage
    } else {
      throw new Error("El celular ya existe en la lista de celulares robados");
    }
  }

  eliminarCelularRobado(imei) {
    this.celularesRobados = this.celularesRobados.filter(celular => celular.imei !== imei);
    this.guardarCelularesRobados(); // Actualizar localStorage
  }

  buscarCelularRobadoPorImei(imei) {
    return this.celularesRobados.find(celular => celular.imei === imei);
  }


  agregarSucursal(sucursal) {
    // Verificar si ya existe una sucursal con el mismo nombre
    const sucursalExistente = this.sucursales.find(s => s.nombre === sucursal.nombre);
    
    if (!sucursalExistente) {
      this.sucursales.push(sucursal);
      this.guardarSucursales();
      console.log(`Sucursal "${sucursal.nombre}" agregada correctamente.`);
    } else {
      console.log(`Ya existe una sucursal con el nombre "${sucursal.nombre}". No se ha agregado.`);
    }
  }



  guardarSucursales() {
    const sucursalesData = this.sucursales.map(sucursal => ({
      nombre: sucursal.nombre,
      direccion: sucursal.direccion,
      telefono: sucursal.telefono,
      tecnicos: sucursal.tecnicos.map(tecnico => ({
        nombre: tecnico.nombre,
        apellido: tecnico.apellido,
        telefono: tecnico.telefono,
        especialidad: tecnico.especialidad,
        experiencia: tecnico.experiencia
      })),
      clientes: sucursal.clientes.map(cliente => ({
        nombre: cliente.nombre,
        apellido: cliente.apellido,
        dni: cliente.dni,
        direccion: cliente.direccion,
        telefono: cliente.telefono
      })),
      tickets: sucursal.tickets.map(ticket => ({
        id: ticket.id,
        telefono: {
          imei: ticket.telefono.imei,
          marca: ticket.telefono.marca,
          modelo: ticket.telefono.modelo
        },
        diagnostico: ticket.diagnostico,
        diagnosticoInicial: ticket.diagnosticoInicial,
        tecnicoId: ticket.tecnicoId,
        porcentaje: ticket.porcentaje,
        montoFinal: ticket.montoFinal,
        cliente: {
          nombre: ticket.cliente.nombre,
          apellido: ticket.cliente.apellido,
          dni: ticket.cliente.dni,
          direccion: ticket.cliente.direccion,
          telefono: ticket.cliente.telefono
        },
        estado: ticket.estado,
        fechaIngreso: ticket.fechaIngreso,
        fechaEntrega: ticket.fechaEntrega
      })),
      estadoEquipos: sucursal.estadoEquipos
    }));

    localStorage.setItem('sucursales', JSON.stringify(sucursalesData));
  }

  cargarSucursales() {
    this.sucursales.forEach(sucursal => sucursal.cargarDatos());

    const sucursalesData = JSON.parse(localStorage.getItem('sucursales'));
    if (sucursalesData) {
      this.sucursales = sucursalesData.map(sucursalData => {
        const sucursal = new Sucursal(sucursalData.nombre, sucursalData.direccion, sucursalData.telefono, this);
        
        sucursal.tecnicos = sucursalData.tecnicos.map(tecnicoData => 
          new Tecnico(tecnicoData.nombre, tecnicoData.apellido, tecnicoData.telefono, tecnicoData.especialidad, tecnicoData.experiencia)
        );

        sucursal.clientes = sucursalData.clientes.map(clienteData => 
          new Cliente(clienteData.nombre, clienteData.apellido, clienteData.dni, clienteData.direccion, clienteData.telefono)
        );

        sucursal.tickets = sucursalData.tickets.map(ticketData => {
          const cliente = sucursal.clientes.find(c => c.dni === ticketData.cliente.dni) || 
                          new Cliente(ticketData.cliente.nombre, ticketData.cliente.apellido, ticketData.cliente.dni, ticketData.cliente.direccion, ticketData.cliente.telefono);
          const telefono = new Telefono(ticketData.telefono.imei, ticketData.telefono.marca, ticketData.telefono.modelo);
          const ticket = new Ticket(telefono, ticketData.diagnostico, ticketData.porcentaje, ticketData.montoFinal, cliente);
          ticket.id = ticketData.id;
          ticket.estado = ticketData.estado;
          ticket.fechaIngreso = new Date(ticketData.fechaIngreso);
          ticket.fechaEntrega = ticketData.fechaEntrega ? new Date(ticketData.fechaEntrega) : null;
          return ticket;
        });

        sucursal.estadoEquipos = sucursalData.estadoEquipos;

        return sucursal;
      });
    }
  }


  agregarTicket(dni, nuevoTicket) {
    const cliente = this.clientes.find(c => c.dni === dni);
    if (cliente) {
      cliente.tickets.push(nuevoTicket);
      
      // Buscar la sucursal correspondiente
      const sucursal = this.sucursales.find(s => s.clientes.some(c => c.dni === dni));
      if (sucursal) {
        sucursal.agregarTicket(nuevoTicket);
      } else {
        console.error("No se encontró la sucursal correspondiente al cliente");
      }
      
      this.guardarSucursales(); // Guardar todos los cambios en localStorage
      console.log("Ticket agregado y guardado:", nuevoTicket);
    } else {
      console.error("Cliente no encontrado");
    }
  }

  

   buscarTecnicoPorSucursal(sucursal, tecnico) {
    const tecnicosEnSucursal = sucursal.tecnicos.filter(
      (t) => t.especialidad === tecnico.especialidad
    );
  
    return tecnicosEnSucursal.length > 0 ? tecnicosEnSucursal[0] : "No hay técnicos disponibles";
  }
  

  guardarCelularesRobados() {
    localStorage.setItem("celularesRobados", JSON.stringify(this.celularesRobados));
  }


  cargarCelularesRobados() {
    const datos = localStorage.getItem("celularesRobados");
    if (datos) {
      this.celularesRobados = JSON.parse(datos).map(c => new Telefono(c.imei, c.marca, c.modelo, c.estado));
    }
  }
  
}



const estadosTicket = {
  inicializado: "inicializado",
  proceso: "en proceso",
  finalizado: "finalizado",
};

class Ticket {
  static nextId = 1;

  constructor(telefono, diagnostico, porcentaje, montoFinal, cliente, tecnico) {
    this.id = Ticket.nextId++;
    this.telefono = telefono;
    this.diagnostico = diagnostico;
    this.porcentaje = porcentaje;
    this.montoFinal = montoFinal;
    this.cliente = cliente;
    this.tecnicoId = tecnico ? tecnico.id : null; 
    this.estado = estadosTicket.inicializado;
    this.fechaIngreso = new Date();
    this.fechaEntrega = null;
    this.diagnosticoInicial = ''; 

  }

  realizarPrimeraRevision(diagnosticoInicial) {
    this.diagnosticoInicial = diagnosticoInicial;
    this.estado = estadosTicket.proceso;
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
    this.fechaEntrega = new Date();
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

  constructor(nombre = '', direccion = '', contacto = '', central) {
    this.nombre = nombre;
    this.direccion = direccion;
    this.contacto = contacto;
    this.central = central;
    this.tecnicos = [];
    this.tickets = [];
  }


  // cargarDatos() {
  //   const datosGuardados = JSON.parse(localStorage.getItem(`sucursal_${this.nombre}`));
  //   if (datosGuardados) {
  //     this.tecnicos = datosGuardados.tecnicos || [];
  //     this.clientes = datosGuardados.clientes || [];
  //     this.tickets = datosGuardados.tickets || [];
  //     this.estadoEquipos = datosGuardados.estadoEquipos || {};
  //   }
  // }

  guardarDatos() {
    const datosAGuardar = {
      tecnicos: this.tecnicos.map(tecnico => ({
        id: tecnico.id,
        nombre: tecnico.nombre,
        apellido: tecnico.apellido,
        telefono: tecnico.telefono,
        especialidad: tecnico.especialidad,
        experiencia: tecnico.experiencia
      })),
      clientes: this.clientes.map(cliente => ({
        nombre: cliente.nombre,
        apellido: cliente.apellido,
        dni: cliente.dni,
        direccion: cliente.direccion,
        telefono: cliente.telefono,
      })),
      tickets: this.tickets.map(ticket => ({
        id: ticket.id,
        diagnosticoInicial: ticket.diagnosticoInicial,
        telefono: {
          imei: ticket.telefono.imei,
          marca: ticket.telefono.marca,
          modelo: ticket.telefono.modelo,
        },
        diagnostico: ticket.diagnostico,
        porcentaje: ticket.porcentaje,
        montoFinal: ticket.montoFinal,
        cliente: {
          dni: ticket.cliente.dni,
          nombre: ticket.cliente.nombre,
          apellido: ticket.cliente.apellido,
        },
        tecnicoId: ticket.tecnicoId,
        estado: ticket.estado,
        fechaIngreso: ticket.fechaIngreso,
        fechaEntrega: ticket.fechaEntrega,
      })),
      estadoEquipos: this.estadoEquipos,
    };
  
    localStorage.setItem(`sucursal_${this.nombre}`, JSON.stringify(datosAGuardar));
    console.log("Datos guardados:", datosAGuardar);  // Para depuración
  }
  agregarTecnico(tecnico) {
    this.tecnicos.push(tecnico);
    this.guardarDatos();
    this.central.guardarSucursales();
  }


  agregarCliente(cliente) {
    if (cliente && cliente instanceof Cliente) {
      if (!this.clientes.some(c => c.dni === cliente.dni)) {
        this.clientes.push(cliente);
      }
    } else {
      console.error('Error: Se intentó agregar un cliente inválido');
    }
  }

  agregarTicket(ticket) {
    if (!(ticket instanceof Ticket)) {
      console.error("El objeto no es una instancia válida de Ticket.");
      return;
    }

    const existeCelularRobado = this.central.celularesRobados.some(
      (celular) => celular.imei === ticket.telefono.imei
    );

    if (!existeCelularRobado) {
      // Verificar si el ticket ya existe
      const ticketExistente = this.tickets.find(t => t.id === ticket.id);
      if (!ticketExistente) {
        this.tickets.push(ticket);
        this.guardarDatos();
        this.central.guardarSucursales();
        console.log("Ticket agregado correctamente:", ticket);
      } else {
        console.log("El ticket ya existe, no se agregará nuevamente.");
      }
    } else {
      console.error("No se puede agregar un ticket para un celular robado.");
    }
  }


  cargarDatos() {
    const datosGuardados = JSON.parse(localStorage.getItem(`sucursal_${this.nombre}`));
    if (datosGuardados) {
      this.tecnicos = datosGuardados.tecnicos.map(t => new Tecnico(t.nombre, t.apellido, t.telefono, t.especialidad, t.experiencia));
      this.clientes = datosGuardados.clientes.map(c => new Cliente(c.nombre, c.apellido, c.dni, c.direccion, c.telefono));
      this.tickets = datosGuardados.tickets.map(t => {
        const ticket = new Ticket(
          new Telefono(t.telefono.imei, t.telefono.marca, t.telefono.modelo),
          t.diagnostico,
          t.porcentaje,
          t.montoFinal,
          this.clientes.find(c => c.dni === t.cliente.dni),
          this.tecnicos.find(tec => tec.id === t.tecnicoId)
        );
        ticket.id = t.id;
        ticket.diagnosticoInicial = t.diagnosticoInicial; 
        ticket.tecnicoId = t.tecnicoId; 
        ticket.estado = t.estado;
        ticket.fechaIngreso = new Date(t.fechaIngreso);
        ticket.fechaEntrega = t.fechaEntrega ? new Date(t.fechaEntrega) : null;
        return ticket;
      });
      this.estadoEquipos = datosGuardados.estadoEquipos || {};
  
      console.log("Datos cargados:", this.tickets);  // Para depuración
    }
  }

  obtenerTickets() {
    return this.tickets;
  }

  actualizarEstadoTicket(ticketId, nuevoEstado) {
    const ticket = this.tickets.find(t => t.id === ticketId);
    if (ticket) {
      ticket.estado = nuevoEstado;
      this.guardarDatos();
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

  constructor(nombre, apellido, dni, direccion, telefono) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.dni = dni;
    this.direccion = direccion;
    this.telefono = telefono;
    this.tickets = [];
  }

  agregarTicket(ticket) {
    this.tickets.push(ticket);
  }



actualizarTickets() {
  const clienteData = {
    dni: this.dni,
    nombre: this.nombre,
    telefono: this.telefono,
    tickets: this.tickets.map(ticket => ({
      telefono: ticket.telefono.modelo,
      imei: ticket.telefono.imei,
      estado: ticket.estado,
      montoFinal: ticket.montoFinal,
      tecnicoId : ticket.tecnicoId ,
      diagnosticoInicial  : ticket.diagnosticoInicial,
      fechaIngreso: ticket.fechaIngreso,
      fechaEntrega: ticket.fechaEntrega,
      descripcion: ticket.descripcion,
    })),
  };

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

let central;

if (!central) {
  central = new Central();
  central.cargarSucursales(); // Asumiendo que este método existe en tu clase Central
}

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
function agregarTecnicosASucursales(central) {
  if (central.sucursales.length >= 5) {
    const tecnicosParaAgregar = [
      { sucursal: 0, tecnicos: [tecnico1, tecnico2] },
      { sucursal: 1, tecnicos: [tecnico3] },
      { sucursal: 2, tecnicos: [tecnico4] },
      { sucursal: 3, tecnicos: [tecnico5] }
    ];

    tecnicosParaAgregar.forEach(({ sucursal, tecnicos }) => {
      tecnicos.forEach(tecnico => {
        const sucursalActual = central.sucursales[sucursal];
        const tecnicoExistente = sucursalActual.tecnicos.find(t => 
          t.nombre === tecnico.nombre && t.apellido === tecnico.apellido
        );

        if (!tecnicoExistente) {
          sucursalActual.agregarTecnico(tecnico);
          console.log(`Técnico ${tecnico.nombre} ${tecnico.apellido} agregado a la sucursal ${sucursalActual.nombre}`);
        } else {
          console.log(`El técnico ${tecnico.nombre} ${tecnico.apellido} ya existe en la sucursal ${sucursalActual.nombre}`);
        }
      });
    });
  } else {
    console.error("No hay suficientes sucursales para agregar todos los técnicos.");
  }
}


central.cargarSucursales();
agregarTecnicosASucursales(central);

// // Simulación de la función generarTicket()
// function simularGenerarTicket() {
//   // Simulamos los valores que normalmente vendrían de los elementos del DOM
//   const sucursalIndex = 0; // Asumimos que es la primera sucursal
//   const clienteNombre = "Jorge";
//   const clienteApellido = "Kong";
//   const clienteDNI = "00000813";
//   const celularIMEI = "123456789012345";
//   const celularMarca = "Samsung";
//   const celularModelo = "Galaxy S21";
//   const descripcionProblema = "Pantalla rota";
//   const tecnicoIndex = 0; // Asumimos que es el primer técnico de la sucursal

//   // Verificar si el celular está robado
//   if (central.buscarCelularRobadoPorImei(celularIMEI)) {
//     console.log('El celular con este IMEI está reportado como robado. No se puede generar el ticket.');
//     return;
//   }

//   // Crear o buscar el cliente
//   let cliente = central.clientes.find(c => c.dni === clienteDNI);
//   if (!cliente) {
//     cliente = new Cliente(clienteNombre, clienteApellido, clienteDNI, "Dirección simulada", "Teléfono simulado");
//     central.sucursales[sucursalIndex].agregarCliente(cliente);
//   }

//   // Crear el celular
//   const celular = new Telefono(celularIMEI, celularMarca, celularModelo);

//   // Obtener el técnico asignado
//   const tecnicoAsignado = central.sucursales[sucursalIndex].tecnicos[tecnicoIndex];

//   if (!tecnicoAsignado) {
//     console.log('Error: No se pudo asignar un técnico. Por favor, seleccione un técnico válido.');
//     return;
//   }

//   // Crear el ticket
//   const ticket = new Ticket(celular, descripcionProblema, 0, 0, cliente, tecnicoAsignado);
//   ticket.diagnosticoInicial = "Diagnóstico inicial simulado1"; // Agregamos un diagnóstico inicial simulado

//   // Agregar el ticket a la sucursal
//   central.sucursales[sucursalIndex].agregarTicket(ticket);

//   // Guardar los cambios en la sucursal específica
//   central.sucursales[sucursalIndex].guardarDatos();

//   // Guardar los cambios en la central
//   central.guardarSucursales();

//   console.log('Ticket generado con éxito.');
//   console.log('Detalles del ticket:', ticket);

//   // Simulación de actualización de la vista de tickets
//   console.log('Vista de tickets actualizada para la sucursal:', central.sucursales[sucursalIndex].nombre);

// }

// // Ejecutar la simulación
// simularGenerarTicket();

// // Creación de un nuevo celular robado
// const celularRobado = new Telefono("1234567890", "Samsung", "Galaxy S21", "robado");

// // Registrar el celular robado en la central
// central.agregarCelularRobado(celularRobado);
// console.log(`El celular ${celularRobado.marca} ${celularRobado.modelo} con IMEI ${celularRobado.imei} ha sido registrado como robado.`);

// Creación de un nuevo cliente
// const cliente1 = new Cliente("Jorge", "Kong", "00000813", "Calle 123, Ciudad", "0987654321");
// const cliente2 = new Cliente("Kassandra", "Flores", "48239347", "Calle 456, San Pedro", "0987654322");


// // Registrar el nuevo cliente en la central
// central.agregarCliente(cliente1);
// central.agregarCliente(cliente2);

// // Creación de celulares para los clientes
// const celular1 = new Telefono("1234567890", "Samsung", "Galaxy S21");
// const celular2 = new Telefono("2345678901", "Xiaomi", "Redmi Note 9");

// // Asignación de celulares a los clientes
// cliente1.telefono = celular1;
// cliente2.telefono = celular2;

// // Verificación de celulares de los clientes
// console.log(`El celular de ${cliente1.nombre} es un ${cliente1.telefono.marca} ${cliente1.telefono.modelo}.`);
// console.log(`El celular de ${cliente2.nombre} es un ${cliente2.telefono.marca} ${cliente2.telefono.modelo}.`);


// console.log(`Bienvenido ${cliente1.nombre} ${cliente1.apellido}. Tu dirección es ${cliente1.direccion} y tu teléfono es ${cliente1.telefono}.`);
// const marca = "Samsung";
// const resultado = cliente1.buscarSucursalYMarca(central, marca);

// if (resultado) {
//   const tecnico = resultado.sucursal.buscarTecnicoPorMarca(resultado.marca);

//   if (tecnico) {
//     console.log(`${cliente1.nombre} ${cliente1.apellido}, puedes reparar tu celular ${marca} en la sucursal ${resultado.sucursal.nombre}. El técnico disponible es ${tecnico.nombre} ${tecnico.apellido}.`);
//     resultado.sucursal.agregarCliente(cliente1);
    
//     // Verificar si ya existe un ticket para este cliente y celular
//     const ticketExistente = resultado.sucursal.tickets.find(t => 
//       t.cliente.dni === cliente1.dni && t.telefono.imei === celular1.imei
//     );
    

//     if (!ticketExistente) {
//       // Creación de un nuevo ticket para el cliente 1
//       const ticket1 = new Ticket(
//         celular1,
//         "Reparación de pantalla",
//         70,
//         500,
//         cliente1,
//         tecnico
//       );
    
//       // Agregar el ticket a la sucursal
//       resultado.sucursal.agregarTicket(ticket1);
    
//       console.log(`Nuevo ticket creado y agregado a la sucursal ${resultado.sucursal.nombre}`);
    
//       // Autorizar e iniciar el servicio
//       ticket1.autorizar(true);
//       const servicioIniciado = ticket1.iniciarServicio(tecnico);
//       console.log(servicioIniciado);
//     } else {
//       console.log("Ya existe un ticket para este cliente y celular.");
//     }
//   } else {
//     console.log(`No hay un técnico disponible en la sucursal ${resultado.sucursal.nombre} que pueda reparar un celular ${marca}.`);
//   }
// } else {
//   console.log(`No hay sucursales disponibles que puedan reparar un celular ${marca}.`);
// }

// const marca2 = "Xiaomi";

// const resultado2 = cliente2.buscarSucursalYMarca(central, marca2);


// if (resultado2) {
//   const tecnico = resultado2.sucursal.buscarTecnicoPorMarca(resultado2.marca);

//   if (tecnico) {
//     console.log(`${cliente2.nombre} ${cliente2.apellido}, puedes reparar tu celular ${marca2} en la sucursal ${resultado2.sucursal.nombre}. El técnico disponible es ${tecnico.nombre} ${tecnico.apellido}.`);
//     resultado2.sucursal.agregarCliente(cliente2);
//     // Creación de un nuevo ticket para el cliente 2
//     const ticket2 = new Ticket(celular2, "Reparación de batería", 80, 600, cliente2);
//     ticket2.autorizar(1);


//     // Agregar el ticket del cliente 2 a la sucursal que le corresponde
//     // cliente2.agregarTicket(ticket2);
//     resultado.sucursal.agregarTicket(ticket2);

//     Servicio2 = ticket2.iniciarServicio(tecnico2);
//     console.log(Servicio2);
//   } else {
//     console.log(`No hay un técnico disponible en la sucursal ${resultado2.sucursal.nombre} que pueda reparar un celular ${marca2}.`);
//   }
// } else {
//   console.log(`No hay sucursales disponibles que puedan reparar un celular ${marca2}.`);
// }














// const repuesto1 = {
//   nombre: "Bateria Original",
//   precio: 350,
// };

// ticket2.agregarRepuesto(repuesto1);

// console.log(ticket2.repuestos);

// console.log(`Estado del equipo ${celular2.imei} en la sucursal ${sucursal2.nombre}: ${sucursal2.mostrarEstadoEquipo(celular2.imei)}`);

// // Finalizar el servicio del ticket 2
// const finalizarServicio2 = ticket2.finalizarServicio();
// console.log(finalizarServicio2);

// // Calcular el pago total del ticket 2
// const pagoTotalTicket2 = ticket2.calcularPagoTotal();
// console.log(`El pago total al cliente ${cliente2.nombre} es de ${pagoTotalTicket2}.`);
