

// Clase Telefono
class Celular {
    constructor(imei, marca, modelo, descripcion) {
      this.imei = imei; // IDCelular
      this.marca = marca;
      this.modelo = modelo;
      this.descripcion = descripcion;
      this.estado = "Aceptado"; // Estado inicial
      this.esRobado=false;
    }
    muestraDatos(){
        console.log("IMEI: ",this.imei);
        console.log("Marca: ",this.marca);
        console.log("Modelo: ",this.modelo);
        console.log("Descripcion: ",this.descripcion);
        console.log("Estado: ",this.estado);
    }
    actualizaEstado(estado){
        this.estado=estado;
    }
    actualizaEstadoRobado(esRobado){
        this.esRobado=esRobado;
    }
  }
// Clase padre Persona
class Persona {
    constructor(dni, nombre, apellido, numeroCelular,direccion) {
      this.dni = dni;
      this.nombre = nombre;
      this.apellido = apellido;
      this.numeroCelular = numeroCelular;
      this.direccion = direccion;
    }
    getNombre(){
        return this.nombre;
    }
}
// Clase Cliente hijo de Persona
class Cliente extends Persona {
    constructor(dni, nombre, apellido, numeroCelular,direccion, fechaRegistro,celular) {
      super(dni, nombre, apellido, numeroCelular,direccion);
      this.fechaRegistro = fechaRegistro;
      this.celular=celular; // Lista de celulares que ha mandado a arreglar
    }
    //Lista de celulares que ha dejado el cliente
    mostrarListaCelulares() {
        return this.telefonos.map(tel => //this.telefonos es un array, el .map lo convierte en una cadena de texto completa
          `IMEI: ${tel.imei}, Marca: ${tel.marca}, Modelo: ${tel.modelo}, Problema: ${tel.descripcion}`
        ).join("\n"); //el .join() los junta todos, osea cada celular separado por un salto de linea \n
    }
    mostrarDatos(){
        console.log("Dni: ",this.dni);
        console.log("Nombre: ",this.nombre);
        console.log("Apellido: ",this.apellido);
        console.log("Numero de celular: ",this.numeroCelular);
    }

}
// Clase Reparador hijo de Persona
class Reparador extends Persona {
    constructor(dni, nombre, apellido, numeroCelular, fechaContratacion, usuario, contrasena) {
      super(dni, nombre, apellido, numeroCelular);
      this.usuario = usuario;
      this.contrasena = contrasena;
      this.fechaContratacion = fechaContratacion;
      this.skills = []; // Marcas de celulares que puede reparar
      this.celularesReparados = []; // Lista de celulares que ha reparado
    }
    agregarCelular(celular){
        this.celularesReparados.push(celular);
    }

    agregarSkillsDeReparador(skill){
        if (!this.skills.includes(skill)) { //verificar si ya he incluido esa skill antes para no repetir
            this.skills.push(skill);
          }
    }
    mostrarListaCelsReparados() {
        return this.celularesReparados.map(tel => 
          `IMEI: ${tel.imei}, Marca: ${tel.marca}, Modelo: ${tel.modelo}, Problema: ${tel.descripcion}`
        ).join("\n");
    }
}  
//Clase Repuesto
class Repuesto {
    constructor(idRepuesto, nombre, precio, cantidad) {
        this.idRepuesto = idRepuesto;
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;  // Stock
        this.cantPedido = 0;
    }

    
}

// Clase Servicio
class Servicio {
    constructor(idTrabajador, idCliente,idSucursal, telefono,cliente,fecha, precioTotal, montoPagado) {

        this.idTrabajador = idTrabajador;
        this.idCliente = idCliente;
        this.idSucursal= idSucursal;
        this.telefono = telefono;
        this.cliente=cliente;

        this.fecha = fecha;
        this.precioTotal = precioTotal;
        this.montoPagado = montoPagado;
        this.repuestos=[]
    }
    mostrarServicio(){
        console.log("Datos del telefono");
        this.telefono.muestraDatos();
        console.log("Datos del cliente");
        this.cliente.mostrarDatos();
        console.log("Datos del servicio");

        console.log("Fecha: ",this.fecha);
        console.log("Monto total a pagar: ", this.precioTotal);
        console.log("Monto pagado: ", this.montoPagado);
        console.log("Monto restante: ", this.precioTotal - this.montoPagado);
    }
    agregarRepuestos(repuesto){
        this.repuestos.push(repuesto);
    }
    inicializarServicio() {
        // Verificar si el teléfono está en reparación
        if (this.telefono.estado !== "Aceptado") {
            console.log("El teléfono no está en aceptado");
            return;
        }
        this.telefono.actualizaEstado("En reparacion");
        console.log("Estado actual del telefono: ",this.telefono.estado);
        console.log("Servicio iniciado correctamente");
        actualizarListaClientes(sucursalGlobal);
    }
    finalizarServicio() {
        // Verificar si el teléfono está en reparación
        if (this.telefono.estado !== "En reparacion") {
            console.log("El teléfono no está en reparación");
            return;
        }

        // Cambiar el estado del teléfono y del ticket
        this.telefono.actualizaEstado("Reparado");
        console.log("Estado actual del telefono: ",this.telefono.estado);
        console.log("Servicio finalizado correctamente");
        actualizarListaClientes(sucursalGlobal);
    }
    cargaTelefono(telefono){
        this.telefono=telefono;
    }

}
class Sucursal {
    
    constructor(idSucursal, distrito, encargado = null, telefono) {

        this.idSucursal = idSucursal;

        this.distrito = distrito;
        this.encargado = encargado; //Siempre debe haber por lo menos 1 encargado  
        this.telefono = telefono;

        this.trabajadores = [];
        this.numeroTrabajadores=0;
        this.clientes = [];
        this.numeroClientes=0;
        this.servicios = [];
        this.numeroServicios=0;
        this.repuestos = [];
        this.numeroRepuestos=0;
    }

    agregarRepuestos(repuesto){
        this.repuestos.push(repuesto);
        this.numeroRepuestos++;
    }
    eliminarRepuesto(idRepuesto) {
        const index = this.repuestos.findIndex(r => r.idRepuesto === idRepuesto);
        if (index !== -1) {
            
            const eliminado = this.repuestos[index];
            delete this.repuestos[index];
            console.log(`Repuesto ${eliminado.nombre} eliminado de la sucursal ${this.distrito}.`);
            this.numeroRepuestos--;
        } else {
            console.log(`No se encontró el repuesto con ID ${idRepuesto}.`);
        }
    }

    agregarServicios(servicio){
        this.servicios.push(servicio);
        this.numeroServicios++;
    }
    eliminarServicio(idServicio) {
        const index = this.servicios.findIndex(s => s.idServicio === idServicio);
        if (index !== -1) {
            delete this.servicios[index];
            console.log(`Servicio eliminado de la sucursal ${this.distrito}.`);
            this.numeroServicios--;
        } else {
            console.log(`No se encontró el servicio con ID ${idServicio}.`);
        }
    }

    agregarTrabajadores(trabajador) {
        this.numeroTrabajadores++;
        this.trabajadores.push(trabajador);
        console.log(`Trabajador ${trabajador.nombre} registrado en la sucursal ${this.distrito}.`);
    }
    eliminarTrabajador(idTrabajador) {
        const index = this.trabajadores.findIndex(t => t.id === idTrabajador); //busca la posicion del trabajador
        if (index !== -1) {
            
            const eliminado = this.trabajadores[index]; 
            delete this.trabajadores[index]; 
            this.numeroTrabajadores--;
            console.log(`Trabajador ${eliminado.nombre} eliminado de la sucursal ${this.distrito}.`);
        } else {
            console.log(`No se encontró al trabajador con ID ${idTrabajador}.`);
        }
    }

    agregarClientes(dni, nombre, apellido, numeroCelular, direccion) {
        if (!dni || !nombre || !apellido || !numeroCelular || !direccion) {
            alert("Todos los campos son obligatorios.");
            return;
        }
        this.numeroClientes++;
        console.log("Numero de celular: ",numeroCelular);
        console.log("Fecha de registro: ",new Date().toLocaleDateString());

        let nuevoCliente = new Cliente(dni, nombre, apellido, numeroCelular, direccion,new Date().toLocaleDateString(),null);
        this.clientes.push(nuevoCliente);
        console.log(`Cliente ${nuevoCliente.nombre} agregado a la sucursal ${this.distrito}.`);
        // Actualizar la tabla en la interfaz
        //actualizarListaClientes(this);
    }
    eliminarCliente(idCliente) {
        console.log("ID proporcionado:", idCliente);
        console.log("Clientes disponibles:", this.clientes);
        const index = this.clientes.findIndex(c => c.dni === idCliente);
        if (index !== -1) {
            const eliminado = this.clientes[index];
            this.clientes.splice(index, 1);
            console.log(`Cliente ${eliminado.nombre} eliminado de la sucursal ${this.distrito}.`);
            actualizarListaClientes(this);
            this.numeroClientes--;
        } else {
            console.log(`No se encontró al cliente con ID ${idCliente}.`);
        }
    }

    actualizaEncargado(encargado){
        this.encargado=encargado;
    }
    calculaPrecioUnitario(nombre){

        if (this.repuestos.length === 0) {
            console.error("No hay repuestos, esta vacío.");
            return 0;
        }
        // Usar find para buscar el repuesto por nombre
        const repuesto = this.repuestos.find(element => element.nombre === nombre);

        if (repuesto) {
            return repuesto.precio; // Devuelve el precio si se encuentra el repuesto
        }

        return -1; // Retorna -1 si no se encuentra el repuesto
    }
    encuentraCliente(dni){
        console.log("Cantidad de clientes: ",this.clientes.length);
        const index = this.clientes.findIndex(c => c.id === dni);
        if(index===-1)return null;
        return this.clientes[index];
    }
}
class Central{
    celularesRobados = [];
    sucursales = [];

    obtenerSucursalPorNombre(sucursalNombre) {
        return this.sucursales.find(s => s.distrito === sucursalNombre) || null;
    }

    agregarCelularRobado(imei){
        if (!this.celularesRobados.includes(imei)) { //comprueba si no esta incluido el imei anterioemente
            this.celularesRobados.push(imei);
        }
    }
    eliminarCelularRobado(imei){
        this.celularesRobados = this.celularesRobados.filter(c => c !== imei);
    }
    agregarSucursal(sucursal){
        this.sucursales.push(sucursal);
    }
    esCelularRobado(imei){
        return this.celularesRobados.includes(imei); //Regresa verdadero si es que esta incluido en la lista de robados
    }
    buscarTecnicoPorSucursal(sucursal, dniTecnico) {

        if(this.sucursales.length === 0)return null;

        this.sucursales.forEach(element => {
            if(sucursal.idSucursal === element.idSucursal){
                if(element.trabajadores.length === 0)return null;
                return element.trabajadores.find(t => t.dni === dniTecnico);
            }
        });

    }
    actualizarSucursal(sucursal){
        if(this.sucursales.length === 0)return null;
        this.sucursales.forEach(element => {
            if(sucursal.idSucursal === element.idSucursal){
                element = sucursal;
            }
        });
    }

}
//////////////////////////////////////////////////////////////CREACION DE DATOS PARA INICIAR LA PRUEBA/////////////////////////////////////////////////
const centralPeru = new Central;
var sucursalGlobal;
var usserGlobal;
var montoTotalRepuestos = 0; // Variable global para el total
// Crear sucursales
const sucursalMiraflores = new Sucursal(1, "Miraflores", null, "987654321");
const sucursalBarranco = new Sucursal(2, "Barranco", null, "912345678");
const sucursalSanMiguel = new Sucursal(3, "San Miguel", null, "956789123");


// Crear encargados
const encargadoMiraflores = new Reparador(1, "Juan", "Pérez", "987654321", "2023-05-10", "adminMiraflores", "contraMiraflores");
const encargadoBarranco = new Reparador(1, "Carlos", "Gómez", "912345678", "2022-08-15", "adminBarranco", "contraBarranco");
const encargadoSanMiguel = new Reparador(1, "María", "López", "956789123", "2021-12-01", "adminSanMiguel", "contraSanMiguel");

// Asignar skills a los encargados
encargadoMiraflores.agregarSkillsDeReparador("Samsung");
encargadoMiraflores.agregarSkillsDeReparador("Huawei");
encargadoMiraflores.agregarSkillsDeReparador("iPhone");

encargadoBarranco.agregarSkillsDeReparador("Motorola");
encargadoBarranco.agregarSkillsDeReparador("Xiaomi");

encargadoSanMiguel.agregarSkillsDeReparador("LG");
encargadoSanMiguel.agregarSkillsDeReparador("Sony");
encargadoSanMiguel.agregarSkillsDeReparador("Nokia");

// Asignar encargados a sus respectivas sucursales
sucursalMiraflores.actualizaEncargado(encargadoMiraflores);
sucursalBarranco.actualizaEncargado(encargadoBarranco);
sucursalSanMiguel.actualizaEncargado(encargadoSanMiguel); //Siempre debe haber por lo menos 1 encargado

// Crear trabajadores (con nombres y contraseñas simples)
const trabajadoresMiraflores = [
    new Reparador("12345678", "Luis", "Gomez", "987654321", "2023-01-10", "luism", "123"),
    new Reparador("23456789", "Ana", "Perez", "987654322", "2022-12-05", "anap", "123"),
    new Reparador("34567890", "Diego", "Lopez", "987654323", "2024-03-15", "diegol", "123")
];

const trabajadoresBarranco = [
    new Reparador("45678901", "Mario", "Torres", "987654324", "2021-07-22", "mariot", "123"),
    new Reparador("56789012", "Paula", "Castro", "987654325", "2020-11-30", "paulac", "123"),
    new Reparador("67890123", "Jorge", "Reyes", "987654326", "2023-09-10", "jorger", "123")
];

const trabajadoresSanMiguel = [
    new Reparador("78901234", "Elena", "Rojas", "987654327", "2022-06-18", "elena", "123"),
    new Reparador("89012345", "Carlos", "Vega", "987654328", "2019-02-14", "carlos", "123"),
    new Reparador("90123456", "Sofia", "Diaz", "987654329", "2021-12-25", "sofia", "123")
];

// Asignar trabajadores a sucursales
trabajadoresMiraflores.forEach(trabajador => sucursalMiraflores.agregarTrabajadores(trabajador));
trabajadoresBarranco.forEach(trabajador => sucursalBarranco.agregarTrabajadores(trabajador));
trabajadoresSanMiguel.forEach(trabajador => sucursalSanMiguel.agregarTrabajadores(trabajador));


centralPeru.agregarSucursal(sucursalMiraflores);
centralPeru.agregarSucursal(sucursalBarranco);
centralPeru.agregarSucursal(sucursalSanMiguel);


console.log("Sucursal Miraflores:", sucursalMiraflores);
console.log("Sucursal Barranco:", sucursalBarranco);
console.log("Sucursal San Miguel:", sucursalSanMiguel);

// Lista de repuestos disponibles
const repuestosDisponibles = [
    new Repuesto(1, "Pantalla LCD", 200, 10),
    new Repuesto(2, "Batería", 150, 0),
    new Repuesto(3, "Placa Base", 500, 2),
    new Repuesto(4, "Cámara Frontal", 80, 8),
    new Repuesto(5, "Cámara Trasera", 120, 6),
    new Repuesto(6, "Altavoz", 50, 12)
];
repuestosDisponibles.forEach(repuesto => sucursalMiraflores.agregarRepuestos(repuesto));
repuestosDisponibles.forEach(repuesto => sucursalBarranco.agregarRepuestos(repuesto));
repuestosDisponibles.forEach(repuesto => sucursalSanMiguel.agregarRepuestos(repuesto));


const imeis = ["12345", "67890", "54321", "98765", "13579"];
localStorage.setItem("imei",JSON.stringify(imeis));

const imeisGuardados = JSON.parse(localStorage.getItem("imei"));
console.log(imeisGuardados);

imeisGuardados.forEach(imei => centralPeru.agregarCelularRobado(imei));

////////////////////////////////////////////////////      FUNCIONES    //////////////////////////////////////////////////////////////////////////////////////
//Verificacion de incio de sesion guardado

if(sessionStorage.getItem("usuario") && sessionStorage.getItem("contrasena") && sessionStorage.getItem("rol") && 
    sessionStorage.getItem("sucursalNombre")){

    
    let usuario = sessionStorage.getItem("usuario");
    let contrasena = sessionStorage.getItem("contrasena");
    let rol = sessionStorage.getItem("rol");
    let sucursalNombre = sessionStorage.getItem("sucursalNombre");
    const sucursalSeleccionada = centralPeru.obtenerSucursalPorNombre(sucursalNombre);
    sucursalGlobal = sucursalSeleccionada;
    console.log(sucursalNombre);
    if(rol === "administrador"){
        let tecnico = sucursalSeleccionada.encargado;
        if(tecnico.usuario === usuario && tecnico.contrasena === contrasena){
            usserGlobal = tecnico;
            mostrarPanelEncargado();
            actualizarListaClientes(sucursalSeleccionada);
        }
    }else{
        let tecnico = sucursalSeleccionada.trabajadores.find(t => t.usuario === usuario && t.contrasena === contrasena);
        if(tecnico){
            usserGlobal = tecnico;
            mostrarPanelTrabajador();
            actualizarListaClientes(sucursalSeleccionada);
        }
    }
}
//Cargar datos en caso haya algo almacenado
let sucursal = JSON.parse(localStorage.getItem("sucursal"));
console.log(sucursal);
if(sucursal){
    console.log("Si esta guardado la sucursal");
    //hay elementos guardados
    actualizarListaClientes(sucursal);
}
function iniciarSesion() {
    const usuario = document.getElementById("usuario").value; //captura los valores de usuario, contraseña y sucursal del html
    const contrasena = document.getElementById("contrasena").value;
    const sucursalNombre = document.getElementById("sucursal").value;
    console.log("Usuario:", usuario);
    console.log("Contraseña:", contrasena);
    console.log("Sucursal: ", sucursalNombre);
    //Verificar si el usuario es un administrador
    const sucursalSeleccionada = centralPeru.obtenerSucursalPorNombre(sucursalNombre);



    sucursalGlobal = sucursalSeleccionada;

    
    if (!sucursalSeleccionada) {
        alert("Seleccione una sucursal");
        return;
    }

    if(sucursalSeleccionada.encargado.usuario == usuario && sucursalSeleccionada.encargado.contrasena == contrasena){
        sessionStorage.setItem("usuario",usuario);
        sessionStorage.setItem("contrasena",contrasena);
        sessionStorage.setItem("rol","administrador");
        sessionStorage.setItem("sucursalNombre",sucursalNombre);
        alert(`Inicio de sesión exitoso como Administrador de ${sucursalNombre}`);
        usserGlobal = sucursalSeleccionada.encargado;
        mostrarPanelEncargado();
         //Sucursal y dniCliente
        actualizarListaClientes(sucursalSeleccionada);
        return;
    }
    // Verificar si el usuario es un trabajador registrado en la sucursal
    const trabajador = sucursalSeleccionada.trabajadores.find(t => t.usuario === usuario && t.contrasena === contrasena);
    if (trabajador) {

        sessionStorage.setItem("usuario",usuario);  //guarda el usuario en el navegador
        sessionStorage.setItem("contrasena",contrasena); //guarda la contraseña en el navegador
        sessionStorage.setItem("rol","trabajador"); //guarda el rol en el navegador
        sessionStorage.setItem("sucursalNombre",sucursalNombre); //guarda la sucursal en el navegador
        alert(`Inicio de sesión exitoso como Trabajador de ${sucursalNombre}`);
        usserGlobal = trabajador;
        mostrarPanelTrabajador();
        actualizarListaClientes(sucursalSeleccionada);
        return;
    }
    alert(`Usuario o contraseña incorrectos`);
}

function mostrarPanelEncargado() {
    document.getElementById('login-container').style.display = 'none';
    document.getElementById('panel-encargado').style.display = 'block';
}
function mostrarPanelTrabajador() {
    document.getElementById('login-container').style.display = 'none';
    document.getElementById('panel-trabajador').style.display = 'block';
    //cargarClientes();
}
function cerrarSesion() {
    document.getElementById('panel-encargado').style.display = 'none';
    document.getElementById('panel-trabajador').style.display = 'none';
    document.getElementById('login-container').style.display = 'block';
}
function mostrarRegistroCliente() {
    document.getElementById("panel-registro-cliente").style.display = "block";
    document.getElementById('panel-trabajador').style.display = 'none';
    document.getElementById('panel-encargado').style.display = 'none';
}

function cerrarRegistroCliente() {
    document.getElementById("panel-registro-cliente").style.display = "none";
    if(usserGlobal.dni == 1){
        document.getElementById('panel-encargado').style.display = 'block';
    }else{
        document.getElementById('panel-trabajador').style.display = 'block';
    }
    montoTotalRepuestos = 0;
    actualizarMontoTotalCliente();
}
function mostrarModalEliminarCliente() {
    document.getElementById("modalEliminarCliente").style.display = "block";
}

function cerrarModalEliminarCliente() {
    document.getElementById("modalEliminarCliente").style.display = "none";
}
function actualizarListaClientes(sucursal) {
    let tecnicoEncontrado = usserGlobal;
    
    let idTabla = tecnicoEncontrado.dni === 1 ? "lista-clientes-encargado" : "lista-clientes-trabajador";
    // Buscar el técnico según el tipo de usuario

    console.log("Buscando tbody con ID:", idTabla);

        // Asegurarse de que el panel esté visible
        if (tecnicoEncontrado.dni === 1) {
            document.getElementById("panel-registro-cliente").style.display = "none";
            document.getElementById("panel-encargado").style.display = "block";
        } else {
            document.getElementById("panel-registro-cliente").style.display = "none";
            document.getElementById("panel-trabajador").style.display = "block";
        }

    tbody = document.getElementById(idTabla);

    if (!tbody) {
        console.error("Error: No se encontró la tabla de clientes.");
        return;
    }
    tbody.innerHTML = ""; // Limpiar la tabla antes de actualizar
    if(sucursal.clientes.length === 0){
        return;
    }
    sucursal.clientes.forEach(cliente => {
        if(cliente.celular === null){
            cliente.celular = new Celular("","","","");
            cliente.celular.actualizaEstado("Aceptado");
        }
        let fila = document.createElement("tr");
        let servicio = sucursalGlobal.servicios.find(s => s.dni === cliente.dni);

        let nombreTecnico = tecnicoEncontrado ? (tecnicoEncontrado.getNombre ? tecnicoEncontrado.getNombre() : tecnicoEncontrado.nombre) : "Desconocido";
        fila.innerHTML = `
            <td>${cliente.dni}</td>
            <td>${cliente.nombre}</td>
            <td>${cliente.numeroCelular}</td>
            <td>${cliente.fechaRegistro}</td>
            <td>${nombreTecnico}</td>
            <td>${sucursalGlobal.distrito}</td>
            <td>${cliente.celular.estado}</td>
            <td><button onclick="eliminarCliente('${cliente.dni}')">Eliminar</button></td>
            <td><button onclick="actualizaEsstadoPorBoton(${cliente.dni},1)">En reparacion</button></td>
            <td><button onclick="actualizaEsstadoPorBoton(${cliente.dni},2)">Terminado</button></td>
        `;

        tbody.appendChild(fila);
    });
}
function actualizaEsstadoPorBoton(dni,codigo){
    let cont=0;
    sucursalGlobal.clientes.forEach(element => {
        if(parseInt(element.dni) === parseInt(dni)){
            if(codigo === 1){
                sucursalGlobal.servicios[cont].inicializarServicio();
            }else{
                sucursalGlobal.servicios[cont].finalizarServicio();
            }

        }else{
            cont++;
        }
    });
}
function registrarCliente() {
    
    let dni = document.getElementById("dni").value;
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let numeroCelular = document.getElementById("numeroCelular").value;
    let direccion = document.getElementById("direccion").value;
    let montoCancelado = document.getElementById("montoCancelado").value;

    // Llamar al método de la instancia de sucursal
    console.log("Monto total: ",montoTotalRepuestos);
    if(montoTotalRepuestos/2 > parseInt(montoCancelado)){
        alert("Se tiene que cancelar al menos el 50%");
        return;
    }
    let imei= document.getElementById("imei").value;
    let marca= document.getElementById("marca").value;
    let modelo= document.getElementById("modelo").value;
    let descripcion= document.getElementById("descripcion").value;

    let celular = new Celular(imei,marca,modelo,descripcion);
    let cliente = new Cliente(dni,nombre,apellido,numeroCelular,direccion,new Date().toLocaleDateString(),celular);
    let servicio = new Servicio(usserGlobal.dni,cliente.dni,sucursalGlobal.idSucursal,celular,cliente,new Date().toLocaleDateString(),montoTotalRepuestos,parseInt(montoCancelado));



    cliente.celular=celular;
    celular.actualizaEstado("Aceptado");
    sucursalGlobal.agregarServicios(servicio);
    sucursalGlobal.agregarClientes(dni, nombre, apellido, numeroCelular, direccion);

    localStorage.setItem("sucursal",JSON.stringify(sucursalGlobal));
    localStorage.setItem("cliente",JSON.stringify(cliente));
    localStorage.setItem("servicio",JSON.stringify(servicio));
    localStorage.setItem("celular",JSON.stringify(celular));

    sessionStorage.setItem("sucursal",sucursalGlobal);

    centralPeru.actualizarSucursal(sucursalGlobal);
    console.log("Central Peru: ",centralPeru);

    actualizarListaClientes(sucursalGlobal);

    console.log("Sucursal global: ",sucursalGlobal);

    // Limpiar los campos del formulario
    document.getElementById("dni").value = "";
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("numeroCelular").value = "";
    document.getElementById("direccion").value = "";
    document.getElementById("montoCancelado").value = "";
    document.getElementById("diagnostico").value = "";
    montoTotalRepuestos = 0;
    actualizarMontoTotalCliente();  

}
function confirmarEliminarCliente() {
    let dni = document.getElementById("dniEliminar").value.trim();

    if (dni === "") {
        alert("Por favor, ingrese un DNI.");
        return;
    }

    // Llamamos al método de la sucursal para eliminar el cliente
    sucursalGlobal.eliminarCliente(dni);

    // Cerrar modal después de eliminar
    cerrarModalEliminarCliente();

    // Limpiar campo de entrada
    document.getElementById("dniEliminar").value = "";
}

function seleccionarRepuesto(nombre) {
    let tabla = document.getElementById("tabla-repuestos-seleccionados");
    let filas = tabla.getElementsByTagName("tr");
    let precioUnitario = 0;
    let subTotal = 0;
    sucursalGlobal.repuestos.forEach(element => {
        console.log( element.nombre);
    });
    precioUnitario = sucursalGlobal.calculaPrecioUnitario(nombre);
    console.log(precioUnitario);
    subTotal = precioUnitario;
    for (let i = 0; i < filas.length; i++) {
        subTotal = 0;
        let celdaNombre = filas[i].getElementsByTagName("td")[0];
        let celdaCantidad = filas[i].getElementsByTagName("td")[1];
        let celdasubTotal = filas[i].getElementsByTagName("td")[3];
        precioUnitario = sucursalGlobal.calculaPrecioUnitario(nombre);
        if (celdaNombre && celdaNombre.textContent === nombre) {
            celdasubTotal.textContent= parseInt(celdasubTotal.textContent)+precioUnitario;
            celdaCantidad.textContent = parseInt(celdaCantidad.textContent) + 1;
            montoTotalRepuestos += precioUnitario; 
            return; // Ya esta en la tabla, solo se aumenta la cantidad
        }else{
            subTotal = precioUnitario;
        }
    }
    // Si no estaba en la tabla, lo agregamos
    let nuevaFila = tabla.insertRow();
    let celdaNombre = nuevaFila.insertCell(0);
    let celdaCantidad = nuevaFila.insertCell(1);
    let celdaPrecioUnitario = nuevaFila.insertCell(2);
    let celdasubTotal = nuevaFila.insertCell(3);

    celdaNombre.textContent = nombre;
    celdaCantidad.textContent = "1"; // Se agrega con cantidad 1 por defecto
    celdaPrecioUnitario.textContent = precioUnitario;
    celdasubTotal.textContent = subTotal;
    montoTotalRepuestos += subTotal; // Agregar al total
    actualizarMontoTotalCliente();
}
function actualizarMontoTotalCliente() {
    document.getElementById("montoTotal").textContent = "S/ " + montoTotalRepuestos.toFixed(2);
}

function agregarDatosCelular(){
    document.getElementById("panel-registro-cliente").style.display = "none";
    document.getElementById("panel-registro-celular").style.display = "block";
     // Limpiar los campos de entrada
     document.getElementById("imei").value = "";
     document.getElementById("marca").value = "";
     document.getElementById("modelo").value = "";
     document.getElementById("descripcion").value = "";
 
     // Limpiar la tabla de repuestos seleccionados
     document.getElementById("tabla-repuestos-seleccionados").innerHTML = "";


}
function registrarCelular(){
    if(centralPeru.esCelularRobado(document.getElementById("imei").value)){
        alert("No se pudo registrar el celular porque esta reportado")
    }
    let imei=document.getElementById("imei").value;
    let marca=document.getElementById("marca").value;
    let modelo=document.getElementById("modelo").value;
    let descripcion=document.getElementById("descripcion").value;
    if (!imei || !marca || !modelo || !descripcion) {
        alert("Todos los campos son obligatorios.");
        return;
    }
    document.getElementById("panel-registro-cliente").style.display = "block";
    document.getElementById("panel-registro-celular").style.display = "none";
}

function cerrarRegistroCelular(){
    montoTotalRepuestos=0;
    actualizarMontoTotalCliente();
    document.getElementById("panel-registro-cliente").style.display = "block";
    document.getElementById("panel-registro-celular").style.display = "none";
}
function mostrarServiciosDetallado(){
    console.log("DATOS DETALLADOS DE LOS CLIENTES Y SERVICIO QUE SE LE ESTA BRINDANDO");
    if(sucursalGlobal.servicios.length === 0){
        console.log("No hay servicios");
        return;
    }
    for (let i = 0; i < sucursalGlobal.servicios.length; i++) {
        sucursalGlobal.servicios[i].mostrarServicio();
        console.log("");
    }
    
}