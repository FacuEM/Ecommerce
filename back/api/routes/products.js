const router = require("express").Router();
const { Op } = require("sequelize");

const { Product, Category } = require("../../models");

router.get("/", (req, res) => {
  let likeQuery = `%${req.query.name}%`;
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

module.exports = router;
