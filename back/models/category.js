const S=require('sequelize')
const db=require('../db')

class Category extends S.Model{}

Category.init({
    name:{
        type:S.STRING,
        allowNull:false
    },
    image:{
        type:S.STRING,
        defaultValue:"https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    }

},{sequelize:db,modelName:"category"})

module.exports=Category