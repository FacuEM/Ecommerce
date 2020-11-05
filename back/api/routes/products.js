const router = require("express").Router();
const { Op } = require("sequelize");

const { Product, Category } = require("../../models");

router.get("/products", (req, res) => {
  let likeQuery = `%${req.query.name}%`;
  console.log(likeQuery);
  if (req.query.name) {
    Product.findAll({
      where: {
        name: {
          [Op.like]: likeQuery,
        },
      },
    })
      .then((products) => {
        res.send(products);
      })
      .catch((err) => console.log(err));
  } else {
    Product.findAll()
      .then((products) => {
        res.send(products);
      })
      .catch((err) => console.log(err));
  }
});

router.get("/:id", (req, res) => {
  Product.findByPk(req.params.id)
    .then((product) => res.send(product))
    .catch((err) => console.log(err));
});

router.get("/categories/:category", (req, res) => {
  Product.findAll({
    where: {
      categoryId: req.params.category,
    },
  })
    .then((products) => res.send(products))
    .catch((err) => console.log(err));
});

router.post("/newProduct", (req, res) => {
  Product.create(req.body)
    .then((producto) => {
      res.status(201).send(producto);
    })
    .catch((err) => console.log(err));
});

router.put("/:id/editProduct", (req, res) => {
  Product.update(req.body, {
    where: { id: req.params.id },
    returning: true,
    plain: true,
  })
    .then((producto) => res.send(producto))
    .catch((err) => console.log(err));
});

router.delete("/:id/deleteProduct", (req, res) => {
  Product.destroy({
    where: {
      id: req.params.id,
    },
  }).then(() => res.sendStatus(204));
});

module.exports = router;
