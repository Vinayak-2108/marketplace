const express = require('express');
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const Seller = require("../models/seller");

router.post("/signup", async (req, res) => {
    
    let {seller_name , seller_email, seller_password, seller_mobileNo} = req.body;

    const result = await Seller.findOne({seller_email});

    if(result){
        return res.json({"message": "seller exists"});
    }
    else{
        let hash = bcrypt.hashSync(seller_password, 10);
        seller_password = hash;

        const seller = new Seller({
            seller_email, seller_password, seller_mobileNo, seller_name
        })

        seller.save(function(err, document){
            if(err){
                console.log(err);
                return res.json({"message": "try again"});
            }
            return res.json({"message": "seller signned up successfully"})
        })
    }
});

router.post('/login', async (req, res) => {
    const obj = req.body;
    const result = await Seller.findOne({seller_email: obj.seller_email});
    if(result){
        bcrypt.compare(req.body.seller_password, result.seller_password, function(err, hashed){
            if(hashed === true){
                const token = jwt.sign({id: result._id}, 'marketplace');
                return res.json({"message": "Login success" ,"token": token});
            }
            else{
                return res.json({"message": "Login failed"});
            }
        })
    }
});


module.exports = router;