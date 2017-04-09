var db=require('../dbconnection'); //reference of dbconnection.js
 
var Project={
getAllProjects:function(callback){
 
return db.query("Select * from Projects",callback);
 
},
 getProjectById:function(id,callback){
 
return db.query("select * from Projects where projectID=?",[id],callback);
 },
  getProjectByEmail:function(email,callback){
 
return db.query("select * from Projects p, Access a where a.email=? and a.projectID=p.projectID",[email],callback);
 },
 getProjectCostById:function(projectID,callback){
return db.query("SELECT SUM(totalCost) AS Total Cost FROM orders WHERE orders.projectID = ?",[projectID],callback);
 },
 addProject:function(Project,callback){
 return db.query("Insert into Projects values(?,?,?)",[Project.Id,Project.Title,Project.Status],callback);
 },
 deleteProject:function(id,callback){
  return db.query("delete from Projects where Id=?",[id],callback);
 },
 updateProject:function(id,Project,callback){
     console.log(req.body);
  return db.query("update Projects set status=? where projectID=?",[Project.status,id],callback);
 }
 
};
 module.exports=Project;