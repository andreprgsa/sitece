import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class LoginService {
  userData : any;
  private requestURL : string

  constructor(public http: Http) {
  }


  login (loginData): Promise<any> {

    this.requestURL = 'https://api.ce-wavestone.fr/auth/login/'   

    let body = new URLSearchParams();
    body.set('email', loginData.email);
    body.set('password', loginData.password);  

    return this.http.post(this.requestURL, body)
              .toPromise()
              .then(this.extractData)
              .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = {status: res.status, body: res.json()}
    return body || { };
  
}

  private handleError (error: Response | any) {

    return error;
 
  }  

}
