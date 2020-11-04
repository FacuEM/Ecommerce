const express = require("express");
const router = express.Router();
const userRoutes = require("./user");
const productsRoutes = require("./products");
const categoryRoutes = require("./category");

router.use("/user", userRoutes);
router.use("/products", productsRoutes);
router.use("/category", categoryRoutes);


module.exports = router;
