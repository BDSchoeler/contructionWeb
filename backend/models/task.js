var db=require('../dbconnection'); //reference of dbconnection.js
 
var Task={
getAllTasks:function(callback){
 
return db.query("Select * from Tasks",callback);
 
},
 getTaskById:function(id,callback){
 
return db.query("select * from Tasks where Id=?",[id],callback);
 },
 getTaskByProject:function(projectID, callback){
 	return db.query("SELECT phasetasks.taskID, tasks.description FROM phasetasks INNER JOIN tasks ON phasetasks.taskID = tasks.taskID WHERE projectID = ?",[projectID],callback);
 },
 getTaskByPhase:function(projectID,phaseID, callback){
 return db.query("SELECT phasetasks.taskID, tasks.description FROM phasetasks INNER JOIN tasks ON phasetasks.taskID = tasks.taskID WHERE projectID = ? AND phaseID = ?",[projectID,phaseID],callback);
 },
 addTask:function(Task,callback){
 return db.query("Insert into Tasks values(?,?)",[Task.taskID,Task.description],callback);
 },
 deleteTask:function(id,callback){
  return db.query("delete from Tasks where Id=?",[id],callback);
 },
 updateTask:function(id,Task,callback){
  return db.query("update Tasks set Title=?,Status=? where Id=?",[Task.Title,Task.Status,id],callback);
 }
 
};
 module.exports=Task;