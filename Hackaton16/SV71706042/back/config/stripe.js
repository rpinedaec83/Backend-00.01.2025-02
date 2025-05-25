const dotenv = require('dotenv');
dotenv.config();

const stripe = require('stripe')(process.env.STRIPETOKEN);

module.exports = stripe;