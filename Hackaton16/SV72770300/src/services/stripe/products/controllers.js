import { request, response } from "express";
import { body } from "express-validator";
import ProductModel from "../../../modules/product/entity.js"

import { stripeCliente } from "../clients/controllers.js"

const getAllProductStripe = async (req = request, res = response) => {

    try {

        const productsStripe = await stripeCliente.products.list({ active: true });
        const productsMysql = await ProductModel.findAll({
            where: { active: true },
        });

        res.status(200).json({
            message: "Productos obtenidos con éxito",
            product_Stripe: productsStripe,
            product_MySQL: productsMysql
        })
    } catch (error) {
        console.error("Error al obtener los productos:", error);
        res.status(500).json({
            message: "Error al obtener los productos",
            error: error.message
        });
    }
}

const createProductStripe = async (req = request, res = response) => {

    try {

        const data = req.body;

        const newProduct = await stripeCliente.products.create({
            name: data.name,
            default_price_data: {
                currency: "usd",
                unit_amount: data.price
            },
            images: data.images,
            description: data.description
        })

        const priceId = newProduct.default_price;
        const price = await stripeCliente.prices.retrieve(priceId);

        const productMysql = await ProductModel.create({
            id: newProduct.id,
            name: newProduct.name,
            description: newProduct.description,
            price: price.unit_amount,
            currency: price.currency,
            active: true
        })

        res.status(200).json({
            message: "Producto creado con éxito",
            customer_Stripe: newProduct,
            customer_MySQL: productMysql
        })
    } catch (error) {
        console.error("Error al crear producto:", error);
        res.status(500).json({
            message: "Error al crear el producto",
            error: error.message
        });
    }
}

const updateProductStripe = async (req = request, res = response) => {
    try {
        const { idProduct } = req.params;
        const { name, description, price, active } = req.body;

        const stripeUpdateData = {};

        if (name !== undefined) stripeUpdateData.name = name;
        if (description !== undefined) stripeUpdateData.description = description;
        if (active !== undefined) stripeUpdateData.active = active;

        let updatedProductStrip;

        if (Object.keys(stripeUpdateData).length > 0) {
            updatedProductStrip = await stripeCliente.products.update(idProduct, stripeUpdateData);
        }

        let newPrice;
        if (price !== undefined) {
            newPrice = await stripeCliente.prices.create({
                unit_amount: price,
                currency: "usd",
                product: idProduct
            });

            await stripeCliente.products.update(idProduct, {
                default_price: newPrice.id
            });
        }

        const updateDataMySQL = {};
        if (name !== undefined) updateDataMySQL.name = name;
        if (description !== undefined) updateDataMySQL.description = description;
        if (newPrice) {
            updateDataMySQL.price = newPrice.unit_amount;
            updateDataMySQL.currency = newPrice.currency;
        }
        if (active !== undefined) updateDataMySQL.active = active;

        let updatedProductMysql;
        if (Object.keys(updateDataMySQL).length > 0) {
            await ProductModel.update(updateDataMySQL, {
                where: { id: idProduct }
            });

            updatedProductMysql = await ProductModel.findOne({
                where: { id: idProduct }
            });

        }

        res.status(200).json({
            message: "Producto actualizado con éxito",
            product_Stripe: updatedProductStrip,
            product_MySQL: updatedProductMysql
        });

    } catch (error) {
        console.error("Error al actualizar producto:", error);
        res.status(500).json({
            message: "Error al actualizar el producto",
            error: error.message
        });
    }
};

const deleteProductStripe = async (req = request, res = response) => {
    try {
        const { idProduct } = req.params;

        const productFoundMysql = await ProductModel.findOne({ where: { id: idProduct } });

        if (!productFoundMysql) {
            return res.status(404).json({
                message: "Producto no encontrado en la base de datos MySQL"
            });
        }

        try {
            const productFoundStripe = await stripeCliente.products.retrieve(idProduct);
            if (productFoundStripe && productFoundStripe.active) {
                await stripeCliente.products.update(idProduct, { active: false });
            }
        } catch (error) {
            console.log("Producto no encontrado o ya archivado en Stripe:", error.message);
        }

        await ProductModel.update(active = false, { where: { id: idProduct } });

        res.status(200).json({
            message: "Producto desactivado en Stripe y MySQL con éxito"
        });
    } catch (error) {
        console.error("Error al eliminar el producto:", error);
        res.status(500).json({
            message: "Error al eliminar el producto",
            error: error.message
        });
    }
};


export {
    getAllProductStripe,
    createProductStripe,
    updateProductStripe,
    deleteProductStripe
}