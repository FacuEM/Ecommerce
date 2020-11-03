const express = require("express");
const router = express.Router();
const { User, Product, Orders, Review, Category } = require("../../models");

router.use("/user", User);
router.use("/products", Product);

module.exports = router;
