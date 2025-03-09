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
        Se registra el equipo, el cliente y la sucursal.
        
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
// Clases

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

//Creacion unicamente didactica de SedeCentral
const SedeCentral = new Central("Sede Central", "Av. Imaginaria 345, Lince, Lima", "Jose Ordoñes Mart");

//Heredando propieaddes de Central 
class Sucursal extends Central{
    id;
    constructor(id, nombre,direccion,encargado){
        this.id=id;
    }
}

