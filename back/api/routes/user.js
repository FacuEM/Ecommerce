const router = require("express").Router();
const passport = require("passport");

const { User } = require("../../models");

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

router.put("/:userId", (req, res) => {
  User.update(
    { type: true },
    {
      where: { id: req.params.userId },
      returning: true,
      plain: true,
    }
  )
    .then((admin) => res.send(admin))
    .catch((err) => console.log(err));
});

module.exports = router;
