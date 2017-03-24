import {Component} from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import { LoginUser } from './login-model'
import { RegisterUser } from './register-model'
import { LoginService } from '../providers/auth/login.service';
import { RegisterService } from '../providers/auth/register.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

import 'style-loader!./login.scss';

@Component({
  selector: 'login',
  templateUrl: './login.html',
  providers: [LoginService, RegisterService]
})
export class Login {
  public loginSubmitted:boolean = false
  public registerSubmitted:boolean = false
  public loginOrPassReset:string = "login"
  public routingMessage:string

  //TODO rationaliser
  public messageType:string
  public messageContent:string
  public messageTarget:string
  public resetPasswordEmail:string = null

  practices = [
    {acronym: "label", name: "Practice ou Bureau"},
    {acronym: "DET", name: "Digital & Emerging Technologies"},
    {acronym: "CDT", name: "Cyversecurity & Digital Trust"},
    {acronym: "IDA", name: "Infrastructure & Data Architecture"},
    {acronym: "EUT", name: "Energy, Utilities & Transport"},
  ];
  
  loginUser = new LoginUser("","");
  registerUser = new RegisterUser("","","",this.practices[0].acronym,"");

  constructor(private loginService: LoginService, private registerService: RegisterService, private router : Router, private activatedRoute: ActivatedRoute) {
    System.import('./login.js');    
  }

  ngOnInit(){
    // subscribe to router event
    this.activatedRoute.params.subscribe((params: Params) => {
        this.routingMessage = params['message'];
      });

    switch(this.routingMessage){
      case "OK":
          this.messageTarget = 'login'
          this.messageType = 'success'
          this.messageContent = "Ton compte a été validé ! Tu peux désormais te connecter au site"        
        break;
      case "KO":
          this.messageTarget = 'login'
          this.messageType = 'error'
          this.messageContent = "Erreur de validation de ton compte - contacte l'équipe du Site CE !"        
        break;
      default:
        break;
    }
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
        localStorage.setItem('id_token', JSON.stringify(data.body.token))
        localStorage.setItem('user', JSON.stringify(data.body.user))
        this.router.navigate(['/pages/home']);
        break;
      case 401:
        this.messageTarget = 'login'
        this.messageType = 'error'
        this.messageContent = "Email et/ou mot de passe incorrect !"
        break;
      case 403:
        this.messageTarget = 'login'
        this.messageType = 'error'
        this.messageContent = "Ton compte n'a pas encore été validé !"
        break;
      case 0:
        this.messageTarget = 'login'
        this.messageType = 'error'
        this.messageContent = "Le service API CE Wavestone semble être hors-ligne..."
        break;
      default:
        this.messageTarget = 'login'
        this.messageType = 'error'
        this.messageContent = "Erreur inconnue ! Contacte l\'équipe du Site CE s'il te plait :)"
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
    switch(Number(data.status)){
      case 201: //does not work !
        this.messageTarget = 'register'
        this.messageType = 'success'
        this.messageContent = "Compte crée avec succès ! Vérifie tes mails pour le valider :)"
        break;
      case 422:
        this.messageTarget = 'register'
        this.messageType = 'error'
        this.messageContent = JSON.parse(data._body).message
        break;
      case 0:
        this.messageTarget = 'register'
        this.messageType = 'error'
        this.messageContent = "Le service API CE Wavestone semble être hors-ligne..."
        break;
      default:
        this.messageTarget = 'register'
        this.messageType = 'error'
        this.messageContent = "Erreur inconnue ! Contacte l\'équipe du Site CE s'il te plait :)"
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

  public resetPasswordSubmit(){

  }

  public switchLoginForm(){
    this.loginOrPassReset = this.loginOrPassReset == "login" ? "passReset" : "login"
  }
}
