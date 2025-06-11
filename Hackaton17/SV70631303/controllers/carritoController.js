const Carrito = require('../models/Carrito');
const Producto = require('../models/Producto');
const Orden = require('../models/Orden');

// Controlador para ver el carrito
const verCarrito = async (req, res) => {
  try {
    console.log('Usuario autentificado: ',req.user);
    const usuarioId = req.session.user.id; // Ejemplo hardcodeado
    
    console.log('Buscando carrito para usuario:', usuarioId);
    const carrito = await Carrito.findOne({ usuarioId }).populate('items.producto');
    
    if (!carrito) {
      return res.render('carrito', { items: [], total: 0 });
    }
    
    const total = carrito.items.reduce((sum, item) => {
      return sum + (item.producto.precio * item.cantidad);
    }, 0);
    
    res.render('carrito', { 
      items: carrito.items, 
      total
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al obtener el carrito');
  }
};

// Controlador para agregar producto al carrito
const agregarProducto = async (req, res) => {
  // 1. Validación de autenticación
  if (!req.session.user || !req.session.user.id) {
    console.error('Intento de agregar producto sin autenticación');
    req.flash('error_msg', 'Debes iniciar sesión para agregar productos al carrito');
    return res.status(401).redirect('/login');
  }

  // 2. Validación de datos de entrada
  const { productoId, cantidad } = req.body;
  if (!productoId || !cantidad) {
    console.error('Datos incompletos:', { productoId, cantidad });
    req.flash('error_msg', 'Datos del producto incompletos');
    return res.status(400).redirect('/');
  }

  try {
    // 3. Validación de cantidad numérica
    const cantidadNum = parseInt(cantidad);
    if (isNaN(cantidadNum) || cantidadNum < 1) {
      console.error('Cantidad inválida:', cantidad);
      req.flash('error_msg', 'La cantidad debe ser un número positivo');
      return res.status(400).redirect('/');
    }

    // 4. Buscar el producto en la base de datos
    const producto = await Producto.findById(productoId);
    if (!producto) {
      console.error('Producto no encontrado:', productoId);
      req.flash('error_msg', 'El producto no existe o ha sido eliminado');
      return res.status(404).redirect('/');
    }

    // 5. Validar stock disponible
    if (producto.stock < cantidadNum) {
      console.error('Stock insuficiente:', {
        stock: producto.stock,
        cantidadSolicitada: cantidadNum
      });
      req.flash('error_msg', `No hay suficiente stock. Disponible: ${producto.stock}`);
      return res.status(400).redirect('/');
    }

    // 6. Buscar o crear carrito
    let carrito = await Carrito.findOne({ usuarioId: req.session.user.id });
    if (!carrito) {
      console.log('Creando nuevo carrito para usuario:', req.session.user.id);
      carrito = new Carrito({
        usuarioId: req.session.user.id,
        items: []
      });
    }

    // 7. Buscar si el producto ya está en el carrito
    const itemIndex = carrito.items.findIndex(
      item => item.producto.toString() === productoId
    );

    // 8. Actualizar o agregar el item
    if (itemIndex > -1) {
      // Producto ya existe en el carrito - actualizar cantidad
      carrito.items[itemIndex].cantidad += cantidadNum;
      console.log('Actualizando cantidad en carrito existente', {
        producto: producto.nombre,
        nuevaCantidad: carrito.items[itemIndex].cantidad
      });
    } else {
      // Producto nuevo en el carrito - agregar item
      carrito.items.push({
        producto: productoId,
        cantidad: cantidadNum,
        precioUnitario: producto.precio // Guardar precio actual como referencia
      });
      console.log('Agregando nuevo producto al carrito:', producto.nombre);
    }

    // 9. Calcular total actualizado
    carrito.total = carrito.items.reduce((sum, item) => {
      return sum + (item.precioUnitario * item.cantidad);
    }, 0);

    // 10. Guardar cambios
    await carrito.save();
    console.log('Carrito guardado exitosamente:', carrito);

    // 11. Respuesta exitosa
    req.flash('success_msg', `${producto.nombre} agregado al carrito (${cantidadNum} unidades)`);
    return res.redirect('/carrito');

  } catch (error) {
    // 12. Manejo de errores
    console.error('Error en agregarProducto:', {
      error: error.message,
      stack: error.stack,
      body: req.body,
      user: req.session.user
    });

    req.flash('error_msg', 'Error al agregar producto al carrito. Por favor intente nuevamente.');
    return res.status(500).redirect('/');
  }
};

// Controlador para eliminar producto del carrito
const eliminarProducto = async (req, res) => {
  try {
    const { itemId } = req.params;
    const usuarioId = req.session.user.id;
    
    const carrito = await Carrito.findOne({ usuarioId });
    
    if (!carrito) {
      return res.status(404).json({ error: 'Carrito no encontrado' });
    }
    
    carrito.items = carrito.items.filter(
      item => item._id.toString() !== itemId
    );
    
    await carrito.save();
    res.redirect('/carrito');
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar del carrito' });
  }
};

// Controlador para actualizar cantidad de un item
const actualizarCantidad = async (req, res) => {
  try {
    const { itemId } = req.params;
    const { cantidad } = req.body;
    const usuarioId = req.session.user.id;
    
    const carrito = await Carrito.findOne({ usuarioId });
    
    if (!carrito) {
      return res.status(404).json({ error: 'Carrito no encontrado' });
    }
    
    const item = carrito.items.find(
      item => item._id.toString() === itemId
    );
    
    if (!item) {
      return res.status(404).json({ error: 'Ítem no encontrado en el carrito' });
    }
    
    item.cantidad = parseInt(cantidad);
    await carrito.save();
    res.redirect('/carrito');
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar el carrito' });
  }
};

// Controlador para mostrar checkout
const mostrarCheckout = async (req, res) => {
  try {
    const usuarioId = req.session.user.id;
    const carrito = await Carrito.findOne({ usuarioId }).populate('items.producto');
    
    if (!carrito || carrito.items.length === 0) {
      return res.redirect('/carrito');
    }
    
    const total = carrito.items.reduce((sum, item) => {
      return sum + (item.producto.precio * item.cantidad);
    }, 0);
    
    res.render('checkout', { 
      carrito,
      items: carrito.items, 
      total,
      title: 'Checkout - Finalizar Compra'
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al mostrar checkout');
  }
};

// Controlador para mostrar orden confirmada
const mostrarOrdenConfirmada = async (req, res) => {
  try {
    const orden = await Orden.findById(req.params.id).populate('items.producto');
    
    if (!orden) {
      return res.status(404).send('Orden no encontrada');
    }
    
    res.render('ordenConfirmada', { 
      orden,
      title: 'Orden Confirmada'
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al mostrar orden');
  }
};

// Controlador para crear orden desde el carrito
const crearOrden = async (req, res) => {
  try {
    const carritoId = req.params.id;
    const { metodoDePago } = req.body;
    const usuarioId = req.session.user.id;

    const carrito = await Carrito.findById(carritoId).populate('items.producto');
    
    if (!carrito) {
      return res.status(404).json({ error: 'Carrito no encontrado' });
    }
    
    if (carrito.items.length === 0) {
      return res.status(400).json({ error: 'El carrito está vacío' });
    }

    const itemsParaOrden = carrito.items.map(item => {
      return {
        producto: item.producto._id,
        nombreProducto: item.producto.nombre,
        cantidad: item.cantidad,
        precioUnitario: item.producto.precio,
        subtotal: item.producto.precio * item.cantidad
      };
    });

    const total = itemsParaOrden.reduce((sum, item) => sum + item.subtotal, 0);

    const orden = new Orden({
      usuarioId,
      items: itemsParaOrden,
      total,
      metodoDePago,
      status: 'pendiente'
    });

    await Promise.all(itemsParaOrden.map(async (item) => {
      await Producto.findByIdAndUpdate(item.producto, {
        $inc: { stock: -item.cantidad }
      });
    }));

    await orden.save();
    carrito.items = [];
    await carrito.save();

    res.redirect(`/carrito/orden-confirmada/${orden._id}`);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message || 'Error al crear la orden' });
  }
};

// Controlador para mostrar historial de órdenes
const mostrarOrdenes = async (req, res) => {
  try {
    const usuarioId = req.session.user.id;
    
    const ordenes = await Orden.find({ usuarioId })
      .populate('items.producto')
      .sort({ createdAt: -1 });
    
    res.render('misOrdenes', {
      ordenes,
      title: 'Mis Órdenes'
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al obtener las órdenes');
  }
};

module.exports = {
  verCarrito,
  agregarProducto,
  eliminarProducto,
  actualizarCantidad,
  mostrarCheckout,
  mostrarOrdenConfirmada,
  crearOrden,
  mostrarOrdenes
};