const router = require("express").Router();

const { Category } = require("../../models");

router.post("/newCategory", (req, res) => {
  Category.create(req.body)
    .then((category) => res.status(201).send(category))
    .catch((err) => console.log(err));
});

router.get("/categories", (req, res) => {
  Category.findAll()
    .then((cat) => res.send(cat))
    .catch((err) => console.log(err));
});

router.get("/:name", (req, res) => {
  Category.findOne({
    where: {
      name: req.params.name,
    },
  })
    .then((cat) => res.send(cat))
    .catch((err) => console.log(err));
});

router.delete("/:id/deleteCategory", (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id,
    },
  }).then(() => res.sendStatus(204));
});

module.exports = router;
