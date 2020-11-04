const S = require("sequelize");
const db = require("../db");

class Orders extends S.Model {}

Orders.init(
  {
    direccion: {
      type: S.TEXT,
      allowNull: false,
    },
    metodo: {
      type: S.STRING,
      allowNull: false,
    },
    creditCard: {
      type: S.STRING,
      validate: {
        isCreditCard: true,
      },
    },
    total: {
      type: S.INTEGER,
    },
  },
  { sequelize: db, modelName: "order" }
);

module.exports = Orders;
