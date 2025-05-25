let usuario_id = null;

function login() {
  const correo = document.getElementById("correo").value;
  const clave = document.getElementById("clave").value;

  fetch('/login', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({correo, clave})
  })
  .then(res => res.json())
  .then(data => {
    if (data.id) {
      usuario_id = data.id;
      alert("Login exitoso");
      document.getElementById("login").style.display = "none";
      document.getElementById("productos").style.display = "block";
      document.getElementById("historial").style.display = "block";
      cargarProductos();
      cargarPagos();
    } else {
      alert("Credenciales incorrectas");
    }
  });
}

function cargarProductos() {
  fetch('/productos')
    .then(res => res.json())
    .then(data => {
      const div = document.getElementById("lista-productos");
      div.innerHTML = "";
      data.forEach(p => {
        const card = document.createElement("div");
        card.innerHTML = `
          <b>${p.nombre}</b> - S/ ${p.precio}<br>
          <button onclick="comprar(${p.id}, ${p.precio})">Comprar</button><br><br>
        `;
        div.appendChild(card);
      });
    });
}

function comprar(producto_id, monto) {
  fetch('/pagos', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      usuario_id,
      producto_id,
      monto,
      metodo_pago: 'Culqi'
    })
  })
  .then(res => res.json())
  .then(() => {
    alert("Pago registrado");
    cargarPagos();
  });
}

function cargarPagos() {
  fetch(`/pagos/${usuario_id}`)
    .then(res => res.json())
    .then(data => {
      const div = document.getElementById("lista-pagos");
      div.innerHTML = "";
      data.forEach(p => {
        const pagoHTML = `
          ${p.producto_nombre} - S/ ${p.monto} - ${p.estado_pago}
          ${p.estado_pago === 'completado' ? `<button onclick="devolverPago(${p.id})">Devolver</button>` : ''}
          <br>
        `;
        div.innerHTML += pagoHTML;
      });
    });
}

function devolverPago(id) {
  fetch(`/pagos/devolver/${id}`, {
    method: 'PUT'
  })
  .then(res => res.json())
  .then(() => {
    alert("Pago marcado como devuelto");
    cargarPagos();
  });
}



