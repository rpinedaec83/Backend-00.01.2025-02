const Producto = require('../models/Producto');
const Carrito = require('../models/Carrito');

const productosController = {
  // Obtener conteo de items en el carrito
  getCartCount: async (req, res) => {
    try {
      const usuarioId = req.user._id; // Ahora usa el usuario autenticado
      const carrito = await Carrito.findOne({ usuarioId });
      
      const count = carrito ? carrito.items.reduce((sum, item) => sum + item.cantidad, 0) : 0;
      
      res.json({ success: true, count });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: 'Error al obtener conteo' });
    }
  },

  // Listar productos con paginación
  listProducts: async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = 9;
    const skip = (page - 1) * limit;

    try {
      const productos = await Producto.find()
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit)
        .lean();

      const count = await Producto.countDocuments();
      const totalPages = Math.ceil(count / limit);

      res.render('productos', {
        productos,
        currentPage: page,
        totalPages,
        hasNextPage: page < totalPages,
        hasPreviousPage: page > 1,
        nextPage: page + 1,
        previousPage: page - 1
      });
    } catch (err) {
      console.error(err);
      res.render('productos', { productos: [] });
    }
  },

  // Mostrar formulario para nuevo producto
  showNewProductForm: (req, res) => {
    res.render('nuevo-producto');
  },

  // Crear nuevo producto
  createProduct: async (req, res) => {
    try {
      const { nombre, descripcion, precio, marca, stock } = req.body;
      const imagen = req.file ? req.file.filename : 'default-product.jpg';
      
      const nuevoProducto = new Producto({
        nombre,
        descripcion,
        precio,
        marca,
        imagen,
        stock
      });

      await nuevoProducto.save();
      res.redirect('/');
    } catch (err) {
      console.error(err);
      res.status(500).send('Error al crear el producto');
    }
  },

  // Mostrar detalle de producto
  showProductDetail: async (req, res) => {
    try {
      const producto = await Producto.findById(req.params.id).lean();
      if (!producto) {
        return res.status(404).send('Producto no encontrado');
      }
      res.render('producto-detalle', { producto });
    } catch (err) {
      console.error(err);
      res.status(500).send('Error al cargar el producto');
    }
  },

  // Mostrar carrito
  showCart: (req, res) => {
    res.render('carrito');
  }
};

module.exports = productosController;