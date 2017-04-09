import {Component} from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { Http, Headers, Response } from '@angular/http';
import 'style-loader!./login.scss';
import {AuthenticationService } from '../services/authentication.service'
@Component({
  selector: 'login',
  templateUrl: './login.html',
})
export class Login {

  public form:FormGroup;
  public email:AbstractControl;
  public password:AbstractControl;
  public submitted:boolean = false;
  constructor(fb:FormBuilder,   private router: Router, private service:AuthenticationService ) {
    this.form = fb.group({
      'email': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    });

    this.email = this.form.controls['email'];
    this.password = this.form.controls['password'];
  }

  public onSubmit(values):void {

    if (this.form.valid) {
        this.service.login(values.email,values.password).then((response: Response) => {
                let user = response.json();
                
                if (user.length>0) {
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    this.router.navigate(['/pages/dashboard']);
                }else{
                      this.submitted = true;
                }
            });

    }
  }
}
