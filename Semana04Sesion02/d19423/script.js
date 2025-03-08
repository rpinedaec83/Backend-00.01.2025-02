//quienes intervienen
//Cajero
//Heladero
//Cliente
//cual es el flujo
//1 el cliente se acerca a la caja y hace el pedido
//2 el cajero toma el pedido y los datos del clientes y envia el pedido a preparacion
//3 preparacion toma el pedido y prepara el helado con los requerimientos del cliente
//4 cuando termina el pedido lo manda al area de despacho para entregar el pedido
//5 el despachador cobra el helado y entrega el pedido
//como mostrar los resultados
let $table = $('#table');
let $tableDespachos = $('#tableDespachos');
let arrPedidos=[];
let arrDespachos=[];

const Heladeria = function(){

    
    let Nombre;
    let Direccion;
    function configurar(){
        document.getElementById('nombre').innerText = Nombre;
        document.getElementById('direccion').innerText = Direccion;
    }

    function eventos(){
        $table.bootstrapTable({ data: arrPedidos })
       

        $tableDespachos.bootstrapTable({ data: arrDespachos })
        
        $table.bootstrapTable('load', arrPedidos)


        console.log("Inicializando los eventos")
        document.getElementById("pedido").addEventListener('click',(e)=>{
            console.log("Se hizo clic en el boton")
            let strSabor = prompt("Dime tu sabor");
            let strTamaño = prompt("En que tamaño deseas");
            let strToppis = prompt("Que toopisn deseas");

            let strNombre = prompt("Dime tu nombre");
            let strTelefono = prompt("Dime tu telefono");

            let objCliente = {
                nombre: strNombre,
                telefono : strTelefono,
                pedido : {
                    sabor: strSabor,
                    tamaño: strTamaño,
                    toppins: strToppis
                }
            }
            console.log(objCliente);
            arrPedidos.push(objCliente);
            $table.bootstrapTable('load', arrPedidos)
        })

        document.getElementById('verPedidos').addEventListener('click',(e)=>{
            alert("Hizo click en Ver Pedidos");
            console.log(arrPedidos)
            $table.bootstrapTable('load', arrPedidos)
            document.getElementById('divPedidos').style.display='Block'
        })
    }

    return {
        init: function(parametros){
            console.log(parametros)
            Nombre = parametros.nombre;
            Direccion = parametros.direccion;
            configurar()
            eventos()
        }
    }
}();

//luis Guerrero
function ordenesFormatter(value, row, index) {
    
        return [
            '<a class="like" href="javascript:void(0)" id="btnDespachar" title="Like">',
            '<i class="fa-brands fa-jedi-order">Despachar</i>',
            '</a>  ',
            '<a class="edir" href="javascript:void(0)" id="btnDespachar" title="Like">',
            '<i class="fa-solid fa-download">Editar</i>',
            '</a>  '
        ].join('')
    
}

window.ordenesEvents = {
    'click .like': function (e, value, row, index) {
        despacharHelado(row)
      //  alert('You click like action, row: ' + JSON.stringify(row))
    },
    'click .edir': function (e, value, row, index) {
        editarSabor(row)
       // alert('You click like action, row: ' + JSON.stringify(row))
    },
    'click .remove': function (e, value, row, index) {
        $table.bootstrapTable('remove', {
            field: 'id',
            values: [row.id]
        })
    }
}

let despacharHelado = (obj) => {
    console.log(arrPedidos);
    arrDespachos.push(obj);
    const index = arrPedidos.indexOf(obj);
    console.log(index);
    if (index > -1) { // only splice array when item is found
        arrPedidos.splice(index, 1); // 2nd parameter means remove one item only
    }
    console.log(arrPedidos);
    $table.bootstrapTable('load', arrPedidos);
    $tableDespachos.bootstrapTable('load', arrDespachos)
    console.log(obj);
}

function despachoFormatter(value, row, index) {
   
        return [
            '<a class="like" href="javascript:void(0)" id="btnDespachar" title="Like">',
            '<i class="fa fa-heart">Entregar</i>',
            '</a>  '
        ].join('')
   
}

window.despachoEvents = {
    'click .like': function (e, value, row, index) {
        entregarHelado(row)
        //alert('You click like action, row: ' + JSON.stringify(row))
    },
    'click .remove': function (e, value, row, index) {
        $table.bootstrapTable('remove', {
            field: 'id',
            values: [row.id]
        })
    }
}


function entregarHelado(obj) {
    console.log(arrCaja);
    arrCaja.push(obj);
    const index = arrDespachos.indexOf(obj);
    console.log(index);
    if (index > -1) { // only splice array when item is found
        arrDespachos.splice(index, 1); // 2nd parameter means remove one item only
    }
    console.log(arrDespachos);
    $tableDespachos.bootstrapTable('load', arrDespachos);
    console.log(obj);
}
