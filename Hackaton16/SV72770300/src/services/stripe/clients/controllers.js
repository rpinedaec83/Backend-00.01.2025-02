import { Stripe } from "stripe";
import { request, response } from "express";
import { body } from "express-validator";
import ClientModel from "../../../modules/client/entity.js"

const stripeCliente = new Stripe(process.env.KEY_SECRET_STRIPE);

const getAllCustomerStripe = async (req = request, res = response) => {

    try {

        const customersStrip = await stripeCliente.customers.list();
        const customersStripeFiltered = customersStrip.data.filter(c => c.metadata?.active === "true");
        const customersMysql = await ClientModel.findAll({
            where: { active: true },
        });

        res.status(200).json({
            message: "Clientes encontrados con éxito",
            customer_Strip: customersStripeFiltered,
            customer_Mysql: customersMysql
        })
    } catch (error) {
        console.error("Error al obtener los clientes:", error);
        res.status(500).json({
            message: "Error al obtener los clientes",
            error: error.message
        });
    }
}

const createCustomerStripe = async (req = request, res = response) => {
    const data = req.body;

    if (!data.name || !data.email) {
        return res.status(400).json({
            message: "El nombre y el correo electrónico son obligatorios"
        })
    }

    const newCustomer = await stripeCliente.customers.create({
        name: data.name,
        email: data.email,
        phone: data.phone,
        metadata: {
            active: String(data.active ?? true)
        }
    })

    const customerMysql = await ClientModel.create({
        id: newCustomer.id,
        name: newCustomer.name,
        email: newCustomer.email,
        phone: newCustomer.phone,
        active: String(data.active ?? true)
    })

    res.status(200).json({
        message: "Cliente creado con éxito",
        customer_Stripe: newCustomer,
        customer_Mysql: customerMysql
    })
}

const updateCustomerStripe = async (req = request, res = response) => {
    try {
        const { idCustomer } = req.params;
        const { name, email, phone, active } = req.body;

        const stripeUpdateData = {};
        const metadataUpdate = {};

        if (name !== undefined) stripeUpdateData.name = name;
        if (email !== undefined) stripeUpdateData.email = email;
        if (phone !== undefined) stripeUpdateData.phone = phone;
        if (active !== undefined) metadataUpdate.active = active;

        if (Object.keys(metadataUpdate).length > 0) {
            stripeUpdateData.metadata = metadataUpdate;
        }

        let updatedCustomerStrip;

        if (Object.keys(stripeUpdateData).length > 0) {
            updatedCustomerStrip = await stripeCliente.customers.update(idCustomer, stripeUpdateData);
        }

        const updateDataMySQL = {};
        if (name !== undefined) updateDataMySQL.name = name;
        if (email !== undefined) updateDataMySQL.email = email;
        if (phone !== undefined) updateDataMySQL.phone = phone;
        if (active !== undefined) updateDataMySQL.active = active;

        let updatedCustomerMysql;
        if (Object.keys(updateDataMySQL).length > 0) {
            await ClientModel.update(updateDataMySQL, {
                where: { id: idCustomer }
            });

            updatedCustomerMysql = await ClientModel.findOne({
                where: { id: idCustomer }
            });
        }

        res.status(200).json({
            message: "Customer actualizado con éxito",
            customer_Stripe: updatedCustomerStrip,
            customer_MySQL: updatedCustomerMysql
        });

    } catch (error) {
        console.error("Error al actualizar cliente:", error);
        res.status(500).json({
            message: "Error al actualizar el cliente",
            error: error.message
        });
    }
};


const deleteCustomerStripe = async (req = request, res = response) => {
    try {
        const { idCustomer } = req.params;

        const customerFoundMysql = await ClientModel.findOne({ where: { id: idCustomer } });

        if (!customerFoundMysql) {
            return res.status(404).json({
                message: "Cliente no encontrado en la base de datos MySQL"
            });
        }

        try {
            const customerFoundStripe = await stripeCliente.customers.retrieve(idCustomer);

            if (customerFoundStripe.metadata.active === true) {
                await stripeCliente.customers.update(idCustomer, { metadata: { active: false } });
            }
        } catch (error) {
            console.log("Cliente no encontrado o ya archivado en Stripe:", error.message);
        }

        await ClientModel.update({ active: false }, { where: { id: idCustomer } });

        res.status(200).json({
            message: "Cliente desactivado en Stripe y MySQL con éxito"
        });
    } catch (error) {
        console.error("Error al eliminar el cliente:", error);
        res.status(500).json({
            message: "Error al eliminar el cliente",
            error: error.message
        });
    }
};

export {
    getAllCustomerStripe,
    createCustomerStripe,
    updateCustomerStripe,
    deleteCustomerStripe,
    stripeCliente
}