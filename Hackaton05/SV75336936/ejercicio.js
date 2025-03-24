class Telefono {
    constructor(imei, marca, modelo) {
      this.imei = imei;
      this.marca = marca;
      this.modelo = modelo;
      this.estado = "ingresado";
      this.esRobado = false;
    }
  
    actualizarEstado(estado) {
      this.estado = estado;
    }
  
    reportarComoRobado() {
      this.esRobado = true;
    }
  }
  
  class Tecnico {
    constructor(nombre, skills) {
      this.nombre = nombre;
      this.skills = skills; // Ejemplo: ["Samsung", "Apple"]
    }
  
    puedeReparar(marca) {
      return this.skills.includes(marca);
    }
  }
  
  class Central {
    constructor() {
      this.celularesReportados = [];
      this.sucursales = [];
    }
  
    reportarCelular(telefono) {
      telefono.reportarComoRobado();
      this.celularesReportados.push(telefono);
    }
  
    agregarSucursal(sucursal) {
      this.sucursales.push(sucursal);
    }
  }
  
  class Ticket {
    constructor(telefono, diagnostico, porcentaje, montoFinal, cliente, tecnico) {
      this.telefono = telefono;
      this.diagnostico = diagnostico;
      this.porcentaje = porcentaje;
      this.montoFinal = montoFinal;
      this.cliente = cliente;
      this.autorizado = false;
      this.repuestos = [];
      this.tecnico = tecnico;
      this.estado = "inicializado";
    }
  
    autorizar() {
      if (this.porcentaje >= 50) {
        this.autorizado = true;
      } else {
        throw new Error("Debe pagar al menos el 50% para autorizar la reparación.");
      }
    }
  
    agregarRepuesto(repuesto) {
      if (!repuesto) {
        throw new Error("Repuesto inválido");
      }
      this.repuestos.push(repuesto);
    }
  
    iniciarServicio() {
      if (!this.autorizado) {
        return "No autorizado";
      }
      if (!this.tecnico.puedeReparar(this.telefono.marca)) {
        return "No hay técnico con la habilidad para esta marca";
      }
      
      this.telefono.actualizarEstado("en reparación");
      this.estado = "en proceso";
      return "Servicio iniciado";
    }
  
    finalizarServicio() {
      if (this.estado !== "en proceso") {
        return "No se puede finalizar un servicio que no ha sido iniciado.";
      }
      
      this.telefono.actualizarEstado("reparado");
      this.estado = "finalizado";
      return "Servicio finalizado";
    }
  }
  
  class Sucursal {
    constructor(nombre, direccion, contacto, central) {
      this.nombre = nombre;
      this.direccion = direccion;
      this.contacto = contacto;
      this.central = central;
      this.tecnicos = [];
      this.tickets = [];
    }
  
    agregarTecnico(tecnico) {
      this.tecnicos.push(tecnico);
    }
  
    agregarTicket(ticket) {
      if (this.central.celularesReportados.find((e) => e.imei === ticket.telefono.imei)) {
        console.error("El celular no puede ser reparado porque es robado.");
        return;
      }
      this.tickets.push(ticket);
    }
  }
  
  // Creación de la central y sucursales
  const central = new Central();
  const sucursalLima = new Sucursal("TecnoLima", "Av. Lima 123", "987654321", central);
  central.agregarSucursal(sucursalLima);
  
  // Creación de técnicos
  const tecnicoCarlos = new Tecnico("Carlos", ["Samsung", "Apple"]);
  sucursalLima.agregarTecnico(tecnicoCarlos);
  
  // Creación de celulares
  const samsungS23 = new Telefono("471874334", "Samsung", "S23 Ultra");
  const iphone14 = new Telefono("99887766", "Apple", "iPhone 14");
  
  // Reportar celular como robado
  central.reportarCelular(samsungS23);
  
  // Creación de ticket con técnico asignado
  const ticket1 = new Ticket(iphone14, "Pantalla rota", 50, 300, "Juan Pérez", tecnicoCarlos);
  ticket1.autorizar();
  sucursalLima.agregarTicket(ticket1);
  console.log(ticket1.iniciarServicio());
  
  // Agregar nueva sucursal y ticket dinámicamente
  const nuevaSucursal = new Sucursal("TecnoArequipa", "Av. Arequipa 456", "123456789", central);
  central.agregarSucursal(nuevaSucursal);
  console.log("Sucursal agregada:", nuevaSucursal);
  
  const nuevoTelefono = new Telefono("1122334455", "Xiaomi", "Redmi Note 10");
  const tecnicoPedro = new Tecnico("Pedro", ["Xiaomi", "Samsung"]);
  nuevaSucursal.agregarTecnico(tecnicoPedro);
  
  const nuevoTicket = new Ticket(nuevoTelefono, "Batería dañada", 60, 200, "Ana López", tecnicoPedro);
  nuevoTicket.autorizar();
  nuevaSucursal.agregarTicket(nuevoTicket);
  console.log("Nuevo ticket agregado:", nuevoTicket);