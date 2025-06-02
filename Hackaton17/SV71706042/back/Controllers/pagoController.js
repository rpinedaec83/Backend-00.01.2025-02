const stripe = require('../Config/stripe');

exports.createCheckoutSession = async (req, res) => {
  try {
    const { product } = req.body;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'pen',
            product_data: { name: product.name },
            unit_amount: product.price * 100
          },
          quantity: product.quantity
        }
      ],
      mode: 'payment',
      success_url: 'https://fsar-render.onrender.com/success.html',
      cancel_url: 'https://fsar-render.onrender.com/cancel.html'
    });

    res.json({ url: session.url }); // ✅ URL completa
  } catch (error) {
    console.error('Error en Stripe:', error);
    res.status(500).json({ error: 'No se pudo crear sesión' });
  }
};
