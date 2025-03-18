function mostrarOrdenes() {
    let tabla = document.getElementById("tablaOrdenes")
    if (!tabla) return

    tabla.innerHTML = ""

    let ordenes = []

    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i)
        if (key.startsWith("Orden")) {
            let orden = JSON.parse(localStorage.getItem(key))
            ordenes.push(orden)
        }
    }

    // Ordenar las ordenes de mayor a menor segun el id
    ordenes.sort((a, b) => b.id - a.id)

    ordenes.forEach(orden => {
        let fila = document.createElement("tr")
        fila.innerHTML = `
            <td>${orden.id}</td>
            <td>${orden.telefono.marca} - ${orden.telefono.sistemaOperativo}</td>
            <td>${orden.cliente}</td>
            <td>${orden.estado}</td>
            <td>${orden.tecnico ? orden.tecnico.nombre : "No asignado"}</td>
            <td>${orden.sucursal ? orden.sucursal.nombre : "No asignada"}</td>
            <td>${orden.diagnostico}</td>
            <td>${orden.coste}</td>
            <td>${orden.repuestos.length > 0 ? orden.repuestos.join(", ") : "Ninguno"}</td>
            <td><button onclick="borrarOrden(${orden.id})">Eliminar</button></td>
        `
        tabla.appendChild(fila)
    })
}

function borrarOrden(id) {
    localStorage.removeItem(`Orden${id}`)
    mostrarOrdenes() // Actualizar la tabla despues de eliminar
}

document.addEventListener("DOMContentLoaded", mostrarOrdenes)