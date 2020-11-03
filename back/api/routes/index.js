const express = require("express");
const router = express.Router();
const userRoute = require("./user")

router.use("/user", userRoute);
/* router.use("/products", require("./products")); */

module.exports = router;
