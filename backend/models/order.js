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
 addOrder:function(Order,orderID,callback){
 return db.query("Insert into Orders values(?,?,?,?,?,?)",[orderID,Order.supplierID,0,Order.projectID,Order.phaseNumber, "4/22/2017", Order.orderStatus],callback);
 },
 deleteOrder:function(id,callback){
  return db.query("delete from Orders where Id=?",[id],callback);
 },
 updateOrder:function(id,Order,callback){
  return db.query("update Orders set orderStatus=? where orderId=?",[Order.orderStatus,id],callback);
 },
 findMax:function(callback){
  return db.query("SELECT MAX(orderID) as max FROM Orders",callback);
 }
 
};
 module.exports=Order;