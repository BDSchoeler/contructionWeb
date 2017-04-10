var db=require('../dbconnection'); //reference of dbconnection.js
 
var Project={
getAllProjects:function(callback){
 
return db.query("Select * from Projects p,Finances f where f.projectID=p.projectID",callback);
 
},
 getProjectById:function(id,callback){
 
return db.query("select * from Projects where projectID=?",[id],callback);
 },

  getProjectByEmail:function(email,callback){
 
return db.query("select * from Projects p, Access a ,Finances f where a.email=? and a.projectID=p.projectID and f.projectID=p.projectID",[email],callback);
 },
 getProjectCostById:function(projectID,callback){
return db.query("SELECT SUM(totalCost) AS Total Cost FROM orders WHERE orders.projectID = ?",[projectID],callback);
 }, //type, size, e location, 
 addProject:function(Project,projectID,callback){
 	console.log("trying to add");
 return db.query("Insert into Projects (projectID, status, projectType, location, currentPhase, size, estimatedTimeToComplete) values(?,?,?,?,?,?,?)",[projectID,"Planning" ,Project.projectType,Project.location,1,Project.Size,0],callback);
 }, 
 addFinance:function(financeID, projectID,callback){
 return db.query("Insert into Finances values(?,?,?,?)",[financeID,0,0,projectID],callback);
 },
  addProjectAccess:function(Project,projectID,callback){
 return db.query("Insert into Access values(?,?)",[projectID, Project.email],callback);
 },
 deleteProject:function(id,callback){
  return db.query("delete from Projects where Id=?",[id],callback);
 },
 updateProject:function(id,Project,callback){
  return db.query("update Projects set status=? where projectID=?",[Project.status,id],callback);
 },
 updateProjectPhase:function(id,Project,callback){
  return db.query("update Projects set currentPhase=? where projectID=?",[Project.currentPhase,id],callback);
 },
 findMax:function(callback){
  return db.query("SELECT MAX(projectID) as max FROM Projects",callback);
 },
  findMaxFinance:function(callback){
  return db.query("SELECT MAX(financeRecordID) as max FROM Finances",callback);
 }
 
};
 module.exports=Project;