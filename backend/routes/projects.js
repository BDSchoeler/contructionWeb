var express = require('express');
var router = express.Router();
var Project=require('../models/project');

router.get('/email/:email',function(req,res,next){

    Project.getProjectByEmail(req.params.email,function(err,rows){

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
console.log('in projects');
if(req.params.id){
console.log('in projects with params');
    Project.getProjectById(req.params.id,function(err,rows){

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

 Project.getAllProjects(function(err,rows){

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
    Project.findMax(function(err,rows){
        if(typeof rows[0] !=='undefined' && typeof rows[0].max !=='undefined'){
        max=rows[0].max+100000;
        }
        Project.addProject(req.body,max,function(err,count){

            //console.log(req.body);
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
router.post('/:id',function(req,res,next){
  Project.deleteAll(req.body,function(err,count){
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

        Project.deleteProject(req.params.id,function(err,count){

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

    Project.updateProject(req.params.id,req.body,function(err,rows){

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

router.put('/phase/:id',function(req,res,next){

    Project.updateProjectPhase(req.params.id,req.body,function(err,rows){

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