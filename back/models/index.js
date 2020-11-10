const User = require("./user");
const Product = require("./product");
const Category = require("./category");
const Review = require("./review");
const Orders = require("./orders");
const CarProducts= require('./carProducts');


Orders.belongsToMany(CarProducts, { through: "car" });
CarProducts.belongsToMany(Orders, { through: "car" });
Orders.belongsTo(User);
Review.belongsTo(User);
Review.belongsTo(Product);
Product.belongsTo(Category);
CarProducts.belongsTo(Product)
CarProducts.belongsTo(Orders)

module.exports = {
  User,
  Product,
  Category,
  Review,
  Orders,
  CarProducts
};
