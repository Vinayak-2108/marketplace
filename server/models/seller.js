const express = require('express');
const mongoose = require('mongoose');


const Seller = new mongoose.Schema({
    seller_name: String,
    seller_email: String,
    seller_password: String,
    seller_phone: Number
})

module.exports = mongoose.model('Seller', Seller);