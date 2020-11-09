const express = require("express");
const router = express.Router();

const userRoutes = require("./user");
const productsRoutes = require("./products");
const categoryRoutes = require("./category");
const orderRoutes = require("./order");
const reviewRoutes = require("./review");

router.use("/user", userRoutes);
router.use("/products", productsRoutes);
router.use("/category", categoryRoutes);
router.use("/car", orderRoutes);
router.use("/review", reviewRoutes);

module.exports = router;
