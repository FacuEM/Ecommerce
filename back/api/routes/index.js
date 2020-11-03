const express = require("express");
const router = express.Router();
const {User}=require('../../models')

router.use("/user", User);

/* router.use("/products", require("./products")); */

module.exports = router;
