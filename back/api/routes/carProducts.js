const router = require("express").Router();

const {Orders,Product,CarProducts} =require("../../models")


//trae los productos del carrito de un usuario

router.get("/:userId",(req,res,next)=>{
   Orders.findOne({where:{userId:req.params.userId,pending:true}})
   .then(orden=>{
      return CarProducts.findAll({where:{orderId:orden.id},include:{model:Product}})
   })
    .then(products=>res.send(products))
    .catch((err) => console.log(err));
})


//agrega un producto al carrito de compras
//devuelve un 200 ok

router.put("/add/:userId/:prodId",(req,res,next)=>{
  Orders.findOne({where:{userId:req.params.userId,pending:true}})
  .then(orden=>{
    Product.findByPk(req.params.prodId)
        .then(prod=>{
            CarProducts.findOne({where:{orderId:orden.id,productId:prod.id}})
                .then(carp=>{
                    if(carp){
                        res.sendStatus(200)
                    }else{
                        CarProducts.create({
                            name:prod.name,
                            price:prod.price,
                            productId:prod.id,
                            orderId:orden.id
                            })
                            .then((prod)=>{
                              orden.addCarproduct(prod)
                              .then(()=>res.sendStatus(201))
                            })
                    }
                })
        })   
    })

  .catch((err) => console.log(err));
})

//actualiza las unidades de un producto

router.put("/:prodId",(req,res,next)=>{
  CarProducts.update(req.body,{where:{id:req.params.prodId}})
  .then((pro)=>res.sendStatus(200))
  .catch((err) => console.log(err));
})


//remueve un porducto de la orden de compra(carrito)

router.delete("/:carprodId",(req,res,next)=>{
  CarProducts.destroy({where:{id:req.params.carprodId}})
      .then(e=>res.sendStatus(204))
      .catch((e)=>next(e))
  })

module.exports=router