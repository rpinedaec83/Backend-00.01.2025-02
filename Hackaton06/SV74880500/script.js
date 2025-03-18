// Clase Celular
class Celular {
    constructor(imei, numeroDeSerie) {
      this.imei = imei;
      this.numeroDeSerie = numeroDeSerie;
      this.estado = 'En espera';
      this.diagnostico = null;
      this.autorizacion = false;
      this.abono = false;
      this.repuestos = [];
    }
  
    verificarIMEI() {
      // Verificar si el IMEI ya está reportado
      return !this.imeiReportado(this.imei);
    }
  
    imeiReportado(imei) {
      // Lógica para verificar si el IMEI está reportado (en base de datos o lista)
      return false; // Simulación de que no está reportado
    }
  
    realizarRevision(diagnostico) {
      if (this.verificarIMEI()) {
        this.diagnostico = diagnostico;
        this.estado = 'En revisión';
      } else {
        this.estado = 'IMEI reportado, no se puede continuar';
      }
    }
  
    autorizarServicio() {
      this.autorizacion = true;
    }
  
    realizarAbono() {
      this.abono = true;
    }
  
    agregarRepuesto(repuesto) {
      this.repuestos.push(repuesto);
    }
  
    obtenerEstado() {
      return this.estado;
    }
  }
  
  // Variables globales
  let celulares = [];
  
  // Función para agregar celular al localStorage
  function guardarEnStorage() {
    localStorage.setItem('celulares', JSON.stringify(celulares));
  }
  
  // Función para obtener celulares desde localStorage
  function obtenerDesdeStorage() {
    let data = localStorage.getItem('celulares');
    return data ? JSON.parse(data) : [];
  }
  
  // Función para renderizar la lista de celulares
  function renderizarListaCelulares() {
    const lista = document.getElementById('celulares-lista-ul');
    lista.innerHTML = ''; // Limpiar lista
  
    celulares.forEach(celular => {
      const li = document.createElement('li');
      li.textContent = `IMEI: ${celular.imei}, Estado: ${celular.estado}`;
      lista.appendChild(li);
    });
  }
  
  // Función para ingresar un celular
  document.getElementById('formulario-ingreso').addEventListener('submit', (e) => {
    e.preventDefault();
    const imei = document.getElementById('imei').value;
    const numeroDeSerie = document.getElementById('numeroDeSerie').value;
  
    const celular = new Celular(imei, numeroDeSerie);
    celulares.push(celular);
    guardarEnStorage();
    renderizarListaCelulares();
    alert('Celular ingresado correctamente');
    document.getElementById('formulario-ingreso').reset();
  });
  
  // Función para realizar revisión
  document.getElementById('formulario-revision').addEventListener('submit', (e) => {
    e.preventDefault();
    const imei = document.getElementById('imei-revision').value;
    const diagnostico = document.getElementById('diagnostico').value;
  
    const celular = celulares.find(c => c.imei === imei);
    if (celular) {
      celular.realizarRevision(diagnostico);
      guardarEnStorage();
      renderizarListaCelulares();
      alert('Revisión realizada correctamente');
      document.getElementById('formulario-revision').reset();
    } else {
      alert('Celular no encontrado');
    }
  });
  
  // Función para autorizar servicio
  document.getElementById('formulario-autorizacion').addEventListener('submit', (e) => {
    e.preventDefault();
    const imei = document.getElementById('imei-autorizacion').value;
  
    const celular = celulares.find(c => c.imei === imei);
    if (celular) {
      celular.autorizarServicio();
      celular.estado = 'Autorizado';
      guardarEnStorage();
      renderizarListaCelulares();
      alert('Servicio autorizado');
      document.getElementById('formulario-autorizacion').reset();
    } else {
      alert('Celular no encontrado');
    }
  });
  
  // Inicialización de la página
  document.addEventListener('DOMContentLoaded', () => {
    celulares = obtenerDesdeStorage();
    renderizarListaCelulares();
  });
  