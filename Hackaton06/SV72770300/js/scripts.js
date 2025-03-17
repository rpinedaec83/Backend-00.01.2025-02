const Reparar = (function () {

    return {
        init: function (parametros) {
            console.log(parametros);
            localStorage.setItem('Nombre', parametros.nombre);
            document.getElementById('nombreEmpresa').innerHTML = localStorage.getItem('Nombre')
        },
    };

})();


class Telefono {

    imei;
    serie;
    marca;
    modelo;
    so;
    estado = [];
    reportado = false;

    constructor(imei, serie, marca, modelo, so) {
        this.imei = imei;
        this.serie = serie;
        this.modelo = modelo;
        this.marca = marca;
        this.so = so;

    };

    actualizarEstado(estado) {
        this.estado.push(estado);
    };

};

class Cliente {
    dni = "";
    nombre = "";
    direccion = "";
    contacto = "";
    constructor(dni, nombre, direccion, contacto) {
        this.dni = dni;
        this.nombre = nombre;
        this.direccion = direccion;
        this.contacto = contacto;
    }
}


class Tecnico {
    dni = "";
    nombre = "";
    habilidad = []
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
    nombre = "";
    direccion = "";
    contacto = "";
    central = "";
    telefono = "";
    tecnicos = [];
    clientes = [];
    tickets = [];

    constructor(nombre, direccion, contacto, central) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.contacto = contacto;
        this.central = central;
    }

    agregarTecnico(tecnico) {
        this.tecnicos.push(tecnico);
    }

}


class Ticket {

    telefono = "";
    diagnostico = "";
    porcentaje = "";
    costoFinal = "";
    cliente = "";
    tecnico = "";
    autorizarReparacion = false;
    repuestos = [];

    constructor(telefono, diagnostico, porcentaje, costoFinal, cliente, tecnico) {
        this.telefono = telefono;
        this.diagnostico = diagnostico;
        this.porcentaje = porcentaje;
        this.costoFinal = costoFinal;
        this.cliente = cliente;
        this.tecnico = tecnico;

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
            this.telefono.estado.push(estadosTelefonos.taller)
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

    finalizarServicio() {
        this.telefono.estado.push(estadosTelefonos.finalizado);
        return "Se ha finalizado con la reparación del teléfono.";
    }

}


class Repuestos {
    id = "";
    nombre = "";

    constructor(id, nombre) {
        this.id = id;
        this.nombre = nombre;
    }

}


let tecnoIdat = new Central();

$(document).ready(function () {
    tecnoIdat.agregarSucursales(JSON.parse(localStorage.getItem("Sucursales")))
    console.log(tecnoIdat.sucursales)
});


let arrayRepuestos = [];
document.getElementById('btnAgregarRepuestos').addEventListener('click', async (e) => {
    e.preventDefault();
    console.log('Clic en botón "Agregar Repuestos"');

    const { value: formValues } = await Swal.fire({
        title: "Ingresa los datos del repuesto",
        icon: "info",
        showCloseButton: true,
        showCancelButton: true,
        confirmButtonText: "Guardar",
        cancelButtonText: "Cancelar",
        html: `
<div class="form-group">
<div >
<label>Id Repuesto</label>
<input id="idRepuesto" name="idRepuesto" type="text" placeholder="Escribe el id del repuesto" class="form-control input-md">

</div>
</div>


<div class="form-group">
<div >
<label>Nombre Repuesto</label>
<input id="nombreRepuesto" name="nombreRepuesto" type="text" placeholder="Escribe el nombre del repuesto" class="form-control input-md">

</div>
</div>



</div>`,

        preConfirm: () => {

            return {
                id: document.getElementById("idRepuesto").value,
                nombre: document.getElementById("nombreRepuesto").value,
            };
        },
    });

    if (formValues) {


        let repuesto = new Repuestos(
            formValues.id,
            formValues.nombre
        )

        arrayRepuestos.push(repuesto);
        localStorage.setItem("Repuestos", JSON.stringify(arrayRepuestos));
        console.log(arraySucursales);
        Swal.fire('Success', 'Sucursal agregada correctamente.', 'success');
    }

})

let arraySucursales = [];
document.getElementById('btnSucursal').addEventListener('click', async (e) => {
    e.preventDefault();
    console.log('Clic en botón "Nuevo Sucursal"');
    let nombreCentral = localStorage.getItem('Nombre')
    const tecnico = JSON.parse(localStorage.getItem('Técnicos'))

    const tecnicoSucursal = tecnico.map(element => {
        return `<option value="${element.dni}">${element.nombre}</option>`;
    }).join('');

    let tecnicosSucursales = [];

    console.log(tecnicoSucursal)
    const { value: formValues } = await Swal.fire({
        title: "Ingresa los datos de la sucursal",
        icon: "info",
        showCloseButton: true,
        showCancelButton: true,
        confirmButtonText: "Guardar",
        cancelButtonText: "Cancelar",
        html: `
<div class="form-group">
<div >
<input id="nombreSucursal" name="nombreSucursal" type="text" placeholder="Escribe el nombre de la sucursal" class="form-control input-md">

</div>
</div>

<!-- Text input-->
<div class="form-group">
<div >
<input id="direccionSucursal" name="direccionSucursal" type="text" placeholder="Escribe la dirección de la sucursal" class="form-control input-md">

</div>
</div>


<!-- Text input-->
<div class="form-group">
<div >
<input id="contactoSucursal" name="contactoSucursal" type="text" placeholder="Escribe el contacto de la sucursal" class="form-control input-md">

</div>
</div>

<!-- Text input-->
<div class="form-group">
<div >
<input id="nombreCentral" name="nombreCentral" type="text" placeholder="" value="${nombreCentral}" disabled class="form-control input-md">

</div>
</div>

<!-- Select input-->
<div class="form-group">
<div >
<select id="tecnicoSucursal" name="tecnicoSucursal" type="text" placeholder="" class="form-control input-md">
<option value="" disabled selected>Seleccionar un técnico</option>
${tecnicoSucursal}
</div>
</div>

<!-- Text input-->
<div class="form-group" id="divTecnicosSucursal" style="display: none;">
  <div>
    <input id="arrayTecnicosSucursal" name="arrayTecnicosSucursal" type="text" placeholder="" disabled class="form-control input-md">
  </div>
</div>


</div>`,

        preConfirm: () => {

            return {
                nombre: document.getElementById("nombreSucursal").value,
                direccion: document.getElementById("direccionSucursal").value,
                contacto: document.getElementById("contactoSucursal").value,
                central: document.getElementById("nombreCentral").value,
                tecnico: tecnicosSucursales
            };
        },

        didOpen: () => {

            document.getElementById('tecnicoSucursal').addEventListener('change', (e) => {
                e.preventDefault();
                const valor = document.getElementById('tecnicoSucursal').value;
                const findTecnico = tecnico.find(t => t.dni === valor);

                if (findTecnico) {
                    tecnicosSucursales.push(findTecnico);
                    // $('#divTecnicosSucursal').show();
                    const nombreTecnico = tecnicosSucursales.map(tecnico => tecnico.nombre);
                    document.getElementById("arrayTecnicosSucursal").value = nombreTecnico.join(', ');
                } else {
                    tecnicosSucursales = [];
                    // $('#divTecnicosSucursal').hide();
                    document.getElementById("arrayTecnicosSucursal").value = "";
                    console.log(tecnicosSucursales)
                }
            });
        }
    });

    if (formValues) {

        if (!formValues.tecnico || formValues.tecnico.length === 0) {
            Swal.fire('Error', 'Por favor, seleccione uno o varios técnicos.', 'error');
            return;
        } else {

            let sucursal = new Sucursal(
                formValues.nombre,
                formValues.direccion,
                formValues.contacto,
                formValues.central,
            );

            sucursal.agregarTecnico(formValues.tecnico)
            arraySucursales.push(sucursal);
            localStorage.setItem("Sucursales", JSON.stringify(arraySucursales));
            console.log(arraySucursales);
            Swal.fire('Success', 'Sucursal agregada correctamente.', 'success');
        }


    }

})


let arrayTecnicos = []
document.getElementById('btnTecnico').addEventListener('click', async (e) => {

    console.log('Clic en botón "Nuevo Técnico"');
    const { value: formValues } = await Swal.fire({
        title: "Ingresa los datos del técnico",
        icon: "info",
        showCloseButton: true,
        showCancelButton: true,
        confirmButtonText: "Guardar",
        cancelButtonText: "Cancelar",
        html: `<!-- Text input-->
<div class="form-group">
<div >
<input id="dniTecnico" name="dniTecnico" type="text" placeholder="Escribe el DNI del técnico" class="form-control input-md">

</div>
</div>

<!-- Text input-->
<div class="form-group">
<div >
<input id="nombreTecnico" name="nombreTecnico" type="text" placeholder="Escribe el nombre del técnico" class="form-control input-md">

</div>
</div>

<div class="form-group">

<label class="checkbox-inline" for="checkboxes-0">
    <input type="checkbox" name="checkboxes" id="chkAndroid" value="Android">
    Android
  </label>
<label class="checkbox-inline" for="checkboxes-0">
    <input type="checkbox" name="checkboxes" id="chkiOS" value="iOS">
    iOS
</label>

</div>
</div>

</div>`,

        preConfirm: () => {

            let habilidades = [];
            if ($("#chkAndroid:checked").val()) habilidades.push("Android");
            if ($("#chkiOS:checked").val()) habilidades.push("iOS");

            return {

                dni: $("#dniTecnico").val(),
                nombre: $("#nombreTecnico").val(),
                habilidad: habilidades
            }

        }

    });

    if (formValues) {
        let tecnico = new Tecnico(
            formValues.dni,
            formValues.nombre,
            formValues.habilidad
        )
        arrayTecnicos.push(JSON.parse(JSON.stringify(tecnico)));
        localStorage.setItem("Técnicos", JSON.stringify(arrayTecnicos))
        console.log(arrayTecnicos)
        Swal.fire('Success', 'Técnico agregado correctamente.', 'success');
    }

})


let arraytelefonos = [];
document.getElementById("btnTelefono").addEventListener("click", async (e) => {
    console.log('Clic en botón "Nuevo Teléfono"')
    const { value: formValues } = await Swal.fire({
        title: "Ingresa los datos del teléfono",
        icon: "info",
        showCloseButton: true,
        showCancelButton: true,
        confirmButtonText: "Guardar",
        cancelButtonText: "Cancelar",
        html: `<!-- Text input-->
<div class="form-group">
<div >
<input id="imei" name="imei" type="text" placeholder="Escribe el IMEI del teléfono" class="form-control input-md">

</div>
</div>

<!-- Text input-->
<div class="form-group">
<div >
<input id="serie" name="serie" type="text" placeholder="Escribe la serie del teléfono " class="form-control input-md">

</div>
</div>

<!-- Text input-->
<div class="form-group">
<div >
<input id="marca" name="marca" type="text" placeholder="Escribe la marca del teléfono" class="form-control input-md">

</div>
</div>

<!-- Text input-->
<div class="form-group">
<div >
<input id="modelo" name="modelo" type="text" placeholder="Escribe el modelo del teléfono" class="form-control input-md">

</div>
</div>

<!-- Text input-->
<div class="form-group">
<div >
<input id="so" name="so" type="text" placeholder="Escribe el Sistema Operativo del teléfono" class="form-control input-md">
</div>
</div>

</div>`,

        preConfirm: () => {
            return {
                imei: $("#imei").val(),
                serie: $("#serie").val(),
                marca: $("#marca").val(),
                modelo: $("#modelo").val(),
                so: $("#so").val()
            }
        }
    });


    if (formValues) {

        let telefono = new Telefono(
            formValues.imei,
            formValues.serie,
            formValues.marca,
            formValues.modelo,
            formValues.so
        )
        telefono.actualizarEstado('Ingresado')
        arraytelefonos.push(JSON.parse(JSON.stringify(telefono)));
        localStorage.setItem("Teléfonos", JSON.stringify(arraytelefonos))
        console.log(arrayTecnicos);
        Swal.fire('Success', 'Teléfono agregado correctamente.', 'success');
    }
})


let arrayClientes = [];
document.getElementById("btnCliente").addEventListener("click", async (e) => {
    console.log('Clic en botón "Nuevo Cliente"')
    const { value: formValues } = await Swal.fire({
        title: "Ingresa los datos del cliente",
        icon: "info",
        showCloseButton: true,
        showCancelButton: true,
        confirmButtonText: "Guardar",
        cancelButtonText: "Cancelar",
        html: `<!-- Text input-->
<div class="form-group">
<div >
<input id="dniCliente" name="dniCliente" type="text" placeholder="Escribe el DNI del usuario" class="form-control input-md">

</div>
</div>

<!-- Text input-->
<div class="form-group">
<div >
<input id="nombreCliente" name="nombreCliente" type="text" placeholder="Escribe el nombre del cliente " class="form-control input-md">

</div>
</div>

<!-- Text input-->
<div class="form-group">
<div >
<input id="direccionCliente" name="direccionCliente" type="text" placeholder="Escribe la direccion del cliente" class="form-control input-md">

</div>
</div>

<!-- Text input-->
<div class="form-group">
<div >
<input id="contactoCliente" name="contactoCliente" type="text" placeholder="Escribe el contacto del cliente" class="form-control input-md">

</div>
</div>

</div>`,

        preConfirm: () => {
            return {
                dni: document.getElementById("dniCliente").value,
                nombre: document.getElementById("nombreCliente").value,
                direccion: document.getElementById("direccionCliente").value,
                contacto: document.getElementById("contactoCliente").value
            }
        }
    });


    if (formValues) {

        let cliente = new Cliente(
            formValues.dni,
            formValues.nombre,
            formValues.direccion,
            formValues.contacto
        )
        arrayClientes.push(JSON.parse(JSON.stringify(cliente)));
        localStorage.setItem("Clientes", JSON.stringify(arrayClientes))
        console.log(arrayTecnicos);
        Swal.fire('Success', 'Cliente agregado correctamente.', 'success');
    }
})



document.getElementById('btnReparar').addEventListener("click", async (e) => {
    e.preventDefault();
    console.log('Clic en botón "Inicar Reparación"')

    const repuestos = JSON.parse(localStorage.getItem('Repuestos'));
    const tecnicos = JSON.parse(localStorage.getItem('Técnicos'));
    const sucursales = JSON.parse(localStorage.getItem('Sucursales'));
    const telefonos = JSON.parse(localStorage.getItem('Teléfonos'));
    const clientes = JSON.parse(localStorage.getItem('Clientes'));
    const reportados = JSON.parse(localStorage.getItem('Teléfonos Reportados'))

    console.log(reportados)
    console.log(sucursales)

    const repuesto = repuestos.map(element => {
        return `<option value="${element.id}">${element.nombre}</option>`;
    })
    const sucursal = sucursales.map(element => {
        return `<option value="${element.nombre}">${element.nombre}</option>`;
    });
    const clientesTicket = clientes.map(element => {
        return `<option value="${element.dni}">${element.dni}</option>`;
    });
    const telefonoReparar = telefonos.map(element => {
        return `<option value="${element.imei}">${element.imei}</option>`;
    });


    let repuestoTelefonos = [];


    const { value: formValues } = await Swal.fire({
        title: "Ingresa los datos para iniciar con la reparación",
        icon: "info",
        showCloseButton: true,
        showCancelButton: true,
        confirmButtonText: "Guardar",
        cancelButtonText: "Cancelar",
        html: `
        <div class="form-group">
            <div>
                <select id="telefonoReparar" name="telefonoReparar" type="text" placeholder="" class="form-control input-md">
                    <option value="" disabled selected>Seleccionar un teléfono a reparar</option>
                    ${telefonoReparar}
                </select>
                <input id="marcaTelefono" name="marcaTelefono" type="text" placeholder="Serie del teléfono" disabled class="form-control input-md">
                <input id="modeloTelefono" name="modeloTelefono" type="text" placeholder="IMEI del teléfono" disabled class="form-control input-md">
            </div>
        </div>

        <div class="form-group">
            <div>
                <input id="diagnosticoTelefono" name="diagnosticoTelefono" type="text" placeholder="Escribe el diagnóstico del teléfono" class="form-control input-md">
            </div>
        </div>

        <div class="form-group">
            <div>
                <input id="porcentajeAbono" name="porcentajeAbono" type="text" placeholder="Escribe el porcentaje abonado" class="form-control input-md">
            </div>
        </div>

        <div class="form-group">
            <div>
                <input id="costoReparacion" name="costoReparacion" type="text" placeholder="Escribe el costo de la reparación" class="form-control input-md">
            </div>
        </div>

        <div class="form-group">
            <label>Autorización</label>
            <div class="form-check">
                <input type="radio" class="form-check-input" id="radio1" name="opcionRadio" value="Sí">Sí
            </div>
            <div class="form-check">
                <input type="radio" class="form-check-input" id="radio2" name="opcionRadio" value="No" checked>No
            </div>
        </div>

        <div class="form-group">
            <div>
                <select id="repuesto" name="repuesto" type="text" class="form-control input-md">
                    <option value="" disabled selected>Seleccionar repuesto</option>
                    ${repuesto}
                </select>
                <input id="nombreRepuesto" name="nombreRepuesto" type="text" disabled placeholder="Repuestos" class="form-control input-md">
            </div>
        </div>


        <div class="form-group">
            <div>
                <select id="cliente" name="cliente" type="text" class="form-control input-md">
                    <option value="" disabled selected>Seleccionar un cliente</option>
                    ${clientesTicket}
                </select>
                <input id="nombreCliente" name="nombreCliente" type="text" disabled placeholder="Nombre del cliente" class="form-control input-md">
            </div>
        </div>

        <div class="form-group">
            <div>
                <select id="sucursal" name="sucursal" type="text" class="form-control input-md">
                    <option value="" disabled selected>Seleccionar sucursal</option>
                    ${sucursal}
                </select>
            </div>
        </div>

        <div class="form-group">
            <div>
                <select id="tecnico" name="tecnico" requerid type="text" class="form-control input-md">
                <option value="" disabled selected>Seleccionar técnico</option>
                </select>
            </div>
        </div>
    `,

        preConfirm: () => {

            const telefonoRepararInput = document.getElementById("telefonoReparar").value;
            const clienteInput = document.getElementById("cliente").value;
            const sucursalSelect = document.getElementById("sucursal").value;
            const tecnicoSelect = document.getElementById("tecnico").value;
            const diagnosticoInput = document.getElementById("diagnosticoTelefono").value;
            const abonoInput = document.getElementById("porcentajeAbono").value;
            const costoInput = document.getElementById("costoReparacion").value;
            const autorizacionRadio = document.querySelector('input[name="opcionRadio"]:checked').value;

            const findSucursalReparar = sucursales.find(s => s.nombre === sucursalSelect);
            const findTelefonoReparar = telefonos.find(t => t.imei === telefonoRepararInput);
            const findClienteReparar = clientes.find(c => c.dni === clienteInput);
            const findTecnicoReparar = tecnicos.find(t => t.dni === tecnicoSelect);

            return {
                telefono: findTelefonoReparar,
                diagnostico: diagnosticoInput,
                abono: abonoInput,
                costo: costoInput,
                cliente: findClienteReparar,
                tecnico: findTecnicoReparar,
                repuesto: repuestoTelefonos,
                autorizar: autorizacionRadio,
                sucursal: findSucursalReparar
            };
        },

        didOpen: () => {

            document.getElementById('telefonoReparar').addEventListener('change', (e) => {
                e.preventDefault();
                const telefono = document.getElementById('telefonoReparar').value;
                const findTelefono = telefonos.find(t => t.imei === telefono);

                if (findTelefono) {
                    document.getElementById("modeloTelefono").value = findTelefono.modelo;
                    document.getElementById("marcaTelefono").value = findTelefono.marca;
                }
            });


            document.getElementById('repuesto').addEventListener('change', (e) => {
                e.preventDefault();

                const valor = document.getElementById('repuesto').value;
                const findRepuesto = repuestos.find(r => r.id === valor)

                if (findRepuesto) {
                    repuestoTelefonos.push(findRepuesto);
                    const nombreRepuesto = repuestoTelefonos.map(r => r.nombre);

                    document.getElementById("nombreRepuesto").value = nombreRepuesto.join(', ');
                }
            });


            document.getElementById('cliente').addEventListener('change', (e) => {
                e.preventDefault();

                const cliente = document.getElementById('cliente').value;
                const findCliente = clientes.find(c => c.dni === cliente)

                if (findCliente) {
                    document.getElementById("nombreCliente").value = findCliente.nombre;
                }
            });


            document.getElementById('sucursal').addEventListener('change', (e) => {
                e.preventDefault();
                const sucursal = document.getElementById('sucursal').value;

                const findSucursal = sucursales.find(t => t.nombre === sucursal);
                console.log(findSucursal.tecnicos)

                findSucursal.tecnicos.forEach(element => {
                    const selectElement = document.getElementById("tecnico");
                    selectElement.innerHTML = "";


                    element.forEach(tecnico => {
                        const optionElement = document.createElement("option");
                        optionElement.value = tecnico.dni;
                        optionElement.textContent = tecnico.nombre;
                        selectElement.appendChild(optionElement);
                    });
                });

            });
        },
    });

    if (formValues) {

        let ticket = new Ticket(
            formValues.telefono,
            formValues.diagnostico,
            formValues.abono,
            formValues.costo,
            formValues.cliente,
            formValues.tecnico
        )

        let validarReparacion = reportados.find(s => s.imei === formValues.telefono.imei);

        if (validarReparacion) {
            Swal.fire('Error', 'Teléfono reportado. No se puede acceder a la reparación.', 'error');
            validarReparacion.reportado = true;
            validarReparacion.estado.push(estadosTelefonos.revisado);

            const index = reportados.findIndex(reporte => reporte.imei === validarReparacion.imei);
            localStorage.removeItem("Teléfonos Reportados")

            if (index !== -1) {
                reportados.splice(index, 1);
                reportados.push(validarReparacion)
                localStorage.setItem('Teléfonos Reportados', JSON.stringify(reportados))
            }

        } else {
            if (formValues.autorizar === "Sí") {
                ticket.autorizar(true)
                const findArrayRespuesto = formValues.repuesto.map(r => r)
                ticket.agregarRepuesto(findArrayRespuesto)

                const index = sucursales.findIndex(sucursal => sucursal.nombre === formValues.sucursal.nombre);
                localStorage.removeItem("Sucursales")

                if (index !== 1) {
                    formValues.telefono.estado.push(estadosTelefonos.revisado);
                    formValues.sucursal.clientes.push(formValues.cliente);
                    formValues.sucursal.telefono = formValues.telefono;
                    formValues.sucursal.tickets.push(ticket);

                    sucursales.splice(index, 1);

                    sucursales.push(formValues.sucursal)
                    ticket.inicioServicio();
                    ticket.finalizarServicio();

                    console.log(ticket)
                    localStorage.setItem('Sucursales', JSON.stringify(sucursales))
                }
            }
        }
    }
})


document.getElementById('btnReportarTelefono').addEventListener('click', async (e) => {
    e.preventDefault();
    console.log('Clic en botón "Reportar Teléfono"');

    const telefonos = JSON.parse(localStorage.getItem('Teléfonos'))
    const telefonoReportar = telefonos.map(element => {
        return `<option value="${element.imei}">${element.imei}</option>`;
    });
    const { value: formValues } = await Swal.fire({
        title: "Ingresa los datos del teléfono",
        icon: "info",
        showCloseButton: true,
        showCancelButton: true,
        confirmButtonText: "Reportar",
        cancelButtonText: "Cancelar",
        html: `
<div class="form-group">
<div >
<label>IMEI</label>
<select id="telefonoReportar" name="telefonoReportar" type="text" placeholder="" class="form-control input-md">
    <option value="" disabled selected>Seleccionar un teléfono a reportar</option>
    ${telefonoReportar}
</div>
</div>


<div class="form-group">
<div >

<input id="serie" name="serie" type="text" placeholder="Serie del teléfono" disabled class="form-control input-md">

</div>
</div>


<div class="form-group">
<div >
<input id="marca" name="marca" type="text" placeholder="Marca del teléfono" disabled class="form-control input-md">

</div>
</div>


<div class="form-group">
<div >
<input id="modelo" name="modelo" type="text" placeholder="Modelo del teléfono" disabled class="form-control input-md">

</div>
</div>


<div class="form-group">
<div >
<input id="so" name="so" type="text" placeholder="Sistema Operativo del teléfono" disabled class="form-control input-md">
</div>
</div>

</div>`,

        preConfirm: () => {
            return {

                imei: document.getElementById("telefonoReportar").value,
                serie: document.getElementById("serie").value,
                marca: document.getElementById("marca").value,
                modelo: document.getElementById("modelo").value,
                so: document.getElementById("so").value

            }
        },

        didOpen: () => {

            document.getElementById('telefonoReportar').addEventListener('change', (e) => {
                e.preventDefault();
                const valor = document.getElementById('telefonoReportar').value;
                const findTelefono = telefonos.find(t => t.imei === valor);

                if (findTelefono) {
                    document.getElementById("serie").value = findTelefono.serie;
                    document.getElementById("marca").value = findTelefono.marca;
                    document.getElementById("modelo").value = findTelefono.modelo;
                    document.getElementById("so").value = findTelefono.so;
                }
            });
        }

    });

    if (formValues) {

        const valor = formValues.imei;
        const findTelefono = telefonos.find(t => t.imei === valor);
        const index = telefonos.findIndex(telefono => telefono.imei === valor);
        // localStorage.removeItem('Teléfonos')

        if (index !== -1) {
            telefonos.splice(index, 1);
            // localStorage.setItem('Teléfonos', JSON.stringify(telefonos))
        }

        tecnoIdat.agregarTelefonosReportados(findTelefono)
        localStorage.setItem("Teléfonos Reportados", JSON.stringify(tecnoIdat.telefonosReportados))

        Swal.fire('Success', 'Teléfono reportado correctamente.', 'success');
    }

})


