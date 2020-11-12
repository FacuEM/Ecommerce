/* const Sequelize = require("sequelize");
module.exports = new Sequelize(
  "postgres://postgres:novarohueyo@localhost:5432/ecommerce",
  {
    logging: false,
  }
); */

const Sequelize = require("sequelize");
module.exports = new Sequelize("postgres://localhost:5432/ecommerce", {
  logging: false,
});
