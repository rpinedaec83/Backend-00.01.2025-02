//  [=== Descripcion del caso ===]
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

//  [==== Analisis del caso ====]
/*
    Actores
        Cliente
        Recepcionista
        Tecnico
        Administrador

Diagrama de flujo 
        ]====== Inicio =====[

   1 Recepcionar del Teléfono

        Se verifica IMEI y número de serie. 
            Si no se verifica. Asgina el estado como "Observado"
        Se registra en la Orden: el telefono, el cliente y la sucursal.
        
   2 Asignar al Técnico

        Se busca un técnico con skills adecuados.
            Si no hay técnico disponible, se informa. Cambia estado a "Observado"
        Asigna estado como "Recibido".
        
   3 Revisar Preliminarmente (Primera revision)

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

//  [==== Desarrollo del codigo ====]

//#region Clases
class Central{
    nombre="";
    direccion="";
    encargado=""
    constructor(nombre,direccion,encargado){
        this.nombre=nombre;
        this.direccion=direccion;
        this.encargado=encargado;
    }
}

//Heredando propieaddes de Central 
class Sucursal extends Central{
    id;
    constructor(id,nombre,direccion,encargado){
        super(nombre, direccion, encargado);
        this.id=id;
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

//Estado = Recibido, Observado, Evaluado, Reparacion, Reparado

//#endregion

//#region Objetos internos
// Creacion unicamente didactica de SedeCentral
const SedeCentral = new Central("Sede Central", "Av. Imaginaria 345, Distrito Centro, Ciudad Capital", "Jose Ordoñes Mart");

const Sucursal1 = new Sucursal(1,"Sucursal Norte", "Av. Panamericana Norte 421, Distrito Norte, Ciudad Capital", "Elque Esta Almando");

//#endregion





//#region Pruebas de salida
//console.log(Sucursal1);
// Tecnicos 3
let tecnico1 = new Tecnico(1, "Carlos", ["Android", "HarmonyOS"], Sucursal1);
let tecnico2 = new Tecnico(2, "Maria", ["iOS", "Ubuntu Touch"], Sucursal1);
let tecnico3 = new Tecnico(3, "Luis", ["KaiOS", "Tizen"], Sucursal1);

// Telefonos 3
let telefono1 = new Telefono(123456789012345, "SN12345", "Samsung", "Android");
let telefono2 = new Telefono(987654321098765, "SN54321", "Apple", "iOS");
let telefono3 = new Telefono(456789123456789, "SN67890", "Huawei", "HarmonyOS");

// Ordenes 3
let orden1 = new Orden(telefono1, "Juan Perez", "Recibido", tecnico1, Sucursal1, "Pantalla rota", 100, ["Pantalla"]);
let orden2 = new Orden(telefono2, "Ana Gomez", "Evaluado", tecnico2, Sucursal1, "Fallo de software", 50, []);
let orden3 = new Orden(telefono3, "Pedro Ramirez", "Reparacion", tecnico3, Sucursal1, "Cambio de batería", 80, ["Batería"]);

// Consola 
console.log("Tecnicos:");
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

//Salida en html
function salidaIndex(id, datos) {
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

//#endregion

