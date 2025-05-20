import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { loadStripe } from "@stripe/stripe-js";

function StripePayment() {
    const [product, setProduct] = useState({
        name: "Curso de IOS 2025",
        price: 199,
        productOwner: "Roberto Pineda",
        description: "Curso de IOS Avanzado",
        quantity: 1
    });

    const hacerPago = async () => {
        console.log("Hizo Click");
        const stripe = await loadStripe("pk_test_51NcxTJAkNYfeym1I2nddmvG02uLV9OcwrG3HJIOq59ebzgXjXQ78wTOUd6WIpmdykJCJiXNbbq0yg2tp3ZwN2Fxc00a67VDtbf")
        const body = { product };
        console.log(body);
        const headers = {
            "Content-Type": "application/json"
        }
        const response = await fetch(
            "http://localhost:8000/api/create-checkout-session",
            {
                method: "POST",
                headers: headers,
                body: JSON.stringify(body)
            }
        );
        const session = await response.json();
        const result = await stripe.redirectToCheckout({
            sessionId: session.id
        });
        console.log(result);
        if (result.error) {
            console.log(result.error)
        }
    }


    return (
        <Card style={{ width: "40rem" }}>
            <Card.Img variant="top" src="https://picsum.photos/300/150" />
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>{product.description}</Card.Text>
            <Button variant="primary" onClick={hacerPago}>Compra este curso por S./ {product.price}</Button>

        </Card>
    );
}

export default StripePayment;