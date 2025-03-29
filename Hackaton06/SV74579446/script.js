class Central {
    constructor() {
        this.celularesRobados = new Set(JSON.parse(localStorage.getItem("celularesRobados")) || []);
        this.celulares = JSON.parse(localStorage.getItem("celulares")) || [];
        this.actualizarLista();
    }

    guardarDatos() {
        localStorage.setItem("celulares", JSON.stringify(this.celulares));
    }

    verificarIMEI(imei) {
        if (!imei) {
            alert("Ingrese un IMEI válido.");
            return false;
        }

        if (this.celularesRobados.has(imei)) {
            alert("Este celular está reportado como robado y no puede ser procesado.");
            return false;
        }

        alert("IMEI válido. Puede continuar con el registro.");
        this.mostrarFormularios();
        return true;
    }

    mostrarFormularios() {
        document.getElementById("verificacionIMEI").style.display = "none"; // Ocultar formulario de verificación
        document.getElementById("formularios").style.display = "block"; // Mostrar los demás formularios
    }

    registrarCelular() {
        const imei = document.getElementById("imei").value;
        const numeroSerie = document.getElementById("numeroSerie").value;
        const marca = document.getElementById("marca").value;
        const autorizacion = document.getElementById("autorizacion").checked;
        const abono = parseFloat(document.getElementById("abono").value);

        if (!imei || !numeroSerie || !autorizacion || abono < 50) {
            alert("El celular no cumple con los requisitos para la reparación.");
            return;
        }

        const celular = {
            imei,
            numeroSerie,
            marca,
            estado: "Primera Revisión",
            diagnostico: "Pendiente",
            repuestos: []
        };

        this.celulares.push(celular);
        this.guardarDatos();
        this.actualizarLista();
    }

    actualizarLista() {
        const listaCelulares = document.getElementById("listaCelulares");
        listaCelulares.innerHTML = "";
        this.celulares.forEach(celular => {
            const row = `<tr>
                <td>${celular.imei}</td>
                <td>${celular.numeroSerie}</td>
                <td>${celular.marca}</td>
                <td>${celular.diagnostico || "Sin Diagnóstico"}</td>
                <td>${celular.estado}</td>
            </tr>`;
            listaCelulares.innerHTML += row;
        });
    }
}

const central = new Central();

// Agregar evento al botón de verificar IMEI
document.getElementById("verificarIMEIBtn").addEventListener("click", () => {
    const imei = document.getElementById("imei").value;
    central.verificarIMEI(imei);
});

// Agregar evento al botón de registrar celular
document.getElementById("registrarCelularBtn").addEventListener("click", () => {
    central.registrarCelular();
});