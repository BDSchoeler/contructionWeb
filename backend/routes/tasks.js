var express = require('express');
var router = express.Router();
var Task=require('../models/task');




router.get('/project/:projectId/phase/:phaseId',function(req,res,next){

    Task.getTaskByPhase(req.params.projectId,req.params.phaseId,function(err,rows){

        if(err)
        {
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});

router.get('/project/:projectId',function(req,res,next){

    Task.getTaskByProject(req.params.projectId,function(err,rows){

        if(err)
        {
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});

router.get('/:id?',function(req,res,next){

if(req.params.id){

    Task.getTaskById(req.params.id,function(err,rows){

        if(err)
        {
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
}
else{

 Task.getAllTasks(function(err,rows){

        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(rows);
        }
 
    });
}
});
router.post('/',function(req,res,next){
    var max=1
    Tasks.findMax(function(err,rows){
        if(typeof rows[0] !=='undefined' && typeof rows[0].max !=='undefined'){
        max=rows[0].max+1;
        }

        Task.addTask(req.body,max,function(err,count){
             Task.addTaskRelation(req.body,max,function(err,count){
            
                    if(err)
                    {
                        res.json(err);
                    }
                    else{
                        res.json(req.body);//or return count for 1 & 0
                    }
             });
        });
    });
});
router.post('/:id',function(req,res,next){
  Task.deleteAll(req.body,function(err,count){
    if(err)
    {
      res.json(err);
    }
    else
    {
      res.json(count);
    }
  });
});
router.delete('/:id',function(req,res,next){

        Task.deleteTask(req.params.id,function(err,count){

            if(err)
            {
                res.json(err);
            }
            else
            {
                res.json(count);
            }

        });
});
router.put('/:id',function(req,res,next){

    Task.updateTask(req.params.id,req.body,function(err,rows){

        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(rows);
        }
    });
});
module.exports=router;