const S=require('sequelize')
const db=require('../db')

class Orders extends S.Model{}

Orders.init({
    direccion:{
        type:S.TEXT
    },
    metodo:{
        type:S.STRING
    },
    creditCard:{
        type:S.STRING,
        validate:{
            isCreditCard:true
        }
    },
    total:{
        type:S.INTEGER
    },
    pending:{
        type:S.BOOLEAN,
        defaultValue:true
    }

},{sequelize:db,modelName:"order"})

module.exports=Orders