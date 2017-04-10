import {Component} from '@angular/core';
import {ProjectsService} from '../projects/projects.service';
import {Observable} from 'rxjs/Rx';
import { RouterModule, Router } from '@angular/router';
@Component({
  selector: 'dashboard',
  styleUrls: ['./dashboard.scss'],
  templateUrl: './dashboard.html'
})
export class Dashboard {
  projects;
  user;
  constructor(private router: Router, projectsService: ProjectsService) {
  	this.user=localStorage.getItem('currentUser');
  	if(this.user){
  		this.user= JSON.parse(this.user)[0];
  		console.log(this.user);
  	}else{
		this.router.navigate(['/login']);
  	}
  	if(this.user.type==0){
  		projectsService.getProjects().then(data => {
  			this.projects=data;
  		});
  	}else{
		projectsService.getProjectByEmail(this.user.email).then(data => {
  			this.projects=data;
  		});
  	}
  }


  makeNewProject(){
    
  }

}
