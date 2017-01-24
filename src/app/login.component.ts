import { NgForm } from '@angular/forms';
import { Output, Input, Component, EventEmitter } from '@angular/core';
import { UserLogin } from './user';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component ({
  selector: 'login-form',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class UserLoginComponent {
  @Input() xsrf_token: string;
  @Output() log_signal = new EventEmitter();
  model = new UserLogin("", "", "", "");
  location: Location;

  submitted = false;
  login_result: any;
  
  constructor(private http: Http) { }
  onSubmit(f: NgForm) {
    let posturl = location.protocol+'//'+location.hostname+':10000/api/login'
    let body_login = f.value;
    console.log(body_login);    
    let headers = new Headers({ 'content-type': 'application/json', 'X-XSRFToken': f.value._xsrf });
    let options = new RequestOptions({ headers: headers });
    this.http.post(posturl, body_login, options).subscribe(response => {console.log(response.json()); this.login_result = response.json()}, error => {console.log(error.json() || "Server Errors!")});
  }
  clickReg() {
    this.log_signal.emit("logged");
    console.log("logged in");
  };
}
