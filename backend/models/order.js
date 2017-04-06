var db=require('../dbconnection'); //reference of dbconnection.js
 
var Order={
getAllOrders:function(callback){
 
return db.query("Select * from Orders",callback);
 
},
 getOrderById:function(id,callback){
 
return db.query("select * from Orders where Id=?",[id],callback);
 },
 addOrder:function(Order,callback){
 return db.query("Insert into Orders values(?,?,?)",[Order.Id,Order.Title,Order.Status],callback);
 },
 deleteOrder:function(id,callback){
  return db.query("delete from Orders where Id=?",[id],callback);
 },
 updateOrder:function(id,Order,callback){
  return db.query("update Orders set Title=?,Status=? where Id=?",[Order.Title,Order.Status,id],callback);
 }
 
};
 module.exports=Order;