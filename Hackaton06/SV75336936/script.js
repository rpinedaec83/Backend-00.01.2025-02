// Clase Telefono
class Telefono {
  #imei;
  #marca;
  #modelo;
  #estado;
  #esRobado;

  constructor(imei, marca, modelo, estado = "en espera") {
    this.#imei = imei;
    this.#marca = marca;
    this.#modelo = modelo;
    this.#estado = estado;
    this.#esRobado = false;
  }

  get imei() {
    return this.#imei;
  }

  get marca() {
    return this.#marca;
  }

  get modelo() {
    return this.#modelo;
  }

  get estado() {
    return this.#estado;
  }

  actualizarEstado(nuevoEstado) {
    if (["en reparacion", "reparado", "en espera"].includes(nuevoEstado)) {
      this.#estado = nuevoEstado;
    } else {
      console.error("Estado no válido.");
    }
  }

  marcarComoRobado() {
    this.#esRobado = true;
  }

  esCelularRobado() {
    return this.#esRobado;
  }
}

// Clase Central
class Central {
  celularesRobados = new Map();
  sucursales = [];

  agregarCelularRobado(celular) {
    if (!this.celularesRobados.has(celular.imei)) {
      this.celularesRobados.set(celular.imei, celular);
    } else {
      console.warn("El celular ya está registrado como robado.");
    }
  }

  eliminarCelularRobado(imei) {
    this.celularesRobados.delete(imei);
  }

  agregarSucursal(sucursal) {
    if (this.sucursales.find((s) => s.nombre === sucursal.nombre)) {
      console.warn("La sucursal ya está registrada.");
      return;
    }
    this.sucursales.push(sucursal);
    this.guardarSucursales();
  }

  guardarSucursales() {
    const data = this.sucursales.map((s) => ({
      nombre: s.nombre,
      direccion: s.direccion,
      contacto: s.contacto,
    }));
    localStorage.setItem("sucursales", JSON.stringify(data));
  }

  cargarSucursales() {
    const data = JSON.parse(localStorage.getItem("sucursales")) || [];
    this.sucursales = data.map(
      (s) => new Sucursal(s.nombre, s.direccion, s.contacto, this)
    );
  }
}

// Clase Tecnico
class Tecnico {
  constructor(nombre, especialidad) {
    this.nombre = nombre;
    this.especialidad = especialidad;
  }
}

// Clase Sucursal
class Sucursal {
  tecnicos = [];
  clientes = [];
  tickets = [];
  nombre;
  direccion;
  contacto;
  central;

  constructor(nombre, direccion, contacto, central) {
    this.nombre = nombre;
    this.direccion = direccion;
    this.contacto = contacto;
    this.central = central;
  }

  agregarTecnico(tecnico) {
    if (!this.tecnicos.find((t) => t.nombre === tecnico.nombre)) {
      this.tecnicos.push(tecnico);
    } else {
      console.warn("Técnico ya registrado en esta sucursal.");
    }
  }

  agregarTicket(ticket) {
    if (this.central.celularesRobados.has(ticket.telefono.imei)) {
      console.error("El celular no puede ser reparado porque es robado.");
      return;
    }
    this.tickets.push(ticket);
  }
}

// Clase Ticket
class Ticket {
  constructor(telefono, cliente, tecnico = null) {
    this.telefono = telefono;
    this.cliente = cliente;
    this.tecnico = tecnico;
  }

  asignarTecnico(tecnico) {
    this.tecnico = tecnico;
  }
}

// Inicializar Central
const tecnoIdat = new Central();
tecnoIdat.cargarSucursales();