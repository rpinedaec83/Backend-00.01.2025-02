//  [=== Descripcion del caso ===]

//#region Caso
/*
Nombre: Sistema que maneja reparaciones de celulares en un local con varias sucursales*
Tomar en cuenta los siguientes casos de uso:
- El telefono ingresado debe tener numero de serie e IMEI que no esten reportados para acceder al servicio*
- Un telefono primero debe pasar por una primera revision y se debe guardar el primer diagnostico*
- Se debe tener la autorizacion escrita del usuario y el abono del 50% de la reparacion para que acceda al servicio
- Los tecnicos pueden tener uno o varios skills que se adecuen a la marca de telefono que se necesita acceder al servicio
- Los repuestos se agregaran a la reparacion de telefono
- Se debe mostrar el estado del equipo en sus diferentes estaciones de trabajo 

stwitch(getso){
    case 1 (android)
         xxxxxx
    case2 (ios)
         xxxx
    default
        xxx no hay tecnico para esta marca
}
*/
//#endregion




//  [==== Analisis del caso ====]
//#region Analisis del caso
/*
    Actores
        Cliente
        Recepcionista
        Tecnico
        Administrador

Diagrama de flujo 
        ]====== Inicio =====[

   1 Registrar ingreso del Teléfono

        Se verifica IMEI y número de serie. 
            Si no se verifica. Asgina el estado como "Observado"
        Se registra en la Orden: el telefono, el cliente y la sucursal.
            Asigna estado como "Ingresado".
        
   2 Asignar al Técnico

        Se busca un técnico con skills adecuados.
            Si no hay técnico disponible, se informa. Cambia estado a "Observado"
        Asigna estado como "Recibido".
        
   3 Realizar evaluacion Preliminarmente (Primera revision)

        Diagnóstica preliminarmente y se guarda.
        Problema tentativo y precio de repacion.
        Asigna estado como "Evaluado".

   4 Recibir autorización del Cliente y abono

        Firma del cliente y abono del 50%.
            Si no se recibe la autorizacion o el abono. Cambia estado a "Observado"
        Se actualiza el estado a "Reparacion"

   5 Reparar
        Se repara el dispositivo de acuerdo al diagnostico.
        Se asignan repuestos de ser necesarios.
        Se mantiene el estado en "Reparacion"

   6 Revisar repacion
        Evaluacion final.
        Se asigna el estado de "Reparado".

        ]====== FIN =====[
*/
//#endregion




//  [==== Desarrollo del codigo ====]

//Funcion para preguntar con bootstrap, antes pertenecia a Tecnico

async function preguntarConsola(mensajePregunta) {
    return new Promise((resolve) => {
        let modal = new bootstrap.Modal(document.getElementById("modalPregunta"))
        document.getElementById("modalTexto").textContent = mensajePregunta
        document.getElementById("modalInput").value = ""

        document.getElementById("modalAceptar").onclick = function () {
            let respuesta = document.getElementById("modalInput").value.trim()
            modal.hide()
            resolve(respuesta)
        }

        modal.show()
    })
}




//#region Clases

class Central{
    nombre="";
    direccion="";
    encargado=""
    sucursales=[];
    constructor(nombre,direccion,encargado,sucursales){
        this.nombre=nombre;
        this.direccion=direccion;
        this.encargado=encargado;
        this.sucursales=sucursales;

        let sucursalesGuardadas = JSON.parse(localStorage.getItem("sucursales")) || [];
        if (sucursalesGuardadas.length > 0) {
            this.sucursales = sucursalesGuardadas;
        }
    }

    async agregarSede() {
        let id = Number(await preguntarConsola("ID (#): "));
        let nombre = await preguntarConsola("Nombre: ");
        let direccion = await preguntarConsola("Direccion: ");
        let encargado = await preguntarConsola("Encargado: ");
        
        let nuevaSede = new Sucursal(id, nombre, direccion, encargado,[]);
        
        //  Agregar la nueva sucursal a la lista de sucursales en SedeCentral y actualizar localStorage
        this.sucursales.push(nuevaSede);
        localStorage.setItem("SedeCentral", JSON.stringify(this));
        

        // Guardar la nueva sucursal en localStorage con su propio identificador
        localStorage.setItem(`Sucursal${nuevaSede.id}`, JSON.stringify(nuevaSede));
        console.log("Sucursal agregada", nuevaSede);
         

    }


    
}

//Heredando propieaddes de Central 
class Sucursal extends Central{
    id;
    tecnicos=[];
    constructor(id,nombre,direccion,encargado,tecnicos=[]){
        super(nombre, direccion, encargado);
        this.id=id;
        this.tecnicos=tecnicos;
        this.sucursales = undefined;
    }
/*
    //V1
    async agregarTecnico() {
        let nombreSucursal = window.prompt("Nombre de Sucursal: ");
        let sucursalEncontrada = SedeCentral.sucursales.find(sucursal => sucursal.nombre === nombreSucursal);
    
        if (!sucursalEncontrada) {
            console.log("Sucursal no encontrada.");
            return;
        }
    
        let id = window.prompt("ID : ");
        let nombre = window.prompt("Nombre: ");
        let skills = window.prompt("Skills (,): ").split(",").map(skill => skill.trim());
    
        let nuevoTecnico = new Tecnico(id, nombre, skills, sucursalEncontrada);
        sucursalEncontrada.tecnicos.push(nuevoTecnico);
    
        // Guardar en localStorage sin referencias circulares
        let sedeSinCiclo = {
            nombre: SedeCentral.nombre,
            direccion: SedeCentral.direccion,
            encargado: SedeCentral.encargado,
            sucursales: SedeCentral.sucursales.map(sucursal => ({
                id: sucursal.id,
                nombre: sucursal.nombre,
                direccion: sucursal.direccion,
                encargado: sucursal.encargado,
                tecnicos: sucursal.tecnicos.map(tecnico => ({
                    id: tecnico.id,
                    nombre: tecnico.nombre,
                    skills: tecnico.skills
                }))
            }))
        };
    
        localStorage.setItem("SedeCentral", JSON.stringify(sedeSinCiclo));
        console.log("Técnico agregado a la sucursal", nuevoTecnico);
    }
    */
   //V2
   /*
    
    async agregarTecnico() {
        let nombreSucursal = window.prompt("Nombre Sucursal: ");

        let sucursalEncontrada = null;

        // Buscar en localStorage todas las sucursales almacenadas
        for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
            if (key.startsWith("Sucursal")) {  // Filtrar solo sucursales
                let sucursal = JSON.parse(localStorage.getItem(key));
                if (sucursal.nombre === nombreSucursal) {
                    sucursalEncontrada = sucursal;
                    break;
                }
            }
        }

        if (!sucursalEncontrada) {
            console.log("Sucursal no encontrada.");
            return;
        }

        let id = window.prompt("ID: ");
        let nombre = window.prompt("Nombre: ");
        let skills = window.prompt("Skills (,): ").split(",").map(skill => skill.trim());

        let nuevoTecnico = new Tecnico(id, nombre, skills, sucursalEncontrada);
        sucursalEncontrada.tecnicos.push(nuevoTecnico);

        // Guardar la sucursal actualizada en localStorage
        localStorage.setItem(`Sucursal${sucursalEncontrada.id}`, JSON.stringify(sucursalEncontrada));

        console.log("Tecnico agregado sucursal", nuevoTecnico);
    }

    */

    //V3
    async agregarTecnico() {
        let nombreSucursal = await preguntarConsola("Nombre Sucursal: ");
    
        let sucursalEncontrada = null;
        let sucursalKey = null;
    
        // Buscar en localStorage todas las sucursales almacenadas
        for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
            if (key.startsWith("Sucursal")) {  // Ahora coincide con el formato correcto
                let sucursal = JSON.parse(localStorage.getItem(key));
                if (sucursal.nombre === nombreSucursal) {
                    sucursalEncontrada = Object.assign(new Sucursal(), sucursal);
                    sucursalKey = key;
                    break;
                }
            }
        }
    
        if (!sucursalEncontrada) {
            console.log("Sucursal no encontrada.");
            return;
        }
    
        let id = Number(await preguntarConsola("ID (#): "));
        let nombre = await preguntarConsola("Nombre: ");
        let skills = await preguntarConsola("Skills (,): ").split(",").map(skill => skill.trim());
    
        let nuevoTecnico = new Tecnico(id, nombre, skills, sucursalEncontrada);
    
        if (!Array.isArray(sucursalEncontrada.tecnicos)) {
            sucursalEncontrada.tecnicos = [];
        }
    
        sucursalEncontrada.tecnicos.push(nuevoTecnico);
        //Old version
        // Guardar la sucursal actualizada en localStorage
        //localStorage.setItem(sucursalKey, JSON.stringify(sucursalEncontrada));
        //Corregido: Evitar referencia circular antes de guardar en localStorage
        let sucursalSinCiclo = { ...sucursalEncontrada };
        sucursalSinCiclo.tecnicos = sucursalSinCiclo.tecnicos.map(tecnico => {
            let copiaTecnico = { ...tecnico };
            delete copiaTecnico.sucursal; // Elimina referencia circular
            return copiaTecnico;
        });

        // Guardar la sucursal actualizada en localStorage sin ciclos
        localStorage.setItem(sucursalKey, JSON.stringify(sucursalSinCiclo));
    
        console.log(`Técnico ${nombre} agregado a la sucursal ${sucursalEncontrada.nombre}`);
    }



}

//Actor del sistema
class Tecnico{
    id;
    nombre="";
    skills=[];
    sucursal;
    constructor(id,nombre,skills,sucursal){
        this.id=id;
        this.nombre=nombre;
        this.skills=skills;
        //Validacion de atributo sucursal como objeto de clase Sucursal
        if (sucursal instanceof Sucursal) {
            this.sucursal = sucursal;
        } else {
            throw new Error("Sucursal NO Valida");
        }
    }
    /*Old: Sin bootstrap
    async preguntarConsola(mensajePregunta) {
        return Promise.resolve(window.prompt(mensajePregunta));
    }*/
  
    //Primer ingreso de datos a la Orden
    async registrarIngreso() {
        console.log("Registro de Ingreso");
    
        // Pregunta objeto telefono
        const imei = await preguntarConsola("IMEI: ");
        const numeroSerie = await preguntarConsola("Numero de Serie: ");
        const marca = await preguntarConsola("Marca: ");
        const sistemaOperativo = await preguntarConsola("Sistema Operativo: ");

        // Crea objeto Telefono
        const telefono = new Telefono(imei, numeroSerie, marca, sistemaOperativo);

        // Preguntar nombre del cliente
        const cliente = await preguntarConsola("Cliente: ");

          // Preguntar nombre de la sucursal
        const nombreSucursal = await preguntarConsola("Sucursal: ");
    
        /* Buscar la sucursal en la lista de la sede central OLD
        let sucursalEncontrada = null;
        for (const sucursal of SedeCentral.sucursales) {
            if (sucursal.nombre === nombreSucursal) {
                sucursalEncontrada = sucursal;
                break;
            }
        }
        */
           // Buscar la sucursal en localStorage
        let sucursalEncontrada = null;
        for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
            if (key.startsWith("Sucursal")) {
                let sucursal = JSON.parse(localStorage.getItem(key));
                if (sucursal.nombre === nombreSucursal) {
                    sucursalEncontrada = sucursal;
                    break;
                }
            }
        }
    
        if (!sucursalEncontrada) {
            console.log("Sucursal NO Valida");
            return null;  // Devuelve null si la sucursal no es valida
        }
    
        // Crear la orden, sin estado o tecnico
        this.ordenActual = new Orden(telefono, cliente, null, null, sucursalEncontrada, "", 0, []);
    
        console.log("Nueva Orden Ingresada:");
        console.log(this.ordenActual);
    
        // Validar IMEI y Numero de Serie
        await this.validarIMEIoNumSerie();
    
        return this.ordenActual; // Devuelve la orden creada
    }
    
    async validarIMEIoNumSerie() { //Con funciones flecha
        const imeiValido = (await preguntarConsola("IMEI valido? (si/no): ")).toLowerCase() === "si";
        const numSerieValido = (await preguntarConsola("Numero Serie valido? (si/no): ")).toLowerCase() === "si";
    
        // Si alguno no es valido, cambiar estado a Observado
        if (!imeiValido || !numSerieValido) {
            this.ordenActual.estado = "Observado";
            this.ordenActual.almacenaMemoria();
        }else{
            console.log("IMEI y Numero de Serie VALIDOS");
            this.ordenActual.estado = "Ingresado";
            this.ordenActual.almacenaMemoria();     
            await this.asignarTecnico();
        }
           
        console.log("Estado actualizado de la orden:");
        console.log(this.ordenActual);
        return this.ordenActual;
    }

    
    async asignarTecnico() {
        if (!this.ordenActual || this.ordenActual.estado !== "Ingresado") {
            return;
        }
        /* OLD: Cuando no estaban almacenados en localStorage
        let sucursal = this.ordenActual.sucursal;
        let sistemaOperativoOrden = this.ordenActual.telefono.sistemaOperativo;
        */
        let sucursalKey = `Sucursal${this.ordenActual.sucursal.id}`;
        let sucursalGuardada = JSON.parse(localStorage.getItem(sucursalKey));

        if (!sucursalGuardada) {
            console.log("Sucursal NO Valida");
            return;
        }
        // Convertir sucursalGuardada en un objeto de clase Sucursal
        let sucursalRecuperada = new Sucursal(
        sucursalGuardada.id, 
        sucursalGuardada.nombre, 
        sucursalGuardada.direccion, 
        sucursalGuardada.encargado, 
        sucursalGuardada.tecnicos
        );

        // Restaurar tecnicos desde localStorage
        let tecnicosRecuperados = sucursalRecuperada.tecnicos.map(tecnico => 
            new Tecnico(tecnico.id, tecnico.nombre, tecnico.skills, sucursalRecuperada)
        );

        // Buscar tecnico con skill que coincida con el sistema operativo del telefono OLD
        //let tecnicoAsignado = sucursal.tecnicos.find(tecnico => tecnico.skills.includes(sistemaOperativoOrden));
    
        let sistemaOperativoOrden = this.ordenActual.telefono.sistemaOperativo;

        // Buscar técnico con skill que coincida con el sistema operativo del telefono
        let tecnicoAsignado = tecnicosRecuperados.find(tecnico => tecnico.skills.includes(sistemaOperativoOrden));

        if (tecnicoAsignado) {
            this.ordenActual.tecnico = tecnicoAsignado;
            console.log(`Tecnico ${tecnicoAsignado.nombre} asignado a la orden. Skill usada: ${sistemaOperativoOrden}`);
            this.ordenActual.estado = "Recibido";
            this.ordenActual.almacenaMemoria();
        } else {
            console.log("No hay tecnicos habilitados en esta Sucursal");
            this.ordenActual.estado = "Observado";
            this.ordenActual.almacenaMemoria();
        }
    }
   
    async realizarEvaluacion() {
        if (!this.ordenActual || this.ordenActual.estado !== "Recibido") {
            return;
        }
    
        console.log("Realizando evaluación preliminar");
        let diagnostico = await preguntarConsola("Diagnostico preliminar: ");
        let coste = await preguntarConsola("Coste estimado: ");
    
        this.ordenActual.diagnostico = diagnostico;
        this.ordenActual.coste = parseFloat(coste);
        this.ordenActual.estado = "Evaluado";
        this.ordenActual.almacenaMemoria();
    
        console.log("Evaluación preliminar completada.");
        console.log(this.ordenActual);

        const respuestaCliente = (await preguntarConsola("Cliente conforme? (si/no): ")).toLowerCase() === "si";
        if(!respuestaCliente){
            console.log("Cliente Inconforme");
            console.log(this.ordenActual);
            return this.ordenActual;
        }else{
            console.log("Cliente Conforme");
            await this.confirmarServicio();
        }

    }

    async confirmarServicio(){
        if (!this.ordenActual || this.ordenActual.estado !== "Evaluado") {
            return;
        }
        console.log("Realizando confirmacion al cliente");

        let autorizacionFirmada = (await preguntarConsola("Firmo autorizacion: (si/no): ")).toLowerCase() === "si";
        if(!autorizacionFirmada){
            console.log("Requiere autorizacion del cliente");
            this.ordenActual.estado = "Observado";
            this.ordenActual.almacenaMemoria();
            console.log(this.ordenActual);
            return this.ordenActual;
        }else{
            let abono = await preguntarConsola("Abono ingresado: ");
            if(abono<(this.ordenActual.coste)/2){
                this.ordenActual.estado = "Observado";
                this.ordenActual.almacenaMemoria();
                console.log("Abono insuficiente");
                console.log(this.ordenActual);
                return this.ordenActual;
            }else{
                this.ordenActual.coste=this.ordenActual.coste-abono;
                this.ordenActual.estado = "Reparacion";
                this.ordenActual.almacenaMemoria();
                console.log("En Reparacion");
                console.log(this.ordenActual);
                return this.ordenActual;
            }
        }
    }

    async reparar() {
        if (!this.ordenActual || this.ordenActual.estado !== "Reparacion") {
            return;
        }
        
        console.log("Inicia reparacion");
                
        let diagnosticoCorrecto = (await preguntarConsola(`${this.ordenActual.diagnostico} correcto? (si/no): `)).toLowerCase() === "si";
        if (!diagnosticoCorrecto) {
            this.ordenActual.diagnostico = await preguntarConsola("Nuevo diagnostico: ");
            }
        
        let requiereRepuestos = (await preguntarConsola("Requiere repuestos? (si/no): ")).toLowerCase() === "si";
        if (requiereRepuestos) { //Convierte la cadena de repuestos ingresada en un array elimina espacios extra
            let repuestosIngresados = await preguntarConsola("Ingrese los repuestos utilizados (,): ");
            this.ordenActual.repuestos = repuestosIngresados.split(",").map(rep => rep.trim());
        }
        
        console.log("Reparacion en proceso");
        console.log(this.ordenActual);
    }

    async evaluacionFinal() {
        if (!this.ordenActual || this.ordenActual.estado !== "Reparacion") {
            return;
        }
        
        let reparacionCompleta = (await preguntarConsola("Reparacion completa? (si/no): ")).toLowerCase() === "si";
        if (reparacionCompleta) {
            this.ordenActual.estado = "Reparado";
            this.ordenActual.almacenaMemoria();
              console.log("Orden Evaluada Finalmente");
              console.log(this.ordenActual);
              return this.ordenActual;
        } else {
            await this.reparar();
        }
    }
    

}

// Skills = Android, iOS, HarmonyOS, Ubuntu Touch, KaiOS, Tizen

//Entidades del sistema
class Telefono {
    imei=0;
    numeroSerie="";
    marca="";
    sistemaOperativo="";
    constructor(imei,numeroSerie,marca,sistemaOperativo){
        this.imei = imei;
        this.numeroSerie = numeroSerie;
        this.marca = marca;
        this.sistemaOperativo = sistemaOperativo;
    }
}
// Sistema Operativo = Android, iOS

class Orden{
    telefono;
    cliente="";
    estado="";
    tecnico;
    sucursal;
    diagnostico="";
    coste=0;    
    repuestos=[];
    id=null;
    constructor(telefono,cliente,estado,tecnico,sucursal,diagnostico,coste,repuestos,id=null){
        this.telefono=telefono;
        this.cliente=cliente;
        this.estado=estado;
        this.tecnico=tecnico;
        this.sucursal=sucursal;
        this.diagnostico=diagnostico;
        this.coste=coste;    
        this.repuestos=repuestos;
        this.id=id;
    }

    almacenaMemoria() {
        // Recuperar el último ID desde localStorage
        let ultimoId = localStorage.getItem("ultimoIdOrden");
    
        // Si la orden no tiene un id, asignarle el siguiente en secuencia
        if (this.id === null) {
            this.id = ultimoId ? parseInt(ultimoId) + 1 : 1;
            localStorage.setItem("ultimoIdOrden", this.id); // Guardar el nuevo último ID
        }
    
        // Guardar la orden en localStorage con el formato "Orden{id}"
        localStorage.setItem(`Orden${this.id}`, JSON.stringify(this));
    
        console.log(`Orden${this.id} almacenada/actualizada en localStorage.`);
    }

}

//Estado = Ingresado, Recibido, Observado, Evaluado, Reparacion, Reparado

class Repositorio{
    observado=[];
    ingresado=[];
    recibido=[];
    evaluado=[]; 
    reparacion=[]; 
    reparado=[];
    constructor(observado=[], ingresado=[],recibido=[],evaluado=[],reparacion=[],reparado=[]){
        this.observado=observado;
        this.ingresado=ingresado;
        this.recibido=recibido;
        this.evaluado=evaluado;
        this.reparacion=reparacion;
        this.reparado=reparado;
    }
}

//#endregion

//#region Objetos internos

/*
// Version simple
//Sucursales
const Sucursal1 = new Sucursal(1,"Sucursal Norte", "Av. Panamericana Norte 421, Distrito Norte, Ciudad Capital", "Elque Esta Almando");

//Central Unica
const SedeCentral = new Central("Sede Central", "Av. Imaginaria 345, Distrito Centro, Ciudad Capital", "Jose Ordoñes Mart",[Sucursal1]);

//Carga en LocalStorage
localStorage.setItem("Sucursal1", JSON.stringify(Sucursal1));
localStorage.setItem("SedeCentral", JSON.stringify(SedeCentral));
*/
//Version Completa con validacion

// Recuperar sucursales y sede central desde localStorage
const sucursalGuardada = JSON.parse(localStorage.getItem("Sucursal1"));
const sedeGuardada = JSON.parse(localStorage.getItem("SedeCentral"));

if (sucursalGuardada) {
    // Cargar sucursal desde localStorage
    Sucursal1 = Object.assign(new Sucursal(), sucursalGuardada);
} else {
    // Crear sucursal si no existe en localStorage
    Sucursal1 = new Sucursal(1, "Sucursal Norte", "Av. Panamericana Norte 421, Distrito Norte, Ciudad Capital", "Elque Esta Almando");
    localStorage.setItem("Sucursal1", JSON.stringify(Sucursal1));
}

if (sedeGuardada) {
    // Cargar sede central desde localStorage
    SedeCentral = Object.assign(new Central(), sedeGuardada);
} else {
    // Crear sede central si no existe en localStorage
    SedeCentral = new Central("Sede Central", "Av. Imaginaria 345, Distrito Centro, Ciudad Capital", "Jose Ordoñes Mart",[Sucursal1]);
    localStorage.setItem("SedeCentral", JSON.stringify(SedeCentral));
}

//Validacion para evitar repteciones
if (!Sucursal1.tecnicos || Sucursal1.tecnicos.length === 0) {
// Tecnicos 3
let tecnico1 = new Tecnico(1, "Carlos", ["Android", "HarmonyOS"], Sucursal1);
let tecnico2 = new Tecnico(2, "Maria", ["iOS", "Ubuntu Touch"], Sucursal1);
let tecnico3 = new Tecnico(3, "Luis", ["KaiOS", "Tizen"], Sucursal1);
/*    if (!Sucursal1.tecnicos) {
        Sucursal1.tecnicos = [];
    }
*/
Sucursal1.tecnicos.push(tecnico1,tecnico2,tecnico3);

// Guardar Sucursal1 actualizado en localStorage sin referencias circulares
let sucursalSinCiclo = { ...Sucursal1 };
sucursalSinCiclo.tecnicos = sucursalSinCiclo.tecnicos.map(tecnico => {
    let copiaTecnico = { ...tecnico };
    delete copiaTecnico.sucursal; // Evita la referencia circular
    return copiaTecnico;
});

// Guardar en localStorage
localStorage.setItem("Sucursal1", JSON.stringify(sucursalSinCiclo));
}


let tecnicomostrador = new Tecnico(0, "Mostrador", ["Variado"], Sucursal1);

//#endregion

//#region Carga de datos

/*
// Telefonos 3
let telefono1 = new Telefono(123456789012345, "SN12345", "Samsung", "Android");
let telefono2 = new Telefono(987654321098765, "SN54321", "Apple", "iOS");
let telefono3 = new Telefono(456789123456789, "SN67890", "Huawei", "HarmonyOS");

// Ordenes 3
let orden1 = new Orden(telefono1, "Juan Perez", "Recibido", tecnico1, Sucursal1, "Pantalla rota", 100, ["Pantalla"]);
let orden2 = new Orden(telefono2, "Ana Gomez", "Evaluado", tecnico2, Sucursal1, "Fallo de software", 50, []);
let orden3 = new Orden(telefono3, "Pedro Ramirez", "Reparacion", tecnico3, Sucursal1, "Cambio de batería", 80, ["Batería"]);

*/

//#endregion



//#region Pruebas de salida
//tecnico1.registrarIngreso();

//Falta agregar las otras pruebas


//console.log(Sucursal1);

// Consola 
/*console.log("Tecnicos:");
console.log(tecnico1);
console.log(tecnico2);
console.log(tecnico3);

console.log("\n Telefonos:");
console.log(telefono1);
console.log(telefono2);
console.log(telefono3);

console.log("\n Ordenes de reparacion:");
console.log(orden1);
console.log(orden2);
console.log(orden3);
*/
//Salida en html
/*function salidaIndex(id, datos) {
    document.getElementById(id).textContent = JSON.stringify(datos, null, 2);
}

// Mostrando los datos en la página
salidaIndex("tecnicos", [tecnico1, tecnico2, tecnico3]);
salidaIndex("telefonos", [telefono1, telefono2, telefono3]);
salidaIndex("ordenes", [orden1, orden2, orden3]);

//Espera a que se complete todos los datos para cargarlor
document.addEventListener("DOMContentLoaded", function() {
    salidaIndex("tecnicos", [tecnico1, tecnico2, tecnico3]);
    salidaIndex("telefonos", [telefono1, telefono2, telefono3]);
    salidaIndex("ordenes", [orden1, orden2, orden3]);
});
*/
//#endregion

