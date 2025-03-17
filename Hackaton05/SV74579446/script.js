class Central {
    constructor() {
        this.sucursales = [];
        this.celularesRobados = new Set();
        this.tecnicos = [];
        this.celulares = [];
    }

    registrarCelular(imei, numeroSerie, marca, autorizacion, abono) {
        if (!imei || !numeroSerie || !autorizacion || abono < 50) {
            alert("El celular no cumple con los requisitos para la reparación.");
            return;
        }
        if (this.celularesRobados.has(imei)) {
            alert("Este celular está reportado y no puede ser reparado.");
            return;
        }
        const celular = { 
            imei, 
            numeroSerie, 
            marca, 
            estado: "Pendiente de Diagnóstico", 
            diagnostico: "", 
            repuestos: [] 
        };
        this.celulares.push(celular);
        this.actualizarLista();
    }

    registrarTecnico(nombre, skills) {
        const tecnico = { nombre, skills: skills.split(",") };
        this.tecnicos.push(tecnico);
    }

    asignarDiagnostico(imei, diagnostico) {
        const celular = this.celulares.find(c => c.imei === imei);
        if (celular) {
            celular.diagnostico = diagnostico;
            celular.estado = "Esperando Repuestos";
            this.actualizarLista();
        }
    }

    agregarRepuesto(imei, repuesto) {
        const celular = this.celulares.find(c => c.imei === imei);
        if (celular) {
            celular.repuestos.push(repuesto);
            celular.estado = "En Reparación";
            this.actualizarLista();
        }
    }

    actualizarLista() {
        const listaCelulares = document.getElementById("listaCelulares");
        listaCelulares.innerHTML = "";
        this.celulares.forEach(celular => {
            const row = <tr>
                <td>${celular.imei}</td>
                <td>${celular.numeroSerie}</td>
                <td>${celular.marca}</td>
                <td>${celular.diagnostico || "Sin Diagnóstico"}</td>
                <td>${celular.estado}</td>
            </tr>;
            listaCelulares.innerHTML += row;
        });
    }
}

const central = new Central();

function registrarCelular() {
    const imei = document.getElementById("imei").value;
    const numeroSerie = document.getElementById("numeroSerie").value;
    const marca = document.getElementById("marca").value;
    const autorizacion = document.getElementById("autorizacion").checked;
    const abono = parseFloat(document.getElementById("abono").value);
    central.registrarCelular(imei, numeroSerie, marca, autorizacion, abono);
}

function registrarTecnico() {
    const nombre = document.getElementById("nombreTecnico").value;
    const skills = document.getElementById("skills").value;
    central.registrarTecnico(nombre, skills);
}

function asignarDiagnostico() {
    const imei = document.getElementById("imeiDiagnostico").value;
    const diagnostico = document.getElementById("diagnostico").value;
    central.asignarDiagnostico(imei, diagnostico);
}

function agregarRepuesto() {
    const imei = document.getElementById("imeiRepuesto").value;
    const repuesto = document.getElementById("repuesto").value;
    central.agregarRepuesto(imei, repuesto);
}