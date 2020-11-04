const User = require("./user");
const Product = require("./product");
const Category = require("./category");
const Review = require("./review");
const Orders = require("./orders");


Orders.belongsTo(User);
Orders.belongsToMany(Product, { through: "car" });
Product.belongsToMany(Orders, { through: "car" });
Review.belongsTo(User);
Review.belongsTo(Product);

module.exports = {
  User,
  Product,
  Category,
  Review,
  Orders,
};

