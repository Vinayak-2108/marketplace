const express = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema();

const Products = new Schema({
    "product": String,
    "id": Number,
    "description": String
})

module.exports = mongoose.model('Product', Products);