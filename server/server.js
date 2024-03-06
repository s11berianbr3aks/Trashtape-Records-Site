require('dotenv').config()

const express = require('express')
const app = express

app.request(express.json())

const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY)

const storeItems = new Map([
    [1, {price: 10000, name: "Learn React Today"}],
    [2, {priceInCents: 20000, name: "Learn CSS Today"}],
])

app.listen(3000)