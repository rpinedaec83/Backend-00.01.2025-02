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

  if (authorizationValue == "si") {
    newTicket.autorizar(1);
  }

  const sucursal = document.querySelector("#branch").value;

  console.log(newTicket.iniciarServicio());

  const findSucursal = tecnoIdat.sucursales.find((e) => e.nombre == sucursal);
  if (findSucursal) {
    findSucursal.agregarTicket(newTicket);
  }



  actualizarTabla();
});

const actualizarTabla = () => {
  let phoneData = [];

  tecnoIdat.sucursales.forEach((sucursal) => {
    sucursal.tickets.forEach((ticket) => {
      console.log(ticket);

      phoneData.push({
        branch: sucursal.nombre,
        serialNumber: "xxxxxxx",
        imei: ticket.telefono.imei,
        brand: ticket.telefono.marca,
        model: ticket.telefono.modelo,
        diagnosis: ticket.diagnostico,
        authorization: ticket.autorizado,
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
    <td>${item.percentage}</td>
    <td>${item.status}</td>`;
    tbody.appendChild(row);
  });

  //reiniciar valores
};

/*
{telefono: Telefono, diagnostico: 'lento', porcentaje: '60', montoFinal: '50', estado: 'en proceso', …}autorizado: 1cliente: "jose"diagnostico: "lento"estado: "en proceso"montoFinal: "50"porcentaje: "60"repuestos: []telefono: Telefono {estado: 'en reparacion', imei: '8939238', modelo: 's23', marca: 'samsung', esRobado: false}
*/
