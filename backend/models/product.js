var db=require('../dbconnection'); //reference of dbconnection.js
 
var Product={
getAllProducts:function(callback){
 
return db.query("select * from Product",callback);
},
 getProductById:function(id,callback){
 
return db.query("select * from Product where Id=?",[id],callback);
 },
  getProductByOrderId:function(id,callback){
 
return db.query("select * from Product p, OrderedProducts op where op.orderID = ? and op.productID=p.productID ",[id],callback);
 },
 getProductBySupplierId:function(id,callback){
	return db.query("select * from SupplierProducts sp, Product p where sp.supplierID = ? AND p.productID = sp.productID",[id],callback);
 },
 addProduct:function(Product,callback){
 return db.query("Insert into OrderedProducts values(?,?,?)",[Product.productID,Product.orderID,Product.amount],callback);
 },
 deleteProduct:function(id,callback){
  return db.query("delete from Product where Id=?",[id],callback);
 },
 updateProduct:function(id,Product,callback){
  return db.query("update Product set Title=?,Status=? where Id=?",[Product.Title,Product.Status,id],callback);
 },
 getProductByPhase(projectID,phaseID,callback){
 	return db.query('SELECT phasetasks.taskID, taskproducts.productID, product.name, product.cost FROM phasetasks INNER JOIN taskproducts ON phasetasks.taskID = taskproducts.taskID INNER JOIN product ON taskproducts.productID = product.productID WHERE projectID = ? AND phaseID = ?',[projectID,phaseID] ,callback)

 }
 
};
 module.exports=Product;