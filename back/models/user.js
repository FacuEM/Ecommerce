const S=require('sequelize')
const db=require('../db')
const bcrypt=require('bcrypt')


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


User.beforeCreate((user)=>{
    return bcrypt.genSalt(16)
            .then((salt)=>{
                user.salt=salt
                return bcrypt.hash(user.password, user.salt)
            })
            .then((hash)=>{
                user.password=hash
            })
})

User.prototype.hash=(password,salt)=>{
    return bcrypt.hash(password, salt)
}

module.exports=User