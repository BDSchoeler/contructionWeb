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
 return db.query("SELECT * FROM phasetasks INNER JOIN tasks ON phasetasks.taskID = tasks.taskID WHERE projectID = ? AND phaseID = ?",[projectID,phaseID],callback);
 },
 addTask:function(Task,taskID,callback){
 return db.query("Insert into Tasks values(?,?,?,?)",[taskID,Task.description, Task.estimatedTimeToComplete, Task.estimatedCost],callback);
 }, 
 addTaskRelation:function(Task,taskID,callback){
 return db.query("Insert into PhaseTasks values(?,?,?)",[taskID,Task.phaseNumber, Task.projectID],callback);
 },
 deleteTask:function(id,callback){
  return db.query("delete from Tasks where Id=?",[id],callback);
 },
 updateTask:function(id,Task,callback){
  return db.query("update Tasks set Title=?,Status=? where Id=?",[Task.Title,Task.Status,id],callback);
 },
 findMax:function(callback){
  return db.query("SELECT MAX(taskId) as max FROM Tasks " ,callback);
 }
 
};
 module.exports=Task;