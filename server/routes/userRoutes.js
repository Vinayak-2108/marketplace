const express = require('express');
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const User = require("../models/user");

router.post("/signup", async (req, res) => {
    
    let {user_name , user_email, user_password, user_mobileNo} = req.body;

    const result = await User.findOne({user_email});

    if(result){
        return res.json({"message": "user exists"});
    }
    else{
        let hash = bcrypt.hashSync(user_password, 10);
        user_password = hash;

        const user = new User({
            user_email, user_password, user_mobileNo, user_name
        })

        user.save(function(err, document){
            if(err){
                console.log(err);
                return res.json({"message": "try again"});
            }
            return res.json({"message": "User signned up successfully"})
        })
    }
});

router.post('/login', async (req, res) => {
    const obj = req.body;
    const result = await User.findOne({user_email: obj.user_email});
    if(result){
        bcrypt.compare(req.body.user_password, result.user_password, function(err, hashed){
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