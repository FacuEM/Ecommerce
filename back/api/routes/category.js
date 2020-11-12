const router = require("express").Router();

const { Category } = require("../../models");

router.post("/newCategory", (req, res) => {
  Category.create(req.body)
    .then((category) => res.status(201).send(category))
    .catch((err) => console.log(err));
});

router.get("/", (req, res) => {
  Category.findAll()
    .then((cat) => res.send(cat))
    .catch((err) => console.log(err));
});

router.get("/:id", (req, res) => {
  Category.findByPk(req.params.id)
    .then((cat) => {
      console.log(cat);
      return res.send(cat);
    })
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
