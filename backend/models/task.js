var db=require('../dbconnection'); //reference of dbconnection.js
 
var Task={
getAllTasks:function(callback){
 
return db.query("Select * from Tasks",callback);
},
updateTimeToCompletePhase:function(callback){
	return db.query("UPDATE Phases p SET p.estimatedTimeToComplete = (SELECT SUM(t.estimatedTimeToComplete) FROM PhaseTasks pt, Tasks t WHERE pt.projectID = p.projectID AND pt.phaseID = p.phaseNumber AND pt.taskID = t.taskID)",callback);
},

updateTimeToCompleteProject:function(callback){
	return db.query("UPDATE Projects p SET p.estimatedTimeToComplete = (SELECT SUM(t.estimatedTimeToComplete) FROM PhaseTasks pt, Tasks t WHERE pt.projectID = p.projectID AND pt.taskID = t.taskID)",callback);
},
updateTimeToCompleteTask:function(callback){
	return db.query("UPDATE Tasks t SET t.estimatedTimeToComplete = FLOOR(RAND() * (2500 - 500) + 500) WHERE t.estimatedTimeToComplete=0",callback);
},

updateCostToCompletePhase:function(id,callback){
 
return db.query("UPDATE Phases ph SET ph.estimatedCost = (SELECT SUM(t.estimatedCost) FROM Tasks t, PhaseTasks pt WHERE ph.phaseNumber = pt.phaseID AND pt.taskID = t.taskID AND pt.projectID = ph.projectID)",[id],callback);
 },


updateCostToCompleteProject:function(callback){
 
return db.query("UPDATE Finances f SET f.estimatedTotalCost = (SELECT SUM(p.estimatedCost) FROM Phases p WHERE f.projectID = p.projectID)",callback);
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
 	console.log(Task);
 return db.query("Insert into Tasks values(?,?,?,?)",[taskID,Task.taskDescription, Task.estimatedTimeToComplete, Task.estimatedCost],callback);
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