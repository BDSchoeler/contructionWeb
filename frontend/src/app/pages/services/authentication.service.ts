import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
 
@Injectable()
export class AuthenticationService {
    constructor(private http: Http) { }
 
    login(email: string, password: string) {
        console.log("trying to login");
        return this.http.post('http://localhost:8080/users/login', { email: email, password: password }).toPromise();

    }
 
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}