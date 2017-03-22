import {Component} from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import { LoginUser } from './login-model'
import { RegisterUser } from './register-model'
import { LoginService } from '../providers/auth/login.service';
import {Router} from '@angular/router';

import 'style-loader!./login.scss';

@Component({
  selector: 'login',
  templateUrl: './login.html',
  providers: [LoginService]
})
export class Login {
  public loginSubmitted:boolean = false;
  public registerSubmitted:boolean = false;
  private authToken:string = ""

  practices = [
    {acronym: "label", name: "Practice ou Bureau"},
    {acronym: "DET", name: "Digital & Emerging Technologies"},
    {acronym: "CDT", name: "Cyversecurity & Digital Trust"},
    {acronym: "IDA", name: "Infrastructure & Data Architecture"},
    {acronym: "EUT", name: "Energy, Utilities & Transport"},
  ];
  
  loginUser = new LoginUser("","");
  registerUser = new RegisterUser("","","",this.practices[0].acronym,"");

  constructor(private loginService: LoginService, private router : Router) {
    System.import('./login.js');    
  }

  public loginSubmit():void {
    this.loginSubmitted = true;
    if (this.validateForm('login')) {
      Promise.all([
        this.loginService.login(this.loginUser)
      ]).then(
        data  => this.setUserLogin(data),
        error =>  this.setUserLoginError(<any>error)
      );       
    }
  }

  public setUserLogin(data) {
    localStorage.setItem('id_token', JSON.stringify(data[0].token))
    localStorage.setItem('user', JSON.stringify(data[0].user))
    this.router.navigate(['/home']);
  }

  public setUserLoginError(error) {
    console.log(error);
  }

  public registerSubmit(values:Object):void {
    this.registerSubmitted = true;
    if (this.validateForm('register')) {
      console.log('register valid!')
      // your code goes here
      // console.log(values);
    }
  }

  public validateForm(form:string):boolean {
    var errorFlag = false
    switch(form) {
      case 'login':
        if(this.loginUser.email.search("@wavestone.com") == -1 || this.loginUser.email === "")
          errorFlag = true
        if(this.loginUser.password === "")
          errorFlag = true
        if(!errorFlag)
          return true
        break;
      case 'register':
        if(this.registerUser.email.search("@wavestone.com") == -1 || this.registerUser.email === "")
          errorFlag = true
        if(this.registerUser.password === "")
          errorFlag = true
        if(this.registerUser.name === "" || this.registerUser.surname === "")
          errorFlag = true
        if(this.registerUser.practice === "label")
          errorFlag = true
        if(!errorFlag)
          return true
        break;
      default: 
        return false
    }
  }

  get diagnostic() { return JSON.stringify(this.registerUser); }
}
