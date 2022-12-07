const express = require('express');
const mongoose = require('mongoose');

const Product = new mongoose.Schema({
    product_name: String,
    p_id: Number,
    description: String,
    counter: Number,
})

module.exports = mongoose.model('Product', Product);