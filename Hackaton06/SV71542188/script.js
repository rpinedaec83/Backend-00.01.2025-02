// Clase Telefono
class Telefono {
    constructor(imei, marca, modelo) {
        this.imei = imei;
        this.marca = marca;
        this.modelo = modelo;
        this.estado = 'Ingresado'; // Estado inicial del teléfono
        this.robado = false;
    }

    actualizarEstado(estado) {
        this.estado = estado;
    }

    reportarComoRobado() {
        this.robado = true;
    }
}

// Clase Central
class Central {
    constructor() {
        this.celularesRobados = JSON.parse(localStorage.getItem('celularesRobados')) || [];
        this.sucursales = JSON.parse(localStorage.getItem('sucursales')) || [];
    }

    agregarCelularRobado(telefono) {
        this.celularesRobados.push(telefono);
        localStorage.setItem('celularesRobados', JSON.stringify(this.celularesRobados));
    }

    eliminarCelularRobado(imei) {
        this.celularesRobados = this.celularesRobados.filter((tel) => tel.imei !== imei);
        localStorage.setItem('celularesRobados', JSON.stringify(this.celularesRobados));
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
          }));
          localStorage.setItem("sucursales", JSON.stringify(sucursalesTemporal));
        }
    

    addAllSucursal(dataLocal) {
        this.sucursales = dataLocal.map(
            (sucursal) => new Sucursal(sucursal.nombre, sucursal.direccion, sucursal.contacto, this)
        );
    }}


// Clase Ticket
class Ticket {
    constructor(telefono, diagnostico, cliente, montoFinal) {
        this.telefono = telefono;
        this.diagnostico = diagnostico;
        this.cliente = cliente;
        this.montoFinal = montoFinal;
        this.estado = 'Inicializado'; // Estado inicial del ticket
        this.autorizado = false;
        this.repuestos = [];
    }

    autorizar(abono) {
        if (abono >= this.montoFinal * 0.5) {
            this.autorizado = true;
            console.log('El ticket ha sido autorizado.');
        } else {
            console.log('El abono no es suficiente para autorizar el ticket.');
        }
    }

    agregarRepuesto(repuesto) {
        this.repuestos.push(repuesto);
    }

    iniciarServicio() {
        if (this.autorizado) {
            this.estado = 'En reparación';
            this.telefono.actualizarEstado('En reparación');
            console.log('El servicio ha sido iniciado.');
        } else {
            console.log('El servicio no puede ser iniciado sin autorización.');
        }
    }

    finalizarServicio() {
        this.estado = 'Finalizado';
        this.telefono.actualizarEstado('Reparado');
        console.log('El servicio ha sido finalizado.');
    }
}

// Clase Sucursal
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
        const celularRobado = this.central.celularesRobados.find((tel) => tel.imei === ticket.telefono.imei);
        if (celularRobado) {
            console.log('El teléfono está reportado como robado y no puede ser ingresado.');
        } else {
            this.tickets.push(ticket);
            console.log('El ticket ha sido agregado correctamente.');
        }
    }
}

// Inicialización de datos
const init = () => {
    const tecnoIdat = new Central();

    const dataLocal = JSON.parse(localStorage.getItem('sucursales'));
    const dataPhoneReported = JSON.parse(localStorage.getItem('telefonosReportados'));

    if (dataPhoneReported) {
        tecnoIdat.celularesRobados = dataPhoneReported.map(
            (phone) => new Telefono(phone.imei, phone.marca, phone.modelo)
        );
    }

    if (dataLocal) {
        tecnoIdat.addAllSucursal(dataLocal);
    } else {
        // Crear sucursales predeterminadas
        const sucursalLima = new Sucursal('tecnoIdatLima', 'trujillo-ovalo larco', '8373849', tecnoIdat);
        const sucursalChiclayo = new Sucursal('tecnoIdatChiclayo', 'trujillo-ovalo larco', '8373849', tecnoIdat);
        const sucursalGuadalupe = new Sucursal('tecnoIdatGuadalupe', 'trujillo-ovalo larco', '8373849', tecnoIdat);

        tecnoIdat.agregarSucursal(sucursalLima);
        tecnoIdat.agregarSucursal(sucursalChiclayo);
        tecnoIdat.agregarSucursal(sucursalGuadalupe);

        localStorage.setItem('sucursales', JSON.stringify(tecnoIdat.sucursales));
    }

    return tecnoIdat;
};

const tecnoIdat = init();

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