const router = require("express").Router();

const {Orders,CarProducts} =require("../../models")


//crea una orden de pago asociada a el usuario logeado (carrito de compras)

router.put("/:userId",(req,res,next)=>{
  Orders.update(req.body,{where:{userId:req.params.userId}})
  .then(()=>{
    Orders.create()
    .then((orden)=>{
       return orden.setUser(req.params.userId)
    })
    .then(resp=>res.send(resp))
  })
  .catch((err) => console.log(err));
})

//actualiza la orden

//trae toda las ordenes de compra completadas(historial de compras)


router.get("/completes/:userId",(req,res,next)=>{
    Orders.findAll({where:{userId:req.params.userId,pending:false},include:{model:CarProducts}})
     .then(orders=>res.send(orders))
     .catch((err) => console.log(err));
})

//trae la orden de compra pendiente del usuario (carrito de compras)

router.get("/:userId",(req,res,next)=>{
  Orders.findOne({where:{userId:req.params.userId,pending:true},include:{model:CarProducts}})
   .then(resp=>res.send(resp))
   .catch((err) => console.log(err));
})



module.exports=router




