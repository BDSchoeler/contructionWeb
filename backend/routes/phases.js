var express = require('express');
var router = express.Router();
var Phase=require('../models/phase');

router.get('/project/:id',function(req,res,next){
if(req.params.id){

    Phase.getPhaseByProjectId(req.params.id,function(err,rows){

        if(err)
        {
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
}
});


router.get('/:id?',function(req,res,next){

if(req.params.id){

    Phase.getPhaseById(req.params.id,function(err,rows){

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

 Phase.getAllPhases(function(err,rows){

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
    Phase.findMax(req.body.projectId,function(err,rows){
        if(typeof rows[0] !=='undefined' && typeof rows[0].max !=='undefined'){
        max=rows[0].max+1;
        }
            Phase.addPhase(req.body,max,function(err,count){

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

router.delete('/:id',function(req,res,next){

        Phase.deletePhase(req.params.id,function(err,count){

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

    Phase.updatePhase(req.params.id,req.body,function(err,rows){

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