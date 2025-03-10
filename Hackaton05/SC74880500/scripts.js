class Telefono {
    constructor(numeroSerie, imei, marca, sistemaOperativo) {
        this.numeroSerie = numeroSerie;
        this.imei = imei;
        this.marca = marca;
        this.sistemaOperativo = sistemaOperativo; // Android o iOS
        this.estado = "En espera de diagnóstico";
    }

    verificarTelefono() {
        // Verifica si el IMEI o el número de serie está reportado
        if (this.imei === "reportado" || this.numeroSerie === "reportado") {
            return false;
        }
        return true;
    }

    cambiarEstado(estado) {
        this.estado = estado;
    }
}

class Tecnico {
    constructor(nombre, skills) {
        this.nombre = nombre;
        this.skills = skills; // Habilidades de los técnicos (por ejemplo, ["Android", "iOS"])
    }

    asignarMarca(marca) {
        if (this.skills.includes(marca)) {
            return true;
        }
        return false;
    }
}

class Reparacion {
    constructor(telefono, tecnico) {
        this.telefono = telefono;
        this.tecnico = tecnico;
        this.diagnostico = null;
        this.repuestos = [];
        this.estado = "En espera de revisión";
        this.autorizacion = false;
        this.abono = 0;
    }

    diagnosticoInicial(diagnostico) {
        this.diagnostico = diagnostico;
        this.estado = "Reparación en proceso";
    }

    agregarRepuesto(repuesto) {
        this.repuestos.push(repuesto);
    }

    autorizarServicio(autorizacion, abono) {
        this.autorizacion = autorizacion;
        this.abono = abono;
        if (this.autorizacion && this.abono >= 50) {
            this.estado = "Autorizado para reparación";
        } else {
            this.estado = "No autorizado";
        }
    }
}

class Sucursal {
    constructor(nombre) {
        this.nombre = nombre;
        this.tecnicos = [];
        this.reparaciones = [];
    }

    agregarTecnico(tecnico) {
        this.tecnicos.push(tecnico);
    }

    asignarReparacion(telefono) {
        if (!telefono.verificarTelefono()) {
            return "Telefono reportado. No se puede proceder con la reparación.";
        }

        // Buscar técnico adecuado
        let tecnicoAsignado = null;
        this.tecnicos.forEach(tecnico => {
            if (tecnico.asignarMarca(telefono.sistemaOperativo)) {
                tecnicoAsignado = tecnico;
            }
        });

        if (!tecnicoAsignado) {
            return "No se encontró técnico para este sistema operativo.";
        }

        const reparacion = new Reparacion(telefono, tecnicoAsignado);
        this.reparaciones.push(reparacion);
        return reparacion;
    }

    cambiarEstadoReparacion(telefono, nuevoEstado) {
        let reparacion = this.reparaciones.find(r => r.telefono === telefono);
        if (reparacion) {
            reparacion.telefono.cambiarEstado(nuevoEstado);
        }
    }
}

// Crear instancias de técnicos y sucursal
let tecnico1 = new Tecnico("Juan", ["Android", "Samsung"]);
let tecnico2 = new Tecnico("Maria", ["iOS", "Apple"]);
let sucursal1 = new Sucursal("Sucursal A");

sucursal1.agregarTecnico(tecnico1);
sucursal1.agregarTecnico(tecnico2);

// Crear teléfono y proceso de reparación
let telefono = new Telefono("12345", "IMEI001", "Samsung", "Android");
let reparacion = sucursal1.asignarReparacion(telefono);

if (reparacion !== "No se encontró técnico para este sistema operativo.") {
    reparacion.diagnosticoInicial("Pantalla rota");
    reparacion.agregarRepuesto("Pantalla nueva");
    reparacion.autorizarServicio(true, 50); // Autorización y abono del 50%
    console.log(reparacion);
} else {
    console.log(reparacion);
}
