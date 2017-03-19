import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the LoginService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class LoginService {
  userData : any;
  private requestURL : string

  constructor(public http: Http) {
  }

  login(loginData) {
    this.requestURL = 'http://localhost:4200/auth/login/'

    let body = new URLSearchParams();
    body.set('email', loginData.email);
    body.set('password', loginData.password);    
    
    return new Promise(resolve => {
      this.http.post(this.requestURL, body)
        .map(res => res.json())
        .subscribe(data => {
          // we've got back the raw data, now generate the core schedule data
          // and save the data for later reference
          this.userData = data;
          resolve(this.userData);
        });
    });
  }  

}
