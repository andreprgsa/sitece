import {Component} from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import { LoginUser } from './login-model'
import { RegisterUser } from './register-model'
import { LoginService } from '../providers/auth/login.service';
import { RegisterService } from '../providers/auth/register.service';
import {Router} from '@angular/router';

import 'style-loader!./login.scss';

@Component({
  selector: 'login',
  templateUrl: './login.html',
  providers: [LoginService, RegisterService]
})
export class Login {
  public loginSubmitted:boolean = false
  public registerSubmitted:boolean = false
  public loginError:boolean = false
  public loginErrorMessage:string
  public registerError:boolean = false
  public registerErrorMessage:string

  practices = [
    {acronym: "label", name: "Practice ou Bureau"},
    {acronym: "DET", name: "Digital & Emerging Technologies"},
    {acronym: "CDT", name: "Cyversecurity & Digital Trust"},
    {acronym: "IDA", name: "Infrastructure & Data Architecture"},
    {acronym: "EUT", name: "Energy, Utilities & Transport"},
  ];
  
  loginUser = new LoginUser("","");
  registerUser = new RegisterUser("","","",this.practices[0].acronym,"");

  constructor(private loginService: LoginService, private registerService: RegisterService, private router : Router) {
    System.import('./login.js');    
  }

  public loginSubmit():void {
    this.loginSubmitted = true;
    if (this.validateForm('login')) {
      Promise.all([
        this.loginService.login(this.loginUser)
      ]).then(
        data  => this.treatUserLogin(data[0]),
        error => this.setError(<any>error)
      );       
    }
  }

  public treatUserLogin(data) {
    switch(Number(data.status)){
      case 200:
        localStorage.setItem('id_token', JSON.stringify(data.token))
        localStorage.setItem('user', JSON.stringify(data.user))
        this.router.navigate(['/home']);
        break;
      case 401:
        this.loginError = true
        this.loginErrorMessage = "Email et/ou mot de passe incorrect !"
        break;
      case 0:
        this.loginError = true
        this.loginErrorMessage = "Le service API CE Wavestone semble être hors-ligne..."
        break;
      default:
        this.loginError = true
        this.loginErrorMessage = "Erreur inconnue ! Contacte l\'équipe du Site CE s'il te plait :)"
        break;
    }
  }

  public setError(error:any) {
    console.log("error !")
    console.log(error);
  }

  public registerSubmit():void {
    this.registerSubmitted = true;
    if (this.validateForm('register')) {
      Promise.all([
        this.registerService.register(this.registerUser)
      ]).then(
        data  => this.treatUserRegister(data[0]),
        error => this.setError(<any>error)
      );   
    }
  }

  public treatUserRegister(data) {
    console.log(data)
    switch(Number(data.status)){
      case 201:
        this.registerError = true
        this.registerErrorMessage = "Compte crée avec succès ! Vérifie tes mails pour la valider :)"
        break;
      case 422:
        this.registerError = true
        this.registerErrorMessage = JSON.parse(data._body).error
        break;
      case 0:
        this.registerError = true
        this.registerErrorMessage = "Le service API CE Wavestone semble être hors-ligne..."
        break;
      default:
        this.registerError = true
        this.registerErrorMessage = "Erreur inconnue ! Contacte l\'équipe du Site CE s'il te plait :)"
        break;
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
        if(this.registerUser.firstName === "" || this.registerUser.lastName === "")
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
