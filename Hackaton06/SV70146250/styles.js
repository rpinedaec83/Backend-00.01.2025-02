//Mejora de salida de datos
/*
function salidaIndex(id, datos) {
    const contenedor = document.getElementById(id);
    contenedor.innerHTML = ""; // Limpia contenido previo

    datos.forEach(item => {
        const div = document.createElement("div");
        div.classList.add("card");
        div.innerHTML = `
            <h4>${item.nombre || item.marca || item.cliente}</h4>
            <p><b>ID:</b> ${item.id || item.imei || "N/A"}</p>
            <p><b>Detalles:</b> ${JSON.stringify(item, null, 2)}</p>
        `;
        contenedor.appendChild(div);
    });
}
*/