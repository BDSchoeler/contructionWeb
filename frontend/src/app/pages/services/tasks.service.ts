import { Injectable } from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
@Injectable()

export class TasksService {
    constructor(private http: Http) { }
 
    getTasksByPhaseIDAndProjectID(projectID, phaseID){
        return this.http.get('http://localhost:8080/tasks/project/'+ projectID +'/phase/' + phaseID ).toPromise()
                  .then(this.extractData)
                  .catch(this.handleError);
    }

    addTask(phaseNumber, taskDescription, estimatedTime, estimatedCost, projectID)
    {
      return this.http.post('http://localhost:8080/tasks/',{ 'projectID': projectID, 'phaseNumber' :phaseNumber,'taskDescription': taskDescription, 'estimatedTimeToComplete':estimatedTime, 'estimatedCost':estimatedCost} ).toPromise()
          .then(this.extractData)
          .catch(this.handleError);
    }



  private extractData(res: Response) {
    let body = res.json();
    return body || { };
  }
    private handleError (error: Response | any) {
    
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}