const validatePayment = (req, resp, next) => {

    const { cardNumber, cvv, expiryDate, amount } = req.body;

    if (!amount || !cardNumber || !cvv || !expiryDate) {
        return resp.status(400).json({
            message: "Todos los campos son obligatorios",
        });
    }

    if (cardNumber.length > 16 || cvv.length > 4) {
        return resp.status(400).json({
            message:
                "El número de tarjeta o el CVV deben tener un formato válido",
        });
    }

    const transferNumber = Math.floor(Math.random() * 1501410);

    const fecha = new Date();

    resp.status(200).json({
        message: "Se ha procesado la transacción con éxito",
        transferNumber: transferNumber,
        amountCharged: amount,
        cardNumber: cardNumber.slice(-4),
        // transferedDate: new Date().toLocaleDateString("es-ES"),
        transferedDate: fecha.toISOString().split("T")[0],
        status: "Éxito",
    });

    next();
};

export default validatePayment;