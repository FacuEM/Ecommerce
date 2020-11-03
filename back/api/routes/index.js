const express = require("express");
const router = express.Router();
const userRoutes = require("./user");
const productsRoutes = require("./products");

router.use("/user", userRoutes);
router.use("/products", productsRoutes);

module.exports = router;
