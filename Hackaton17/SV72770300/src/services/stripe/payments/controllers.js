import { request, response } from "express";
// import { body } from "express-validator";

import { stripeCliente } from "../clients/controllers.js"
import PaymentModel from "../../../modules/payment/entity.js"

const createPaymentStripe = async (req = request, res = response) => {

    try {
        const data = req.body;

        const productFound = await stripeCliente.products.retrieve(data.productId);

        const newCheckOutPayment = await stripeCliente.checkout.sessions.create({
            success_url: "http://localhost:4000/success",
            line_items: [{
                price: productFound.default_price,
                quantity: data.quantity
            }],
            customer: data.customer,
            mode: "payment"
        })

        const paymentMysql = await PaymentModel.create({
            stripeSessionId: newCheckOutPayment.id,
            productId: data.productId,
            quantity: data.quantity,
            customerId: data.customer,
            amount_total: newCheckOutPayment.amount_total || 0,
            currency: newCheckOutPayment.currency || 'usd',
            status: newCheckOutPayment.status || 'pending'
        });

        res.status(200).json({
            message: "Payment creado con éxito",
            payment_Stripe: newCheckOutPayment,
            payment_Mysql: paymentMysql
        })
    } catch (error) {
        console.error("Error al crear el payment:", error);
        res.status(500).json({
            message: "Error al crear el payment:",
            error: error.message
        });
    }
}


const stripeWebhook = async (req = request, res = response) => {
    const sig = req.headers['stripe-signature'];
    const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

    let event;

    try {
        event = stripeCliente.webhooks.constructEvent(req.rawBody, sig, endpointSecret);
    } catch (error) {
        console.error("Error en el webhook:", error.message);
        return res.status(400).send(`Webhook Error: ${error.message}`);
    }

    if (event.type === 'checkout.session.completed') {
        const session = event.data.object;
        console.log("Session.id recibido:", session.id);

        try {
            const paymentFound = await PaymentModel.findOne({ where: { stripeSessionId: session.id } });
            console.log("Payment encontrado en la Base de Datos:", paymentFound);

            if (!paymentFound) {
                console.error(`No se encontró Payment con stripeSessionId=${session.id}`);
                return res.status(404).send("Payment no encontrado");
            }

            const result = await PaymentModel.update(
                { status: 'complete' },
                { where: { stripeSessionId: session.id } }
            );

            console.log(`Payment actualizado para session: ${session.id}`, result);
        } catch (error) {
            console.error("Error al actualizar el status del payment:", error);
        }
    }

    res.status(200).json({ received: true });
};




const getAllPaymentsStripe = async (req = request, res = response) => {

    try {
        const payments = await stripeCliente.paymentIntents.list({
            limit: 3,
        });

        res.status(200).json({
            message: "Payments obtenidos con éxito",
            sessions: payments.data,
        })

    } catch (error) {
        console.error("Error al obtener los payments:", error);
        res.status(500).json({
            message: "Error al obtener los payments:",
            error: error.message
        });
    }
}


const checkoutSessioFound = async (req = request, res = response) => {

    try {
        const id = req.body.session;
        console.log(id);

        const foundSession = await stripeCliente.checkout.sessions.retrieve(id);

        const payment = await stripeCliente.paymentIntents.retrieve(
            foundSession.payment_intent
        );

        res.status(200).json({
            message: "Checkout session encontrado",
            sessionCheckOut: foundSession,
            paymentIntent: payment.id,
        })
    } catch (error) {
        console.error("Error al obtener el Checkout Session:", error);
        res.status(500).json({
            message: "Error al obtener el Checkout Session:",
            error: error.message
        });
    }
};

const getAllCheckoutSessionsStripe = async (req = request, res = response) => {

    try {
        const sessionsStripe = await stripeCliente.checkout.sessions.list({
            limit: 3,
        });

        const sessionsMysql = await PaymentModel.findAll()

        res.status(200).json({
            message: "Checkout-Sessions obtenidas con éxito",
            sessions_Stripe: sessionsStripe.data,
            sessions_Mysql: sessionsMysql
        })

    } catch (error) {
        console.error("Error al obtener los Checkout-Sessions:", error);
        res.status(500).json({
            message: "Error al obtener los Checkout-Sessions:",
            error: error.message
        });
    }
}


const createRefundsStripe = async (req = request, res = response) => {

    try {
        const data = req.body;
        const foundSession = await stripeCliente.checkout.sessions.retrieve(data.session);
        const payment = await stripeCliente.paymentIntents.retrieve(
            foundSession.payment_intent
        );

        const refund = await stripeCliente.refunds.create({
            payment_intent: payment.id,
            amount: data.amount ?? payment.amount
        })

        res.status(200).json({
            message: "Refund creado con éxito",
            refund: refund
        })
    } catch (error) {
        console.error("Error al crear el Refund:", error);
        res.status(500).json({
            message: "Error al crear el Refund:",
            error: error.message
        });
    }
};

const getAllRefundsStripe = async (req = request, res = response) => {

    try {
        const refunds = await stripeCliente.refunds.list({
            limit: 3,
        });

        res.status(200).json({
            message: "Refunds obtenidos con éxito",
            sessions: refunds.data,
        })

    } catch (error) {
        console.error("Error al obtener los refunds:", error);
        res.status(500).json({
            message: "Error al obtener los refunds:",
            error: error.message
        });
    }
}


export {
    createPaymentStripe,
    getAllPaymentsStripe,
    checkoutSessioFound,
    getAllCheckoutSessionsStripe,
    createRefundsStripe,
    getAllRefundsStripe,
    stripeWebhook
}