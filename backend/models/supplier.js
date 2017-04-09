var db=require('../dbconnection'); //reference of dbconnection.js
 
var Supplier={
getAllSuppliers:function(callback){
 
return db.query("Select * from Supplier",callback);
 
},
 getSupplierById:function(id,callback){
 
return db.query("select * from Supplier where supplierID=?",[id],callback);
 },
 addSupplier:function(Supplier,callback){
 return db.query("Insert into Supplier values(?,?,?)",[Supplier.Id,Supplier.Title,Supplier.Status],callback);
 },
 deleteSupplier:function(id,callback){
  return db.query("delete from Supplier where Id=?",[id],callback);
 },
 updateSupplier:function(id,Supplier,callback){
  return db.query("update Supplier set Title=?,Status=? where Id=?",[Supplier.Title,Supplier.Status,id],callback);
 }
 
};
 module.exports=Supplier;