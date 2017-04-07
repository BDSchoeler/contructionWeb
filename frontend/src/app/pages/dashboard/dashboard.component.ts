import {Component} from '@angular/core';
import {ProjectsService} from '../projects/projects.service';
import {Observable} from 'rxjs/Rx';
@Component({
  selector: 'dashboard',
  styleUrls: ['./dashboard.scss'],
  templateUrl: './dashboard.html'
})
export class Dashboard {
  projects;
  constructor(projectsService: ProjectsService) {
  	projectsService.getProjects().then(data => {
  		this.projects=data;
  	});
  }

}
