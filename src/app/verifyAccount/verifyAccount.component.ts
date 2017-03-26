import { Component } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { VerifyAccountService } from '../providers/auth/verify-account.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'verifyAccount',
  templateUrl: './verifyAccount.html',
  providers: [VerifyAccountService]  
})
export class VerifyAccount {
  public accountToken:string

  constructor(private verifyAccountService: VerifyAccountService, private router : Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    // subscribe to router event
    this.activatedRoute.params.subscribe((params: Params) => {
        this.accountToken = params['token'];
      });
    this.verifyToken(this.accountToken)
  }  

  verifyToken(token){
    Promise.all([
      this.verifyAccountService.verifyAccount(token)
    ]).then(
      data  => this.treatVerify(data[0]),
      error => this.setError(<any>error)
    );     
  }

  public treatVerify(data) {
    console.log(data)
    switch(Number(data.status)){
      case 200: // TODO change to especific path
    this.router.navigate(['/login/verify/OK']);
        break;
      case 0:
    this.router.navigate(['/login/verify/KO']);
        break;
      default:
    this.router.navigate(['/login/verify/KO']);
        break;
    }
  }

  public setError(error:any) {
    console.log("error !")
    console.log(error);
  }
  
  
}
