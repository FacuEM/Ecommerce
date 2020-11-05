const router = require("express").Router();
const passport = require("passport");

const { User,Orders } = require("../../models");

//al crear un usuario crea una orden de compra (carrito) asociada a ese usuario
router.post("/register", (req, res) => {
  console.log("REQ BODY", req.body)
  User.create(req.body)
    .then((user) => {
      Orders.create()
      .then((orden)=>{
        return orden.setUser(user)
      })
      res.status(201).send(user);
    })
    .catch((err) => console.log(err));
});

router.post("/login", passport.authenticate("local"), (req, res) => {
  res.send(req.user);
});

router.post("/logout", (req, res) => {
  req.logout();
  res.sendStatus(200)
});

router.get("/me", (req, res) => {
  if (req.isAuthenticated()) res.send(req.user);
  // if (req.user) return res.send(req.user);
  else res.send({});
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
