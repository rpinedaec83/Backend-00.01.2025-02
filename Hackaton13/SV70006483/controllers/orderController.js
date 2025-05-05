const Order = require('../models/Order');
const Course = require('../models/Course');
const Coupon = require('../models/Coupon');

// Crear orden (solo Moderador)
exports.createOrder = async (req, res) => {
  try {
    const { courseId, couponCode } = req.body;
    const userId = req.user.id; // Asumiendo que el middleware de autenticación pone el id del usuario en req.user

    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(404).json({ msg: 'Curso no encontrado' });
    }
    // console.log('Curso:', course);


    let finalPrice = course.value;
    let coupon = null;

    if (couponCode) {
      coupon = await Coupon.findOne({ code: couponCode });
      if (coupon && coupon.isActive) {
        if (coupon.type === 'percentage') {
          finalPrice = course.value * (1 - coupon.value / 100);
        } else {
          finalPrice = Math.max(0, course.value - coupon.value);
        }
      }
    }

    // Asegurarse de que finalPrice sea un número válido
    finalPrice = Number(finalPrice.toFixed(2));

    // Verificar que finalPrice es un número válido
    if (isNaN(finalPrice)) {
      return res.status(400).json({ msg: 'El precio final calculado no es válido' });
    }

    const order = new Order({
      user: userId,
      course: courseId,
      originalPrice: course.value,
      finalPrice: finalPrice,
      coupon: coupon ? coupon._id : null
    });

    await order.save();

    if (coupon) {
      coupon.usageCount += 1;
      await coupon.save();
    }

    res.status(201).json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ 
      msg: 'Error del servidor', 
      error: error.message,
      stack: error.stack // Esto es útil para depuración, pero deberías quitarlo en producción
    });
  }
};

// Obtener todas las órdenes (Cualquiera autenticado)
exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find()
      .populate('user', 'name email')
      .populate('course', 'name price')
      .populate('coupon', 'code value type');
    res.json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Error del servidor' });
  }
};

// Obtener una orden por ID (Cualquiera autenticado)
exports.getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id)
      .populate('user', 'name email')
      .populate('course', 'name price')
      .populate('coupon', 'code value type');
    if (!order) {
      return res.status(404).json({ msg: 'Orden no encontrada' });
    }
    res.json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Error del servidor' });
  }
};

// Actualizar una orden (solo Moderador)
exports.updateOrder = async (req, res) => {
  try {
    const { status } = req.body;
    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    ).populate('user', 'name email')
     .populate('course', 'name price')
     .populate('coupon', 'code value type');

    if (!order) {
      return res.status(404).json({ msg: 'Orden no encontrada' });
    }
    res.json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Error del servidor' });
  }
};

// Eliminar una orden (solo Admin)
exports.deleteOrder = async (req, res) => {
  try {
    const order = await Order.findByIdAndDelete(req.params.id);
    if (!order) {
      return res.status(404).json({ msg: 'Orden no encontrada' });
    }
    res.json({ msg: 'Orden eliminada', order });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Error del servidor' });
  }
};
exports.processPayment = async (req, res) => {
  try {
      const orderId = req.params.id;
      const { paymentMethod, cardNumber } = req.body;

      // Aquí iría la lógica para verificar si la orden existe y si ya está pagada
      const order = await Order.findById(orderId);
      if (!order) {
          return res.status(404).json({ message: 'Orden no encontrada' });
      }
      if (order.isPaid) {
          return res.status(400).json({ message: 'Esta orden ya ha sido pagada' });
      }

      // Simulación de procesamiento de pago
      const isPaymentSuccessful = Math.random() < 0.8; // 80% de probabilidad de éxito

      if (isPaymentSuccessful) {
          // Actualizar la orden como pagada
          order.isPaid = true;
          order.paidAt = Date.now();
          order.status = 'completed'; // Actualizamos el estado de la orden a 'completed'
          order.paymentMethod = paymentMethod; // Guardamos el método de pago
          order.paymentResult = {
              id: Math.random().toString(36).substr(2, 9),
              status: 'COMPLETED',
              update_time: new Date().toISOString(),
              email_address: req.user.email
          };

          await order.save();

          res.json({ message: 'Pago procesado con éxito', order });
      } else {
          // Si el pago falla, podríamos considerar cambiar el estado a 'cancelled' o mantenerlo en 'pending'
          // order.status = 'cancelled'; // Descomenta esta línea si quieres cambiar el estado a 'cancelled' en caso de fallo
          // await order.save();
          res.status(400).json({ message: 'Error al procesar el pago. Por favor, intente de nuevo.' });
      }
  } catch (error) {
      res.status(500).json({ message: 'Error en el servidor', error: error.message });
  }
};