import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TasksService} from '../services/tasks.service';

@Component({
  selector: 'tasks',
  styleUrls: ['./dashboard.scss'],
  templateUrl: './tasks.html'
})
export class TasksComponent {

	projectID;
	phaseID;

	tasks;

  constructor(private route:ActivatedRoute, private tasksService:TasksService) {}
    ngOnInit(){
    	this.projectID = this.route.snapshot.params['projectID'];
    	this.phaseID = this.route.snapshot.params['phaseID'];


    	this.tasksService.getTasksByPhaseIDAndProjectID(this.projectID, this.phaseID).then(data=>{
    		this.tasks =  data;
    	})
    }




}