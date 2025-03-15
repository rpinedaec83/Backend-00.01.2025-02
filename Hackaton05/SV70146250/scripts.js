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

    async preguntarConsola(mensajePregunta) {
        return Promise.resolve(window.prompt(mensajePregunta));
    }

    //Primer ingreso de datos a la Orden
    async registrarIngreso() {
        console.log("Registro de Ingreso");
    
        // Pregunta objeto telefono
        const imei = await this.preguntarConsola("IMEI: ");
        const numeroSerie = await this.preguntarConsola("Numero de Serie: ");
        const marca = await this.preguntarConsola("Marca: ");
        const sistemaOperativo = await this.preguntarConsola("Sistema Operativo: ");

        // Crea objeto Telefono
        const telefono = new Telefono(imei, numeroSerie, marca, sistemaOperativo);

        // Preguntar nombre del cliente
        const cliente = await this.preguntarConsola("Cliente: ");

          // Preguntar nombre de la sucursal
        const nombreSucursal = await this.preguntarConsola("Sucursal: ");
    
        // Buscar la sucursal en la lista de la sede central
        let sucursalEncontrada = null;
        for (const sucursal of SedeCentral.sucursales) {
            if (sucursal.nombre === nombreSucursal) {
                sucursalEncontrada = sucursal;
                break;
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
        const imeiValido = (await this.preguntarConsola("IMEI valido? (si/no): ")).toLowerCase() === "si";
        const numSerieValido = (await this.preguntarConsola("Numero Serie valido? (si/no): ")).toLowerCase() === "si";
    
        // Si alguno no es valido, cambiar estado a Observado
        if (!imeiValido || !numSerieValido) {
            this.ordenActual.estado = "Observado";
        }else{
            console.log("IMEI y Numero de Serie VALIDOS");
            this.ordenActual.estado = "Ingresado";     
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
    
        let sucursal = this.ordenActual.sucursal;
        let sistemaOperativoOrden = this.ordenActual.telefono.sistemaOperativo;
    
        // Buscar tecnico con skill que coincida con el sistema operativo del telefono
        let tecnicoAsignado = sucursal.tecnicos.find(tecnico => tecnico.skills.includes(sistemaOperativoOrden));
    
        if (tecnicoAsignado) {
            this.ordenActual.tecnico = tecnicoAsignado;
            console.log(`Tecnico ${tecnicoAsignado.nombre} asignado a la orden. Skill usada: ${sistemaOperativoOrden}`);
            this.ordenActual.estado = "Recibido";
        } else {
            console.log("No hay tecnicos habilitados en esta Sucursal");
            this.ordenActual.estado = "Observado";
        }
    }
   
    async realizarEvaluacion() {
        if (!this.ordenActual || this.ordenActual.estado !== "Recibido") {
            return;
        }
    
        console.log("Realizando evaluación preliminar");
        let diagnostico = await this.preguntarConsola("Diagnostico preliminar: ");
        let coste = await this.preguntarConsola("Coste estimado: ");
    
        this.ordenActual.diagnostico = diagnostico;
        this.ordenActual.coste = parseFloat(coste);
        this.ordenActual.estado = "Evaluado";
    
        console.log("Evaluación preliminar completada.");
        console.log(this.ordenActual);

        const respuestaCliente = (await this.preguntarConsola("Cliente conforme? (si/no): ")).toLowerCase() === "si";
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

        let autorizacionFirmada = (await this.preguntarConsola("Firmo autorizacion: (si/no): ")).toLowerCase() === "si";
        if(!autorizacionFirmada){
            console.log("Requiere autorizacion del cliente");
            this.ordenActual.estado = "Observado";
            console.log(this.ordenActual);
            return this.ordenActual;
        }else{
            let abono = await this.preguntarConsola("Abono ingresado: ");
            if(abono<(this.ordenActual.coste)/2){
                this.ordenActual.estado = "Observado";
                console.log("Abono insuficiente");
                console.log(this.ordenActual);
                return this.ordenActual;
            }else{
                this.ordenActual.coste=this.ordenActual.coste-abono;
                this.ordenActual.estado = "Reparacion";
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
                
        let diagnosticoCorrecto = (await this.preguntarConsola(`${this.ordenActual.diagnostico} correcto? (si/no): `)).toLowerCase() === "si";
        if (!diagnosticoCorrecto) {
            this.ordenActual.diagnostico = await this.preguntarConsola("Nuevo diagnostico: ");
            }
        
        let requiereRepuestos = (await this.preguntarConsola("Requiere repuestos? (si/no): ")).toLowerCase() === "si";
        if (requiereRepuestos) { //Convierte la cadena de repuestos ingresada en un array elimina espacios extra
            let repuestosIngresados = await this.preguntarConsola("Ingrese los repuestos utilizados (,): ");
            this.ordenActual.repuestos = repuestosIngresados.split(",").map(rep => rep.trim());
        }
        
        console.log("Reparacion en proceso");
        console.log(this.ordenActual);
    }

    async evaluacionFinal() {
        if (!this.ordenActual || this.ordenActual.estado !== "Reparacion") {
            return;
        }
        
        let reparacionCompleta = (await this.preguntarConsola("Reparacion completa? (si/no): ")).toLowerCase() === "si";
        if (reparacionCompleta) {
            this.ordenActual.estado = "Reparado";
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
    constructor(telefono,cliente,estado,tecnico,sucursal,diagnostico,coste,repuestos){
        this.telefono=telefono;
        this.cliente=cliente;
        this.estado=estado;
        this.tecnico=tecnico;
        this.sucursal=sucursal;
        this.diagnostico=diagnostico;
        this.coste=coste;    
        this.repuestos=repuestos;
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



//Sucursales
const Sucursal1 = new Sucursal(1,"Sucursal Norte", "Av. Panamericana Norte 421, Distrito Norte, Ciudad Capital", "Elque Esta Almando");

//Central Unica
const SedeCentral = new Central("Sede Central", "Av. Imaginaria 345, Distrito Centro, Ciudad Capital", "Jose Ordoñes Mart",[Sucursal1]);


//#endregion

//#region Carga de datos

// Tecnicos 3
let tecnico1 = new Tecnico(1, "Carlos", ["Android", "HarmonyOS"], Sucursal1);
let tecnico2 = new Tecnico(2, "Maria", ["iOS", "Ubuntu Touch"], Sucursal1);
let tecnico3 = new Tecnico(3, "Luis", ["KaiOS", "Tizen"], Sucursal1);
Sucursal1.tecnicos.push(tecnico1,tecnico2,tecnico3);

// Telefonos 3
let telefono1 = new Telefono(123456789012345, "SN12345", "Samsung", "Android");
let telefono2 = new Telefono(987654321098765, "SN54321", "Apple", "iOS");
let telefono3 = new Telefono(456789123456789, "SN67890", "Huawei", "HarmonyOS");

// Ordenes 3
let orden1 = new Orden(telefono1, "Juan Perez", "Recibido", tecnico1, Sucursal1, "Pantalla rota", 100, ["Pantalla"]);
let orden2 = new Orden(telefono2, "Ana Gomez", "Evaluado", tecnico2, Sucursal1, "Fallo de software", 50, []);
let orden3 = new Orden(telefono3, "Pedro Ramirez", "Reparacion", tecnico3, Sucursal1, "Cambio de batería", 80, ["Batería"]);
/*
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

