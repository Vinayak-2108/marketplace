const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = process.env.PORT || 5000;
const dotenv = require("dotenv");
const cors = require("cors");

const userRoutes = require("./routes/userRoutes");
const sellerRoutes = require("./routes/sellerRoutes");

require("dotenv").config();

app.use(cors());
app.use(express.json());

const DB = process.env.MONGO_URI;

// try {
//   mongoose.connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   });
//   console.log("database connection established");
// } catch (err) {
//   console.log(err);
// }

mongoose.connect("mongodb+srv://vinayak:2108@cyethack.gvglmoi.mongodb.net/cyethack?retryWrites=true&w=majority").then(() => {
  console.log("database connection established")
}).catch((err) => {
  console.log(err);
})

// app.post('/', async (req, res) => {
//   console.log("yess");
// })

app.use("/api/user", userRoutes);
app.use("/api/seller", sellerRoutes);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
