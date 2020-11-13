const router = require("express").Router();

const {Orders,CarProducts} =require("../../models")


//completa la orden y crea una orden de pago nueva asociada a el usuario logeado

router.put("/:userId",(req,res,next)=>{
  Orders.update(req.body,{where:{userId:req.params.userId,pending:true}})
  .then(()=>{
    Orders.create()
    .then((orden)=>{
       return orden.setUser(req.params.userId)
    })
    .then(resp=>res.send(resp))
  })
  .catch((err) => console.log(err));
})



//trae toda las ordenes de compra completadas(historial de compras)


router.get("/completes/:userId",(req,res,next)=>{
    Orders.findAll({where:{userId:req.params.userId,pending:false},order:[['createdAt', 'DESC']],include:{model:CarProducts}})
     .then(orders=>res.send(orders))
     .catch((err) => console.log(err));
})
//trae la orden de compra completada por su id

router.get("/completes/:userId/:orderId",(req,res,next)=>{
  Orders.findByPk(req.params.orderId,{include:{model:CarProducts}})
   .then(resp=>res.send(resp))
   .catch((err) => console.log(err));
})

//trae la orden de compra pendiente del usuario (carrito de compras)

router.get("/:userId",(req,res,next)=>{
  Orders.findOne({where:{userId:req.params.userId,pending:true},include:{model:CarProducts}})
   .then(resp=>res.send(resp))
   .catch((err) => console.log(err));
})



module.exports=router




