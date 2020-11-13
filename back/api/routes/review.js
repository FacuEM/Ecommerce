const router = require("express").Router();
const { Review, User, Product } = require("../../models");

// req.user puede fallar
router.post("/addReview/:productId", (req, res) => {
  Review.create(req.body)
    .then((review) => {
      return review.setUser(req.body);
    })
    .then((review) => {
      return review.setProduct(req.params.productId);
    })
    .then((review) =>
      Review.findAll({
        where: {
          productId: req.params.productId,
        },
        include: [{ model: User }],
        order: [["createdAt", "DESC"]],
      })
    )
    .then((reviewCompleta) => {
      res.send(reviewCompleta);
    })
    .catch((err) => console.log(err));
});

router.get("/:id", (req, res) => {
  Review.findAll({
    where: {
      productId: req.params.id,
    },
    include: [{ model: User }],
    order: [["createdAt", "DESC"]],
  })
    .then((reviews) => res.send(reviews))
    .catch((err) => console.log(err));
});

module.exports = router;
