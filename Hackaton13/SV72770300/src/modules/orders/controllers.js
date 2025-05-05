import { request, response } from "express";
import PurcharseOrder from "./entity.js";

const getAllPurchaseOrders = async (req = request, resp = response) => {

    try {

        const orders = await PurcharseOrder.find();

        return resp.status(200).json({
            message: "Ordenes de compra obtenidos con éxito",
            parchaseOrder: orders
        });

    } catch (error) {
        console.error(error);
        return resp.status(500).json({
            message: "Error al obtener las ordenes de compra",
            error: error.message
        });
    }
}

const createPurchaseOrders = async (req = request, resp = response) => {

    try {

        if (req.user.role !== 'moderador') {
            return resp.status(401).json({
                message: "No tiene permisos para realizar esta acción"
            });
        }

        const { customer, products, total } = req.body;

        if (!customer || !products || !total) {
            return resp.status(400).json({
                message: "Todos los campos son obligatorios",
            });
        }

        const newPurchaseOrder = await PurcharseOrder.create({
            customer: customer,
            products: products,
            total: total,
        });

        const savedOrder = await newPurchaseOrder.save();

        return resp.status(200).json({
            message: "Orden de compra creada con éxito",
            parchaseOrder: savedOrder
        });

    } catch (error) {
        console.error(error);
        return resp.status(500).json({
            message: "Error al crear la orden de compra",
            error: error.message,
        });
    }
};

const updatePurchaseOrders = async (req = request, resp = response) => {

    try {

        if (req.user.role !== 'moderador') {
            return resp.status(401).json({ message: "No tiene permisos para realizar esta acción" });
        }

        const { purchaseOrderId } = req.params;
        const { ...rest } = req.body;

        const updateOrder = await PurcharseOrder.findByIdAndUpdate(purchaseOrderId, { ...rest });

        if (!updateOrder) {
            return resp.status(404).json({
                message: "Orden de compra no encontrada para actualizar"
            });
        }

        return resp.status(200).json({
            message: "Orden de compra actualizada con éxito",
            parchaseOrder: updateOrder,
        });

    } catch (error) {
        console.error(error);
        return resp.status(500).json({
            message: "Error al actualizar la orden de compra",
            error: error.message,
        });
    }
};

const deletePurchaseOrders = async (req = request, resp = response) => {
    
    try {

        if (req.user.role !== 'admin') {
            return resp.status(401).json({ message: "No tiene permisos para realizar esta acción" });
        }

        const { purchaseOrderId } = req.params;

        const deleteOrder = await PurcharseOrder.findByIdAndDelete(purchaseOrderId);

        if (!deleteOrder) {
            return resp.status(400).json({
                message: "Orden de compra no encontrada"
            });
        }


        return resp.status(200).json({
            message: "Orden de compra eliminada con éxito"
        });

    } catch (error) {
        console.error(error);
        return resp.status(500).json({
            message: "Error al eliminar la orden de compra",
            error: error.message,
        });
    }
}

export {
    getAllPurchaseOrders,
    createPurchaseOrders,
    updatePurchaseOrders,
    deletePurchaseOrders,
};