import { request, response } from "express";
import CouponsModel from "./entity.js";

const getAllCoupons = async (req = request, resp = response) => {

    try {

        const coupons = await CouponsModel.find().populate('course');

        return resp.status(200).json({
            message: "Cupones obtenidos con éxito",
            coupons: coupons
        });

    } catch (error) {
        console.error(error);
        return resp.status(500).json({
            message: "Error al obtener los cupones",
            error: error.message
        });
    }
};

const createCoupons = async (req = request, resp = response) => {

    try {

        if (req.user.role !== 'moderador') {
            return resp.status(401).json({
                message: "No tiene permisos para realizar esta acción"
            });
        }

        const { course, discount, dateFrom, dateUntil, active } = req.body;

        if (!course || !discount) {
            return resp.status(401).json({
                message: "Todos los campos son obligatorios",
            });
        }

        const newCoupon = await CouponsModel.create({
            course: course,
            discount: discount,
            dateFrom: dateFrom,
            dateUntil: dateUntil,
            active: active,
        });

        const savedCoupon = await newCoupon.save();

        return resp.status(200).json({
            message: "Cupón creado con éxito",
            coupon: savedCoupon
        });

    } catch (error) {
        console.error(error);
        return resp.status(500).json({
            message: "Error al crear el cupón",
            error: error.message
        });
    }
};

const updateCoupons = async (req = request, resp = response) => {

    try {

        if (req.user.role !== 'moderador') {
            return resp.status(401).json({
                message: "No tiene permisos para realizar esta acción"
            });
        }

        const { couponId } = req.params;
        const { ...rest } = req.body;

        const updatedCoupon = await CouponsModel.findByIdAndUpdate(couponId, { ...rest });

        if (!updatedCoupon) {
            return resp.status(404).json({
                message: "Cupón no encontrado para actualizar"
            });
        }

        return resp.status(200).json({
            message: "Cupón actualizado con éxito",
            coupon: updatedCoupon,
        });

    } catch (error) {
        console.error(error);
        return resp.status(500).json({
            message: "Error al actualizar el cupón",
            error: error.message
        });
    }
};

const deleteCoupons = async (req = request, resp = response) => {
    
    try {

        if (req.user.role !== 'admin') {
            return resp.status(401).json({
                message: "No tiene permisos para realizar esta acción"
            });
        }

        const { couponId } = req.params;

        const deletedCoupon = await CouponsModel.findByIdAndDelete(couponId);

        if (!deletedCoupon) {
            return resp.status(404).json({
                message: "Cupón no encontrado para eliminar"
            });
        }

        return resp.status(200).json({
            message: "Cupón eliminado con éxito"
        });

    } catch (error) {
        console.error(error);
        return resp.status(500).json({
            message: "Error al eliminar el cupón",
            error: error.message
        });
    }
};

export {
    getAllCoupons,
    createCoupons,
    updateCoupons,
    deleteCoupons
};