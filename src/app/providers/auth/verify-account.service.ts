import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class VerifyAccountService {

  private requestURL : string

  constructor(public http: Http) {
  }


  verifyAccount (token): Promise<any> {

    this.requestURL = 'https://api.ce-wavestone.fr/auth/verify-account/' + token    

    return this.http.post(this.requestURL, "")
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
