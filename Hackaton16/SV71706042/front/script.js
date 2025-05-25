// Variables globales
let usuarioActual = null;

// Verificar estado de autenticación al cargar la página
document.addEventListener('DOMContentLoaded', function() {
  verificarEstadoAutenticacion();
});

// Función para verificar si el usuario está autenticado
async function verificarEstadoAutenticacion() {
  try {
    const response = await fetch('/auth/check');
    const data = await response.json();
    
    if (data.loggedIn && data.user) {
      usuarioActual = data.user;
      mostrarUsuarioAutenticado(data.user);
    } else {
      mostrarBotonesLogin();
    }
  } catch (error) {
    console.error('Error al verificar autenticación:', error);
    mostrarBotonesLogin();
  }
}

// Función para mostrar la información del usuario autenticado
function mostrarUsuarioAutenticado(usuario) {
  // Ocultar botones de login
  document.getElementById('auth-buttons').style.display = 'none';
  
  // Mostrar información del usuario
  const userInfo = document.getElementById('user-info');
  userInfo.style.display = 'block';
  
  // Actualizar datos del usuario
  document.getElementById('user-name').textContent = usuario.nombre || usuario.displayName || 'Usuario';
  document.getElementById('user-email').textContent = usuario.email || 'Sin email';
  
  // Actualizar avatar (si existe)
  const avatar = document.getElementById('user-avatar');
  if (usuario.foto || usuario.photos) {
    avatar.src = usuario.foto || (usuario.photos && usuario.photos[0] ? usuario.photos[0].value : '');
  } else {
    // Avatar por defecto
    avatar.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(usuario.nombre || 'U')}&background=667eea&color=fff`;
  }
}

// Función para mostrar botones de login
function mostrarBotonesLogin() {
  document.getElementById('auth-buttons').style.display = 'block';
  document.getElementById('user-info').style.display = 'none';
  usuarioActual = null;
}

// Función para iniciar sesión con Google
function iniciarSesion() {
  // Redirigir a la ruta de autenticación de Google
  window.location.href = '/auth/google';
}

// Función para cerrar sesión
async function cerrarSesion() {
  try {
    const response = await fetch('/auth/logout');
    if (response.ok) {
      mostrarBotonesLogin();
      // Opcional: recargar la página
      window.location.reload();
    }
  } catch (error) {
    console.error('Error al cerrar sesión:', error);
  }
}


async function comprarCurso(nombre, precio) {

   const resAuth = await fetch('/auth/check', { credentials: 'include' });
    const authData = await resAuth.json();

    if (!authData.loggedIn) {
      // Redirigir al login si no está autenticado
      window.location.href = '/login.html';
      return;
    }
  try {

    // Si está autenticado, ahora sí hacemos el pago
    const body = {
      product: {
        name: nombre,
        price: precio,
        quantity: 1
      }
    };

    const resPago = await fetch('/api/pagos/create-checkout-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify(body)
    });

    const data = await resPago.json();
    window.location.href = data.url;

  } catch (error) {
    alert('Ocurrió un error inesperado. Intenta nuevamente.');
    console.error(error);
  }
}
