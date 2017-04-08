var db=require('../dbconnection'); //reference of dbconnection.js
 
var Finance={
getAllFinances:function(callback){
 
return db.query("Select * from Finances",callback);
 
},
 getFinanceById:function(id,callback){
 
return db.query("select * from Finances where Id=?",[id],callback);
 },
 getFinanceByProjectId:function(projectID,callback){
return db.query("select * from Finances where projectID=?",[projectID],callback);
 },
 addFinance:function(Finance,callback){
 return db.query("Insert into Finances values(?,?,?)",[Finance.Id,Finance.Title,Finance.Status],callback);
 },
 deleteFinance:function(id,callback){
  return db.query("delete from Finances where Id=?",[id],callback);
 },
 updateFinance:function(id,Finance,callback){
  return db.query("update Finances set Title=?,Status=? where Id=?",[Finance.Title,Finance.Status,id],callback);
 }
 
};
 module.exports=Finance;