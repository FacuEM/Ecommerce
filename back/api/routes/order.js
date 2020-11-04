const router = require("express").Router();

const {Orders,Product} =require("../../models")

//crea una orden de pago asociada a el usuario logeado (carrito de compras)

router.post("/:userId",(req,res,next)=>{
        Orders.create()
        .then((orden)=>{
           return orden.setUser(req.params.userId)
        })
        .then(resp=>res.send(resp))
        .catch((err) => console.log(err));
})

//trae la orden de compra pendiente del usuario (carrito de compras)

router.get("/:userId",(req,res,next)=>{
   Orders.findOne({where:{userId:req.params.userId,pending:true},include:{model:Product}})
    .then(resp=>res.send(resp))
    .catch((err) => console.log(err));
})

//trae toda las ordenes de compra completadas(historial de compras)


router.get("/:userId/orders",(req,res,next)=>{
    Orders.findAll({where:{userId:req.params.userId,pending:false},include:{model:Product}})
     .then(resp=>res.send(resp))
     .catch((err) => console.log(err));
})

//agrega un producto la orden de compra (carrito de compras)
//devuelve la orden de compra con sus productos (carrito de compras)

router.put("/:userId/:prodId",(req,res,next)=>{
    Orders.findOne({where:{userId:req.params.userId,pending:true},include:{model:Product}})
    .then(orden=>{
        Product.findByPk(req.params.prodId)
        .then(prod=>{
            orden.addProduct(prod)
            .then(()=>{
                res.send(orden)})
        })
        
    })
    .catch((err) => console.log(err));
})

//remueve un porducto de la orden de compra(carrito)

router.delete("/:userId/:prodId",(req,res,next)=>{
 
    Orders.findOne({where:{userId:req.params.userId,pending:true},include:{model:Product}})
      .then((orden)=>{
        Product.findByPk(req.params.prodId)
         .then((prodId)=>{
           orden.removeProduct(prodId)
         })
      })
      .then(e=>res.sendStatus(204))
      .catch((e)=>next(e))
  })
module.exports=router