console.log("Inicio de la aplicacion")

window.addEventListener("load", init, false);

function init(){
    console.log("Se termino de cargar la pagina");
    wsConnect();
}

function wsConnect(){
    console.log("Se esta conectando al sevidor WebSocket");
    websocket = new WebSocket("ws://localhost:8000");
    websocket.onopen = function(evt){
        onOpen(evt);
    }
    websocket.onclose = function(evt){
        onClose(evt);
    }
    websocket.onerror = function(evt){
        console.error(evt);
    }
    websocket.onmessage=function(evt){
        onMessage(evt);
    }
}

function enviarTexto(event){
    event.preventDefault();
    let campo = event.target.texto;
    doSend(campo.value);
    campo.value = "";
}

function onMessage(evt){
    document.getElementById("mensajes").append(evt.data+"\n");
}

function onClose(evt){
    document.getElementById("enviar").disabled = true;
    setTimeout(function(){
        wsConnect()
    }, 2000);
}

function onOpen(evt){
    document.getElementById("enviar").disabled= false;
    doSend("Hola")
}

function doSend(msg){
    console.log(`Enviando ${msg}`);
    websocket.send(msg);
}