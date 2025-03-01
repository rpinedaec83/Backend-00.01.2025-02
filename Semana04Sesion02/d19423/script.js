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

const Heladeria = function(){

    let Nombre;
    let Direccion;
    function configurar(){
        document.getElementById('nombre').innerText = Nombre;
        document.getElementById('direccion').innerText = Direccion;
    }

    return {
        init: function(parametros){
            console.log(parametros)
            Nombre = parametros.nombre;
            Direccion = parametros.direccion;
            configurar()
        }
    }
}();