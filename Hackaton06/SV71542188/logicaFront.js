const buttonSubmit = document.querySelector(".ingresa-celular");
const phoneForm = document.querySelector("#phoneForm");

phoneForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const phoneData = {
    imei: document.querySelector("#imei").value,
    marca: document.querySelector("#marca").value,
    modelo: document.querySelector("#modelo").value,

  };
  const newTelefono = new Telefono(
    phoneData.imei,
    phoneData.marca,
    phoneData.modelo,
  
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
  console.log("🚀 ~ phoneForm.addEventListener ~ newTicker:", newTicket);
  const authorizationValue = document.querySelector("#autorizacion").value;

  if (authorizationValue == "si") {
    newTicket.autorizar(1);
  }
  const sucursal = document.querySelector("#branch").value;
  console.log("🚀 ~ phoneForm.addEventListener ~ sucursal:", sucursal);
  console.log("🚀 ~ phoneForm.addEventListener ~ sucursales", tecnoIdat.sucursales);
  const findsucursal = tecnoIdat.sucursales.find((valor) => valor.nombre == sucursal);
  console.log("🚀 ~ phoneForm.addEventListener ~ findsucursal", findsucursal);
  if(findsucursal){
    findsucursal.agregarTicket(newTicket);
  }

  console.log("central final", tecnoIdat.sucursales);
  console.log("hola");
  actualizarTabla();
});

const actualizarTabla = () => {
  let phoneData = [];
  console.log(tecnoIdat.sucursales);

  tecnoIdat.sucursales.forEach((sucursal) => {
    sucursal.tickets.forEach((ticket) => {
      console.log(ticket);

      phoneData.push({
        imei: ticket.telefono.imei,
        marca: ticket.telefono.marca,
        modelo: ticket.telefono.modelo,
        diagnostico: ticket.diagnostico,
        autorizar: ticket.autorizado,
        estado: ticket.estado,
        sucursal: sucursal.nombre,
        numeroSeries: ticket.telefono.numeroSerie || "N/A", // Si no tiene número de serie, muestra "N/A"
        porcentaje: ticket.porcentaje,
        montoFinal: ticket.montoFinal, // Agregar el monto final
      });
    });
  });

  const tbody = document.querySelector("#phoneTable tbody");
  tbody.innerHTML = "";

  phoneData.forEach((item) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${item.sucursal}</td>
      <td>${item.numeroSeries}</td>
      <td>${item.imei}</td>
      <td>${item.marca}</td>
      <td>${item.modelo}</td>
      <td>${item.diagnostico}</td>
      <td>${item.autorizar ? "Sí" : "No"}</td>
      <td>${item.montoFinal}</td> <!-- Mostrar el monto final -->
      <td>${item.estado}</td>
    `;
    tbody.appendChild(row);
  });
};