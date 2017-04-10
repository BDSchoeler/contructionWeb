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
 }, //type, size, e location, 
 addProject:function(Project,projectID,callback){
 return db.query("Insert into Projects (projectID, status, projectType, location, currentPhase, size, estimatedTimeToComplete) values(?,?,?,?,?,?,?)",[projectID,"Planning" ,Project.projectType,Project.location,1,Project.Size,0],c<allback);
 },
 deleteProject:function(id,callback){
  return db.query("delete from Projects where Id=?",[id],callback);
 },
 updateProject:function(id,Project,callback){
  return db.query("update Projects set status=? where projectID=?",[Project.status,id],callback);
 },
 findMax:function(id,Project,callback){
  return db.query("SELECT MAX(projectID) as max FROM Projects",callback);
 }
 
};
 module.exports=Project;