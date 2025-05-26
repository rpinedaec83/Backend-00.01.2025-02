const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

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