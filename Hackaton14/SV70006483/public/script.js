const socket = io();

function obtenerNombreUsuario() {
    let nombre = localStorage.getItem('nombreUsuario');
    if (!nombre) {
        nombre = prompt('Por favor, ingresa tu nombre:');
        if (nombre) {
            localStorage.setItem('nombreUsuario', nombre);
        } else {
            nombre = 'Usuario' + Math.floor(Math.random() * 1000);
            localStorage.setItem('nombreUsuario', nombre);
        }
    }
    return nombre;
}

const nombreUsuario = obtenerNombreUsuario();

function actualizarNombreUsuario() {
    $('#nombre-usuario').text(nombreUsuario);
}

function agregarMensaje(msg) {
    const elementoMensaje = $('<p>').text(msg.usuario + ': ' + msg.contenido);
    if (msg._id) {
        elementoMensaje.attr('data-id', msg._id);
        elementoMensaje.append(
            $('<button>').text('Editar').click(function() {
                const nuevoContenido = prompt('Editar mensaje:', msg.contenido);
                if (nuevoContenido !== null) {
                    socket.emit('editar mensaje', { id: msg._id, contenido: nuevoContenido });
                }
            })
        );
    }
    $('#chat').append(elementoMensaje);
    $('#chat').scrollTop($('#chat')[0].scrollHeight);
}

socket.on('cargar mensajes', function(mensajes) {
    mensajes.forEach(agregarMensaje);
});

$('#formulario-chat').submit(function(e) {
    e.preventDefault();
    const contenido = $('#mensaje').val();
    if (contenido.trim()) {
        socket.emit('mensaje de chat', { usuario: nombreUsuario, contenido: contenido });
        $('#mensaje').val('');
    }
    return false;
});

socket.on('mensaje de chat', agregarMensaje);

$('#borrar-historial').click(function() {
    if (confirm('¿Estás seguro de que quieres borrar todo el historial?')) {
        socket.emit('borrar historial');
    }
});

socket.on('historial borrado', function() {
    $('#chat').empty();
});

$('#ayuda-bot').click(function() {
    const entradaUsuario = prompt("¿Qué quieres preguntar al bot?");
    if (entradaUsuario) {
        socket.emit('mensaje al bot', entradaUsuario);
        mostrarMensajeCarga(); 
    }
});
socket.on('respuesta del bot', function(respuesta) {
    mostrarMensajeCarga(false); 
    agregarMensaje(respuesta); 
});

socket.on('mensaje editado', function(msgActualizado) {
    $(`p[data-id="${msgActualizado._id}"]`).text(msgActualizado.usuario + ': ' + msgActualizado.contenido);
});

function mostrarMensajeCarga(mostrar = true) {
    if (mostrar) {
        const mensajeCarga = $('<p>').text('El bot está pensando...').addClass('mensaje-carga');
        $('#chat').append(mensajeCarga);
        $('#chat').scrollTop($('#chat')[0].scrollHeight);
    } else {
        $('.mensaje-carga').remove();
    }
}

actualizarNombreUsuario();