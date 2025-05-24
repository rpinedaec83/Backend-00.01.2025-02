import Stripe from "stripe";
import { request, response } from "express";
const stripeClient = new Stripe(process.env.STRIPE_SECRET_KEY);

const createCustomerStripe = async (req = request, resp = response) => {
  const data = req.body;
  if (!data.name || !data.email) {
    return resp.status(400).json({ message: "name and email is required" });
  }
  const newCustomer = await stripeClient.customers.create({
    name: data.name,
    email: data.email,
  });

  resp.json({ newCustomer });
};

const createProducts = async (req = request, resp = response) => {
  const data = req.body;

  const newProduct = await stripeClient.products.create({
    name: data.name,
    default_price_data: {
      currency: "usd",
      unit_amount: data.price,
    },
    images: data.images,
    description: data.description,
  });

  resp.json(newProduct);
};

const createPayment = async (req = request, resp = response) => {
  const data = req.body;

  const foundProduct = await stripeClient.products.retrieve(data.product);

  const newCheckoutPayment = await stripeClient.checkout.sessions.create({
    success_url: "https://www.google.com",
    // line_items: data.items,
    line_items: [
      {
        price: foundProduct.default_price,
        quantity: data.quantity,
      },
    ],
    customer: data.customer,
    mode: "payment",
  });

  resp.json(newCheckoutPayment);
};

const foundCheckoutSession = async (req = request, resp = response) => {
  ///1. buscar el checkout session
  //2.validar si tiene paymentIntents ***
  //3.traer el amount_total del session
  //4, crear el refunds
  /*
  
const refund = await stripeClient.refunds.create({
  payment_intent: 'pi_Aabcxyz01aDfoo',
});
  */
  const id = req.body.session;
  console.log(id);
  const foundSession = await stripeClient.checkout.sessions.retrieve(id);//1

  
  const payment = await stripeClient.paymentIntents.retrieve(
    foundSession.payment_intent
  );


  resp.json({ foundSession, payment });
};
export {
  createCustomerStripe,
  createProducts,
  createPayment,
  foundCheckoutSession,
};
