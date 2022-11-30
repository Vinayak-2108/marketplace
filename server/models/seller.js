const express = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema();

const Seller = new mongoose.Schema({
    seller_name: String,
    seller_email: String,
    seller_password: String,
    seller_mobileNo: Number
})

module.exports = mongoose.model('Seller', Seller);