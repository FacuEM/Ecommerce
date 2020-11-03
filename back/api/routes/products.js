const router = require("express").Router();

const Products = require("../../models/products");

router.get((req, res) => {
  Products.findAll()
    .then((products) => res.send(products))
    .catch((err) => console.log(err));
});

router.get("/:id", (req, res) => {
  Products.findByPk(res.params.id)
    .then((product) => res.send(product))
    .catch((err) => console.log(err));
});

router.post("/newProduct", (req, res) => {
  Products.create();
});

router.put("/:id/editProduct", (req, res) => {
  Products.update();
});

router.delete("/:id/deleteProduct", (req, res) => {
  Products.destroy();
});

module.exports = router;
