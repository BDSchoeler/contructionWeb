var db=require('../dbconnection'); //reference of dbconnection.js
 
var User={
getAllUsers:function(callback){
 
return db.query("Select * from Users",callback);
 
},
 getUserById:function(id,callback){
 
return db.query("select * from Users where Id=?",[id],callback);
 },
 addUser:function(User,callback){
 return db.query("Insert into Users values(?,?,?)",[User.Id,User.Title,User.Status],callback);
 },
 deleteUser:function(id,callback){
  return db.query("delete from Users where Id=?",[id],callback);
 },
 updateUser:function(id,User,callback){
  return db.query("update Users set Title=?,Status=? where Id=?",[User.Title,User.Status,id],callback);
 },
 login:function(loginInfo,callback){
   db.query("select * from Users where email=? and password =?",[loginInfo.email, loginInfo.password],callback)
 }
 
};
 module.exports=User;