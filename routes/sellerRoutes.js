const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const Seller = require("../models/seller");
const Product = require("../models/product");

router.post("/auth", async (req, res) => {
  const token = req.body.token;
  try {
    const decoded = jwt.verify(token, "marketplace");
    const user = Seller.findOne({ _id: decoded.id });
    return res.json({
      tag: true,
      message: "Authenticated user",
    });
  } catch (error) {
    console.log(error);
    return res.json({
      tag: false,
      message: "Not Authenticated Seller",
    });
  }
});

router.post("/signup", async (req, res) => {
  let { seller_name, seller_email, seller_password, seller_mobileNo } =
    req.body;

  const result = await Seller.findOne({ seller_email });

  if (result) {
    return res.json({ message: "seller exists" });
  } else {
    const salt = bcrypt.genSaltSync(10);
    let hash = await bcrypt.hash(seller_password, salt);
    seller_password = hash;

    const seller = new Seller({
      seller_email,
      seller_password,
      seller_mobileNo,
      seller_name,
    });

    seller.save(function (err, document) {
      if (err) {
        console.log(err);
        return res.json({ message: "try again" });
      }
      return res.json({ message: "seller signned up successfully" });
    });
  }
});

router.post("/login", async (req, res) => {
  const obj = req.body;
  const result = await Seller.findOne({ seller_email: obj.seller_email });
  if (result) {
    bcrypt.compare(
      req.body.seller_password,
      result.seller_password,
      function (err, hashed) {
        if (hashed === true) {
          const token = jwt.sign({ id: result._id }, "marketplace");
          return res.json({ message: "Login success", token: token });
        } else {
          return res.json({ message: "Login failed" });
        }
      }
    );
  }
});

router.get("/allproducts", async (req, res) => {
  let product = await Product.find();
  if (product.length > 0) {
    let obj = product;

    return res.json({ message: obj });
  }
  return res.json({ message: "Product not found" });
});

router.post("/product", async (req, res) => {
  let { product_name, p_id, description } = req.body;

  const product = new Product({
    product_name,
    p_id,
    description,
  });
  product.save(function (error, document) {
    if (error) {
      console.error(error);
      return res.json({ message: "try again" });
    }
    return res.json({ message: "product added successfully" });
  });
});


router.put('/products', async (req, res) => {
  let {_id, counter} = req.body;
  console.log('error');

  const product = await Product.findOne({_id});

  product.counter = counter;

  product.save(function (error, document) {
    if(error){
      console.error(error);
      return res.json({"message" : "try again", "tag" : false})
    }

    return res.json({"message": "product updated", "tag": true})
  })
})

module.exports = router;
