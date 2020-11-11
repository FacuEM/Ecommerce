const router = require("express").Router();

const { User, Product, Category, Orders } = require("../../models");

router.get("/users", (req, res) => {
  User.findAll({},{order:[['createdAt', 'ASC']]})
    .then((users) => {
      res.send(users);
    })
    .catch((e) => {
      console.log(e);
    });
});

router.put("/users/upgrade/:id", (req, res) => {
  User.update(
    { type: true },
    {
      where: { id: req.params.id },
      returning: true,
      plain: true,
    }
  )
    .then(() => {
      return User.findAll({});
    })
    .then((users) => {
      res.send(users);
    })
    .catch((e) => {
      console.log(e);
    });
});

router.put("/users/downgrade/:id", (req, res) => {
  User.update(
    { type: false },
    {
      where: { id: req.params.id },
      returning: true,
      plain: true,
    }
  )
    .then(() => {
      return User.findAll({});
    })
    .then((users) => {
      res.send(users);
    })
    .catch((err) => console.log(err));
});

// mostrat los products

router.get("/products", (req, res) => {
  Product.findAll({},{order:[['updatedAt', 'ASC']]})
    .then((products) => res.send(products))
    .catch((err) => console.log(err));
});

router.post("/products/newProduct", (req, res) => {
  Product.create(req.body)
    .then((producto) => {
      res.status(201).send(producto);
    })
    .catch((err) => console.log(err));
});

router.put("/products/:id/editProduct", (req, res) => {
  console.log(req.body)
  Product.update(req.body, {
    where: { id: req.params.id },
    returning: true,
    plain: true,
  })
    .then(() => {
      return Product.findByPk(req.param.id)
    })
    .then((producto) => res.send(producto))
    .catch((err) => console.log(err));
});

router.delete("/products/:id/deleteProduct", (req, res) => {
  Product.destroy({
    where: {
      id: req.params.id,
    },
  }).then(() => res.sendStatus(204));
});

//categorias

// /admin

router.get("/categories", (req, res) => {
  Category.findAll()
    .then((cat) => res.send(cat))
    .catch((err) => console.log(err));
});

router.post("/categories/newCategory", (req, res) => {
  Category.create(req.body)
    .then((category) => res.status(201).send(category))
    .catch((err) => console.log(err));
});

router.put("/categories/:id/editCategorie", (req, res) => {
  Categorie.update(req.body, {
    where: { id: req.params.id },
    returning: true,
    plain: true,
  })
    .then((categorie) => res.send(categorie))
    .catch((err) => console.log(err));
});

router.delete("/categories/:id/deleteCategory", (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id,
    },
  }).then(() => res.sendStatus(204));
});

// orders

router.get("/orders", (req, res) => {
  Orders.findAll()
    .then((order) => res.send(order))
    .catch((err) => console.log(err));
});

module.exports = router;
