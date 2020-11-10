const S = require("sequelize");
const db = require("../db");

class CarProducts extends S.Model {}

CarProducts.init(
  {
    name: {
      type: S.STRING,
      allowNull: false,
    },
    units: {
      type: S.INTEGER,
     defaultValue:1,
    },
    price: {
      type: S.INTEGER,
      allowNull: false,
    },
    cost:{
        type:S.VIRTUAL,
        get(){
            return this.getDataValue('units') * this.getDataValue('price')
        }
    }
  },
  { sequelize: db, modelName: "carproduct" }
);

module.exports = CarProducts;