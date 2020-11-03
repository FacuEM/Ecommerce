const Sequelize=require('sequelize')
const db= new Sequelize("postgres://localhost:5432/ecommerce",{logging:false})

module.exports=db

// const Sequelize = require("sequelize");
// module.exports = new Sequelize(
//   "postgres://postgres:novarohueyo@localhost:5432/omdb",
//   {
//     logging: false,
//   }
// );