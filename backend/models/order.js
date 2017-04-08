var db=require('../dbconnection'); //reference of dbconnection.js
 
var Order={
getAllOrders:function(callback){
 
return db.query("Select * from Orders",callback);
 
},
 getOrderById:function(id,callback){
 
return db.query("select * from Orders where ID=?",[id],callback);
 },
  getOrderByProjectId:function(id,callback){
 
    return db.query("select * from Orders where projectID=?",[id],callback);
 },
 addOrder:function(Order,callback){
 return db.query("Insert into Orders values(?,?,?,?,?,?)",[Order.orderID,Order.supplierID,Order.totalCost,Order.phaseNumber, Order.deliveryDate, Order.orderStatus],callback);
 },
 deleteOrder:function(id,callback){
  return db.query("delete from Orders where Id=?",[id],callback);
 },
 updateOrder:function(id,Order,callback){
  return db.query("update Orders set orderStatus=? where orderId=?",[Order.orderStatus,id],callback);
 }
 
};
 module.exports=Order;