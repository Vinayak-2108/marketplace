const express = require('express');
const mongoose = require('mongoose');


const User = new mongoose.Schema({
    user_name: String,
    user_email: String,
    user_password: String,
    user_mobileNo: Number
})

module.exports = mongoose.model('User', User);