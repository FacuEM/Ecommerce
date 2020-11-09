const S = require("sequelize");
const db = require("../db");

class Product extends S.Model {}

Product.init(
  {
    name: {
      type: S.STRING,
      allowNull: false,
    },
    descripcion: {
      type: S.STRING,
    },
    image: {
      type: S.STRING,
    },
    stock: {
      type: S.INTEGER,
      allowNull: false,
    },
    price: {
      type: S.INTEGER,
      allowNull: false,
    },
  },
  { sequelize: db, modelName: "product" }
);

module.exports = Product;
