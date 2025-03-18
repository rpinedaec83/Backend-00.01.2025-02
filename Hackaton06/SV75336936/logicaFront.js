document.addEventListener("DOMContentLoaded", () => {
  cargarSucursales();
  cargarDatosGuardados();
});

const buttonSubmit = document.querySelector(".ingresa-celular");
const phoneForm = document.querySelector("#phoneForm");

phoneForm.addEventListener("submit", (e) => {
  e.preventDefault();
  
  // Obtener datos del formulario
  const phoneData = {
    serialNumber: document.querySelector("#serialNumber").value,
    imei: document.querySelector("#imei").value,
    marca: document.querySelector("#marca").value,
    modelo: document.querySelector("#modelo").value,
  };

  const newTelefono = new Telefono(
    phoneData.imei,
    phoneData.marca,
    phoneData.modelo
  );

  const ticketData = {
    telefono: newTelefono,
    diagnostico: document.querySelector("#diagnostico").value,
    porcentaje: document.querySelector("#abono").value,
    montoFinal: document.querySelector("#montoFinal").value,
    cliente: document.querySelector("#cliente").value,
  };
  const newTicket = new Ticket(
    ticketData.telefono,
    ticketData.diagnostico,
    ticketData.porcentaje,
    ticketData.montoFinal,
    ticketData.cliente
  );

  const authorizationValue = document.querySelector("#autorizacion").value;
  if (authorizationValue.toLowerCase() === "si") {
    newTicket.autorizar(1);
  }

  const sucursalNombre = document.querySelector("#branch").value;
  const sucursal = tecnoIdat.sucursales.find((e) => e.nombre === sucursalNombre);

  if (sucursal) {
    sucursal.agregarTicket(newTicket);
  }

  actualizarTabla();
  guardarDatos();
  phoneForm.reset(); // Resetear el formulario
});

const actualizarTabla = () => {
  let phoneData = [];

  tecnoIdat.sucursales.forEach((sucursal) => {
    sucursal.tickets.forEach((ticket) => {
      phoneData.push({
        branch: sucursal.nombre,
        serialNumber: ticket.telefono.serialNumber || "N/A",
        imei: ticket.telefono.imei,
        brand: ticket.telefono.marca,
        model: ticket.telefono.modelo,
        diagnosis: ticket.diagnostico,
        authorization: ticket.autorizado ? "Sí" : "No",
        percentage: ticket.porcentaje,
        status: ticket.estado,
      });
    });
  });

  const tbody = document.querySelector("#phoneTable tbody");
  tbody.innerHTML = "";

  phoneData.forEach((item) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${item.branch}</td>
      <td>${item.serialNumber}</td>
      <td>${item.imei}</td>
      <td>${item.brand}</td>
      <td>${item.model}</td>
      <td>${item.diagnosis}</td>
      <td>${item.authorization}</td>
      <td>${item.percentage}%</td>
      <td>${item.status}</td>
    `;
    tbody.appendChild(row);
  });
};

const cargarSucursales = () => {
  const branchSelect = document.querySelector("#branch");
  branchSelect.innerHTML = "";
  
  tecnoIdat.sucursales.forEach((sucursal) => {
    const option = document.createElement("option");
    option.value = sucursal.nombre;
    option.textContent = sucursal.nombre;
    branchSelect.appendChild(option);
  });
};

const guardarDatos = () => {
  localStorage.setItem("tecnoIdat", JSON.stringify(tecnoIdat));
};

const cargarDatosGuardados = () => {
  const data = localStorage.getItem("tecnoIdat");
  if (data) {
    tecnoIdat = JSON.parse(data);
    actualizarTabla();
  }
};
