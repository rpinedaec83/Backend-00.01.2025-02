class  telefono{
    estado = null;
    imei = '';
    modelo = '';
    robado = false;
    marca = '';
    constructor(imei,marca,modelo,estado = null){
        this.imei = imei;
        this.marca = marca;
        this.modelo = modelo;
        this.estado = estado;
    }
    actualizarEstado(estado){
        this.estado = estado;
    }
    actualizarEstadoRobado(robado){
        this.robado = robado;
    }
}
//CENTRAL PERU
class Central{
    celularesRobados = []
    sucursales = []
    agregarCelularRobado(telefono){
        this.celularesRobados.push(telefono)
    }
    eliminarCelularRobado(telefono){    
        this.celularesRobados = this.celularesRobados.filter((tel) => tel.imei != telefono.imei)
    }
    agregarSucursal(sucursal){
        this.sucursales.push(sucursal)
    }
    buscarTecnicoPorSucursal(sucursal,tecnicos){
        return tecnicos.filter((tec) => tec.sucursal == sucursal)
    }
}


//TECNOSUD TRUJILLO, TENCOSUD LIMA, TECNOSUD AREQUIPA
const estadosTicket = {
    INICIALIZADO : 'Inicializado',
    PENDIENTE: 'Pendiente',
    EN_REPARACION: 'En reparacion',
    FINALIZADO: 'Finalizado'
}

class ticket{
    telefono;
    diagnostico;
    porcentaje;
    montoFinal;
    estado;
    cliente;
    tecnico;
    autorizado=0;
    repuestos = []
    constructor(telefono,diagnostico,porcentaje,montoFinal,cliente){
        this.telefono = telefono;
        this.diagnostico = diagnostico;
        this.porcentaje = porcentaje;
        this.montoFinal = montoFinal;
        this.cliente = cliente;
    }
    autorizar(){
        this.autorizado = estado;
    }
    agregarRepuesto(repuesto){
        if(!repuesto){
            throw new Error('Repuesto invalido')
        }
        this.repuestos.push(repuesto)
    }
    
    iniciarServicio(){
        if(this,autorizado && this.porcentaje >=50){
            //  VALIDAR SI EL TECNICO ASIGNADO SABE SOBRE EL SITEMA OPERATIVO DEL CELULAR
            switch(this.telefono.marca){
                case 'ios':
                    //VALIDAR SI EL TECNICO TIENE ESTA HABILITADO PARA REPARAR CELULARES IOS
                break;
                case 'android':
                    //VALIDAR SI EL TECNICO TIENE ESTA HABILITADO PARA REPARAR CELULARES ANDROID
                break
                default:
                    return "No hay tecnico para reparar el celular"
            }
            this.telefono.actualizarEstado('En reparacion')
            this.estado = estadosTicket.PENDIENTE
        }else{
            return "No cumple las condiciones basicas para reparar"
        }
    }
    finalizarServicio(){
        this.telefono.actualizarEstado('Reparado')
        this.estado = estadosTicket.FINALIZADO
        return  "Servicio finalizado"
    }
}

class sucursal{
    tecnicos = []
    clientes = []
    tickets = []
    contacto = ''
    nombreSucursal = '' 
    direccion = ''	
    centrarl;
    constructor(nombreSucursal,direccion,contacto,central){
        this.nombreSucursal = nombreSucursal;
        this.direccion = direccion;
        this.contacto = contacto;
        this.central = central;
    }
    agregarTecnico(tec){
        this.tecnicos.push(tec)
    }
    agregarCliente(cliente){
        this.clientes.push(cliente)
    }
    eliminarTecnico(tec){ 
        this.tecnicos = this.tecnicos.filter((tecnico) => tecnico.dni != tec.dni)
    }
    eliminarCliente(cliente){
        this.clientes = this.clientes.filter((cli) => cli.dni != cliente.dni)
    }
    agregarTicket(ticket){
        const existCelRobado = this.central.celularesRobados.find((tel) => tel.imei == ticket.telefono.imei)  
          e => e.imei == ticket.telefono.imei
        if(existCelRobado){
            console.log("El celular esta reportado como robado")
        } else {
            this.tickets.push(ticket)
        } 
    }
}

const TECNOSUD = new Central()

console.log(TECNOSUD)

const TECNOSUD_LIMA = new sucursal
("TECNOSUD LIMA","Av. Javier Prado 123","986198234",TECNOSUD)

console.log(TECNOSUD_LIMA)

const TECNOSUD_TRUJILLO = new sucursal
("TECNOSUD TRUJILLO","Av. America Sur 123","986198234",TECNOSUD)  
console.log(TECNOSUD_TRUJILLO) 

const TECNOSUD_AREQUIPA = new sucursal
("TECNOSUD AREQUIPA","Av. America Sur 123","986198234",TECNOSUD)
console.log(TECNOSUD_AREQUIPA)
//TODO: ASIGNACION DE SUCURSALES A CENTRAL
TECNOSUD.agregarSucursal(TECNOSUD_LIMA)
TECNOSUD.agregarSucursal(TECNOSUD_TRUJILLO)
TECNOSUD.agregarSucursal(TECNOSUD_AREQUIPA)
console.log(TECNOSUD)

const GalaxyS10 = new telefono('7585236','Samsung','Galaxy S10')
const iphone13 = new telefono('7585237','Apple','Iphone 13')
const xiaomi = new telefono('7585238','Xiaomi','Redmi Note 10')

TECNOSUD.agregarCelularRobado(GalaxyS10)
console.log("------------------------")
console.log(TECNOSUD)
//PRIMER CASO CELULAR ROBADO
const newticket = new ticket(GalaxyS10,'Bloqueado',50,60,'Juan Perez')
TECNOSUD_LIMA.agregarTicket(newticket)

//SEGUNDO CASO CELULAR SIN AUTORIZACION
const newticket2 = new ticket(iphone13,'Bloqueado',50,100,'Jairo Cabrera')
TECNOSUD_LIMA.agregarTicket(newticket2)

//TERCER CASO CELULAR AUTORIZADO
const newticket3 = new ticket(xiaomi,'pantalla rota',50,200,'Maria Graciela')
newticket3.autorizar(1)
TECNOSUD_LIMA.agregarTicket(newticket3.iniciarServicio())
console.log(newticket3.iniciarServicio())
newticket3.agregarRepuesto('pantalla')
newticket3.finalizarServicio()

console.log("costo final: ",newticket3.montoFinal)
console.log("repuestos: ",newticket3.repuestos)
console.log(newticket3)

//TODO: ASIGNACION DE TECNICOS A SUCURSALES Y TICKETS
const tecnico1 = {dni: 12345678,nombre: 'Sergio'
    ,apellido: 'Marcial',sucursal: 'TECNOSUD LIMA'}
const tecnico2 = {dni: 12345679,nombre: 'Pedro',
    apellido: 'Montes',sucursal: 'TECNOSUD LIMA'}