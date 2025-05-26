import { request, response } from "express";
import { validationResult } from "express-validator";

const validateFields = async (req = request, res = response, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next()
  } catch (err) {
    console.log('Error en validateFields:', err);
  }
};

export {validateFields}