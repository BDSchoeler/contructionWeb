var express = require('express');
var router = express.Router();
var Order=require('../models/order');

router.get('/project/:id',function(req,res,next){
if(req.params.id){

    Order.getOrderByProjectId(req.params.id,function(err,rows){

        if(err)
        {
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
}
});


router.get('/:id?',function(req,res,next){

if(req.params.id){

    Order.getOrderById(req.params.id,function(err,rows){

        if(err)
        {
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
}
else{

 Order.getAllOrders(function(err,rows){

        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(rows);
        }
 
    });
}
});
router.post('/',function(req,res,next){
    var max=1;
    Orders.findMax(function(err,rows){
        if(typeof rows[0] !=='undefined' && typeof rows[0].max !=='undefined'){
        max=rows[0].max+1;
        }
        Order.addOrder(req.body,max,function(err,count){
                console.log(err);
            console.log(count);
            //console.log(req.body);
            if(err)
            {
                res.json(err);
            }
            else{
                    res.json(req.body);//or return count for 1 & 0
            }
        });
    });
});
router.post('/:id',function(req,res,next){
  Order.deleteAll(req.body,function(err,count){
    if(err)
    {
      res.json(err);
    }
    else
    {
      res.json(count);
    }
  });
});
router.delete('/:id',function(req,res,next){

        Order.deleteOrder(req.params.id,function(err,count){

            if(err)
            {
                res.json(err);
            }
            else
            {
                res.json(count);
            }

        });
});
router.put('/:id',function(req,res,next){
    console.log(req.body);
    Order.updateOrder(req.params.id,req.body,function(err,rows){

        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(rows);
        }
    });
});
module.exports=router;