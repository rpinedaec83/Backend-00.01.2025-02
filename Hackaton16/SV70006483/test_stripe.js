const stripe = require('stripe')('sk_test_51RQeLJQPoY5O6I6JelgtronRZQ1Qp28yA9t7kROUOvUqtH35PAkyMYZUFa4WuGpYxJUivOadj7xdVbEZkKLlW0UN00f5ekjuaI');

async function testStripeConnection() {
  try {
    const paymentMethods = await stripe.paymentMethods.list({
      limit: 1,
      type: 'card',
    });
    console.log('Conexión exitosa a Stripe');
    console.log('Métodos de pago disponibles:', paymentMethods.data.length);
  } catch (error) {
    console.error('Error al conectar con Stripe:', error.message);
  }
}

testStripeConnection();