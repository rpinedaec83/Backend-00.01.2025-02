require('dotenv').config();
const mongoose = require('mongoose');

const clienteImpl = require('./Persistence/ClienteImpl');
const vendedorImpl = require('./Persistence/VendedorImpl');
const productoImpl = require('./Persistence/ProductoImpl');
const cuponImpl = require('./Persistence/CuponImpl');
const pedidoClienteImpl = require('./Persistence/PedidoClienteImpl');
const pedidoVendedorImpl = require('./Persistence/PedidoVendedorImpl');


//INSERTAR:
/*
const nuevoCliente = {
  nombre: "Ana",
  correo: "flavio@test.com",
  telefono: "123456789",
  contraseña: "123456",
  direccionEntrega: "Av. Siempre Viva",
  fechaNacimiento: new Date("2000-01-01"),
  cupones: [],
  historialCompras: []
};

const nuevoVendedor = {
  nombre: "Carlos",
  correo: "pedro123@test.com",
  telefono: "987654321",
  contraseña: "securepass",
  nombreTienda: "Carlos Store",
  tipoNegocio: "Persona individual",
  rucDni: "12345678901",
  direccionNegocio: "Av. Los Vendedores 456",
  categoriaPrincipal: "tecnología",
  productos: []
};

const nuevoProducto = {
  nombre: "Laptop",
  descripcion: "Laptop gamer",
  precio: 4500,
  vendedorId: null, // será asignado luego
  categoria: "tecnología"
};

const nuevoCupon = {
  codigo: "DESC200",
  descuento: 100,
  vendedorId: null, // será asignado luego
  limiteUso: 5,
  condicionMinimoCompra: 300
};

const nuevoPedidoComprador = {
  clienteId: null, // será asignado luego
  productosPorTienda: [],
  total: 0,
  direccion: "Av. Siempre Viva 123",
  telefono: "987654321",
  nombres: "Ana Test",
  cuponesAplicados: []
};

const nuevoPedidoVendedor = {
  vendedorId: null, // será asignado luego
  productos: [],
  datosCliente: {
    nombre: "Ana Test",
    direccion: "Av. Siempre Viva 123",
    telefono: "987654321"
  },
  total: 0,
  estado: "pendiente"
};

const ejecutar = async () => {
  try {
    const cliente = await clienteImpl.insertar(nuevoCliente); //BIEN
    console.log("Resultado cliente:", cliente);

    const vendedor = await vendedorImpl.insertar(nuevoVendedor);//BIEN
    console.log("Resultado vendedor:", vendedor);

    // Insertar Producto con el ID del vendedor
    nuevoProducto.vendedorId = vendedor._id;
    const producto = await productoImpl.insertar(nuevoProducto);//BIEN
    console.log("Resultado producto:", producto);

    // Insertar Cupón con el ID del vendedor
    nuevoCupon.vendedorId = vendedor._id;
    const cupon = await cuponImpl.insertar(nuevoCupon);//BIEN
    console.log("Resultado cupón:", cupon);

    // Insertar Pedido del Comprador con su ID y productos
    nuevoPedidoComprador.clienteId = cliente._id;
    nuevoPedidoComprador.productosPorTienda = [{
      tiendaId: vendedor._id,
      productos: [{ productoId: producto._id, cantidad: 1 }],
      subtotal: producto.precio
    }];
    nuevoPedidoComprador.total = producto.precio;
    const pedidoComprador = await pedidoCompradorImpl.insertar(nuevoPedidoComprador);
    console.log("Resultado pedido cliente:", pedidoComprador);

    // Insertar Pedido del Vendedor
    nuevoPedidoVendedor.vendedorId = vendedor._id;
    nuevoPedidoVendedor.productos = [{ productoId: producto._id, cantidad: 1 }];
    nuevoPedidoVendedor.total = producto.precio;
    const pedidoVendedor = await pedidoVendedorImpl.insertar(nuevoPedidoVendedor);
    console.log("Resultado pedido vendedor:", pedidoVendedor); //BIEN

  } catch (error) {
    console.error("Error general:", error);
  } finally {
    await mongoose.disconnect();
  }
};

ejecutar();
*/
const ejecutarListados = async () => {
  try {
    const clientes = await clienteImpl.listarTodos();
    console.log("📋 Clientes:");
    console.log(clientes);

    const vendedores = await vendedorImpl.listarTodos();
    console.log("\n📋 Vendedores:");
    console.log(vendedores);

    const productos = await productoImpl.listarTodos();
    console.log("\n📋 Productos:");
    console.log(productos);

    const cupones = await cuponImpl.listarTodos();
    console.log("\n📋 Cupones:");
    console.log(cupones);

    const pedidosCliente = await pedidoClienteImpl.listarTodos();
    console.log("\n📋 Pedidos de Cliente:");
    console.log(pedidosCliente);

    const pedidosVendedor = await pedidoVendedorImpl.listarTodos();
    console.log("\n📋 Pedidos de Vendedor:");
    console.log(pedidosVendedor);

  } catch (error) {
    console.error("Error general al listar:", error);
  } finally {
    await mongoose.disconnect();
  }
};

ejecutarListados();
