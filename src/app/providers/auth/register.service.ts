import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class RegisterService {
  userData : any;
  private requestURL : string

  constructor(public http: Http) {
  }


  register (registerData): Promise<any> {

    this.requestURL = 'https://api.ce-wavestone.fr/auth/register/'   

    let body = new URLSearchParams();
    body.set('email', registerData.email);
    body.set('firstName', registerData.firstName);
    body.set('lastName', registerData.lastName);
    body.set('practice', registerData.practice);
    body.set('password', registerData.password);  

    return this.http.post(this.requestURL, body)
              .toPromise()
              .then(this.extractData)
              .catch(this.handleError);
  }

  private extractData(res: Response) {
    let serverResponse = {status: res.status, body: res.json()}
    return serverResponse; 
}

  private handleError (error: Response | any) {

    return error;
 
  }  

}
