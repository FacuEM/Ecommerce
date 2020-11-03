const S=require('sequelize')
const db=require('../db')

class User extends S.Model{}

User.init({
    name:{
        type:S.STRING,
        allowNull:false
    },
    email:{
        type:S.STRING,
        allowNull:false,
        validate:{
            isEmail:true
        }
    },
    password:{
        type:S.STRING,
        allowNull:false
    },
    salt:{
        type:S.STRING
    },
    type:{
        type:S.BOOLEAN,
        defaultValue:false
    }
},{sequelize:db, modelName:'user'})

module.exports=User