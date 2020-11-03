const express = require("express");
const passport = require("passport");
const router = express.Router();
// Modelo de user

router.post("/register", (req, res) => {
  User.create(req.body)
    .then((user) => {
      res.status(201).send(user);
    })
    .catch((err) => console.log(err));
});

router.post("/login", passport.authenticate("local"), (req, res) => {
  res.send(req.user);
});

router.post("/logout", (req, res) => {
  if (req.user) return res.send(req.user);
  res.send(401).end();
});

router.post("/me", (req, res) => {
  if (req.user) return res.send(req.user);
  res.send(401).end();
});

/* router.get("/products", (req, res) => {
  Products.findAll();
}); */

module.exports = router;
