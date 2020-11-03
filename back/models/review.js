const S=require('sequelize')
const db=require('../db')

class Review extends S.Model{}

Review.init({
    content:{
        type:S.TEXT
    },
    stars:{
        type:S.INTEGER,
        allowNull: false,
        defaultValue: 0,
        validate: {
            min: 0,
            max: 5
        }
    }
},{sequelize:db,modelName:"review"})

module.exports=Review