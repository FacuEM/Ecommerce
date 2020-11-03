const S=require('sequelize')
const db=require('../db')

class Category extends S.Model{}

Category.init({
    name:{
        type:S.STRING,
        allowNull:false
    },

},{sequelize:db,modelName:"category"})

module.exports=Category