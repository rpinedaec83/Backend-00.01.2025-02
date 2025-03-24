// Datos de distritos por departamento
const distritosPorDepartamentoDefault = {
    "Lima": ["Santa Anita", "Ate", "Vitarte", "Centro Cívico"],
    "Arequipa": ["Cayma", "Yanahuara", "Cerro Colorado", "Hunter"],
    "Cusco": ["San Sebastián", "San Jerónimo", "Wanchaq", "Centro Histórico"]
};

// Verificar si ya existe en localStorage, si no, lo guardamos
if (!localStorage.getItem("distritosPorDepartamento")) {
    localStorage.setItem("distritosPorDepartamento", JSON.stringify(distritosPorDepartamentoDefault));
}

// Recuperar el objeto desde localStorage
const distritosPorDepartamento = JSON.parse(localStorage.getItem("distritosPorDepartamento"));

// Seleccionar los elementos del DOM
const departamentoSelect = document.getElementById("departamento");
const distritoSelect = document.getElementById("distrito");

// Evento para actualizar los distritos cuando cambia el departamento
departamentoSelect.addEventListener("change", function() {
    const departamentoSeleccionado = departamentoSelect.value;

    // Limpiar opciones previas
    distritoSelect.innerHTML = '<option value="">-- Selecciona un distrito --</option>';

    if (departamentoSeleccionado && distritosPorDepartamento[departamentoSeleccionado]) {
        // Habilitar el select de distritos
        distritoSelect.disabled = false;

        // Agregar los distritos correspondientes
        distritosPorDepartamento[departamentoSeleccionado].forEach(distrito => {
            let option = document.createElement("option");
            option.value = distrito;
            option.textContent = distrito;
            distritoSelect.appendChild(option);
        });
    } else {
        // Si no se selecciona un departamento, deshabilitamos el select de distrito
        distritoSelect.disabled = true;
    }
});