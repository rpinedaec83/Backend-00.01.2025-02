const Reparar = (function () {

    return {
        init: function (parametros) {
            console.log(parametros);
            nombreTienda = parametros.nombre;
        },
    };
})();


class Telefono {

    constructor(imei, serie, modelo, marca, so) {
        this.imei = imei;
        this.serie = serie;
        this.modelo = modelo;
        this.marca = marca;
        this.so = so;
        this.estado = []


        this.reportado = false;
    };

    actualizarEstado(estado) {
        this.estado.push(estado);
    };

    actualizarReporteTelefono(reporte) {
        this.reportado = reporte;
    };

};


class Usuario {
    constructor(dni, nombre) {
        this.dni = dni;
        this.nombre = nombre;
    }
}

class Tecnico {
    constructor(dni, nombre, habilidad) {
        this.dni = dni;
        this.nombre = nombre;
        this.habilidad = habilidad;
    }

}


class Central {
    sucursales = [];
    telefonosReportados = [];

    agregarTelefonosReportados(telefono) {
        this.telefonosReportados.push(telefono);
    };

    agregarSucursales(sucursal) {
        this.sucursales.push(sucursal);
    };

    eliminarTelefonosReportados(imei) {

        const index = this.telefonosReportados.indexOf(imei);

        if (index !== -1) {
            this.telefonosReportados.splice(index, 1);
            console.log("Teléfono eliminado:", imei);
            return true;
        } else {
            console.log("Teléfono no encontrado.");
        }
    }

};

const estadosTelefonos = {
    revisado: "Revisado",
    taller: "En taller",
    finalizado: "Finalizado"
}


class Sucursal {

    constructor(nombre, direccion, contacto, central, telefono) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.contacto = contacto;
        this.central = central;

        this.telefono = telefono;
        this.tecnicos = [];
        this.clientes = [];
        this.tickets = [];
    }

    agregarTicket(ticket) {
        let existeTelefonoReportado = this.central.telefonosReportados.find((e) => e.imei === ticket.telefono.imei);

        if (existeTelefonoReportado) {
            console.error("¡El celular no puede ser reparado porque está reportado!")
        } else {
            this.telefono.actualizarEstado(estadosTelefonos.revisado);
            this.tickets.push(ticket);
            return this.telefono.estado;
        }
    }

    agregarTecnico(tecnico) {
        this.tecnicos.push(tecnico);
    }

    agregarCliente(cliente) {
        this.clientes.push(cliente);
    }

}


class Ticket {

    constructor(telefono, diagnostico, porcentaje, costoFinal, usuario, tecnico) {
        this.telefono = telefono;
        this.diagnostico = diagnostico;
        this.porcentaje = porcentaje;
        this.costoFinal = costoFinal;
        this.usuario = usuario;
        this.tecnico = tecnico;

        this.autorizarReparacion = false;
        this.repuestos = [];
    }

    autorizar(valor) {
        this.autorizarReparacion = valor;
    }

    agregarRepuesto(repuesto) {
        if (!repuesto) {
            throw new Error("repuesto invalido");
        } else {
            this.repuestos.push(repuesto);
        }
    }

    inicioServicio() {

        let tecnicoConHabilidad = this.tecnico.habilidad.includes(this.telefono.so);

        if (this.autorizarReparacion && this.porcentaje >= 50 && tecnicoConHabilidad) {
            this.telefono.actualizarEstado(estadosTelefonos.taller);
            return true;
        } else if (!(this.autorizarReparacion) && this.porcentaje >= 50 && tecnicoConHabilidad) {
            return console.error("¡El teléfono no puede ser reparado porque necesita autorización por parte del usuario!");
        } else if (this.autorizarReparacion && this.porcentaje < 50 && tecnicoConHabilidad) {
            return console.error("¡El teléfono no puede ser reparado porque el usuario no ha abonado más del 50% para la reparación!");
        } else if (this.autorizarReparacion && this.porcentaje >= 50 && tecnicoConHabilidad == false) {
            return console.error("¡El teléfono no puede ser reparado porque no contamos con técnico para esa marca!");
        }
        else {
            return console.error("¡El celular no cumple con todos los requerimientos básicos!");
        }

    }

    entregarTelefono(entregar) {

        if ((this.costoFinal !== entregar.costo) || (this.telefono.estado.lastIndexOf(entregar.estado) !== this.telefono.estado.length - 1)) {
            console.error("No se puede entregar el teléfono debido al incumpliento en el costo o el estado.");

        }
        else {
            console.log("Costo Final:", this.costoFinal);
            console.log("Estado del teléfono:", this.telefono.estado.join(' | '));
            console.log("El teléfono puede ser entregado. Todo está conforme");
            return true;
        }

    }

    finalizarServicio() {
        this.telefono.actualizarEstado(estadosTelefonos.finalizado);
        return "Se ha finalizado con la reparación del teléfono.";
    }


}



//Creo 2 instancias (objetos) de la clase "Telefono".
let telefono1 = new Telefono('1410151618', 'ld1415', 'Honor 7xb', 'Redmi', 'Android');
let telefono2 = new Telefono('5214789654', 'dl1024', 'Iphone 15Pro Max', 'Apple', 'iOS');

//Creo 1 instancia (objeto) de la clase "Central".
let tecnoIdat = new Central();

//Creo 2 instancias (objetos) de la clase "Sucursal".
let tecnoIdatCajamarca = new Sucursal('Idat Cajamarca', 'Jr. Alfonso Ugarte Nº 550', '978412365', tecnoIdat, telefono1);
let tecnoIdatTrujillo = new Sucursal('Idat Trujillo', 'Av. Miguel Grau Nº 4851', '978746159', tecnoIdat, telefono1);

//Agrego 2 sucursales al obejeto "tecnoIdat" de la clase "Central".
tecnoIdat.agregarSucursales(tecnoIdatCajamarca);
tecnoIdat.agregarSucursales(tecnoIdatTrujillo);

//Agrego el "telefono1" como robado a al objeto "tecnoIdat" de la clase "Central".
tecnoIdat.agregarTelefonosReportados(telefono2);
console.log(tecnoIdat)

//Llamo al método "eliminarTelefonosReportados" de la instancia (objeto) "tecnoIdat" de la clase "Sucursal" para eliminar el teléfono que ha sido reportado.
console.log(tecnoIdat.eliminarTelefonosReportados(telefono2))

telefono1.actualizarEstado('Ingresado');

const usuario1 = new Usuario('78475695', 'Juan Alvarado');
const tecnico1 = new Tecnico('74126958', 'Martín Sabogal', 'Android');
const newticket1 = new Ticket(telefono1, 'Pantalla rota', 55, 200, usuario1, tecnico1);

const reporteTelefono = tecnoIdatCajamarca.agregarTicket(newticket1);

if (reporteTelefono) {
    console.log(`Reporte del teléfono: ${reporteTelefono.join(' | ')}`);
    newticket1.autorizar(true);
    let validarServicio = newticket1.inicioServicio();

    if (validarServicio) {
        console.log(`Servicio inicializado.\nEstado: ${newticket1.telefono.estado.join(' | ')}`)

        newticket1.agregarRepuesto(['Pantalla', 'Carcasa']);

        let estadoFinalTelefono = {
            estado: estadosTelefonos.finalizado,
            costo: 200
        }

        console.log(newticket1.finalizarServicio());

        let validarEntrega = newticket1.entregarTelefono(estadoFinalTelefono);

        if (validarEntrega) {
            console.log(newticket1)
            console.log(newticket1.telefono.estado)
        }

    }

}


