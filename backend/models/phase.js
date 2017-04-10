var db=require('../dbconnection'); //reference of dbconnection.js
 
var Phase={
getAllPhases:function(callback){
 
return db.query("Select * from Phases",callback);
 
},
 getPhaseById:function(id,callback){
 
return db.query("select * from Phases where Id=?",[id],callback);
 },
 getPhaseByProjectId:function(projectID,callback){
return db.query("Select * from Phases where projectID=?",[projectID],callback);
 },
 addPhase:function(phaseId,max,callback){
 return db.query("Insert into Phases (phaseId, name, description, projectID, estimatedCost, estimatedTimeToComplete) values(?,?,?,?,0,0)",[phaseId, Phase.name,Phase.description, Phase.projectID],callback);
 },
 deletePhase:function(id,callback){
  return db.query("delete from Phases where Id=?",[id],callback);
 },
 updatePhase:function(id,Phase,callback){
  return db.query("update Phases set Title=?,Status=? where Id=?",[Phase.Title,Phase.Status,id],callback);
 },
 findMax:function(id,callback){
  return db.query("SELECT MAX(phaseNumber) as max FROM Phases where projectID=?",[id] ,callback);
 }
};
 module.exports=Phase;