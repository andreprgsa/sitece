import {Component} from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import { LoginUser } from './login-model'
import { RegisterUser } from './register-model'
import { LoginService } from '../providers/auth/login.service'
import { RegisterService } from '../providers/auth/register.service'
import { ResetPasswordService } from '../providers/auth/reset-password.service'
import { ForgotPasswordService } from '../providers/auth/forgot-password.service'
import { Router, ActivatedRoute, Params } from '@angular/router'

import 'style-loader!./login.scss';

@Component({
  selector: 'login',
  templateUrl: './login.html',
  providers: [LoginService, RegisterService, ResetPasswordService, ForgotPasswordService]
})
export class Login {
  public loginSubmitted:boolean = false
  public registerSubmitted:boolean = false
  public loginOrPassReset:string = 'login'

  // Routing
  public routingOrigin:string
  public routingContent:string

  // Messages
  public messageType:string
  public messageContent:string
  public messageTarget:string

  // Reset password variabled
  public resetPasswordEmail:string = null
  public resetPasswordPassword:string = null

  // TODO : Déporter cela sur la base de données
  practices = [
    {name: "Belgium"},
    {name: "Consumer Goods & Services"},
    {name: "Cybersecurity & Digital Trust"},
    {name: "Digital & Emerging Technologies"},
    {name: "Digital & IT Strategy"},
    {name: "Energy, Utilities & Transport"},
    {name: "Finance & Performance"},
    {name: "Financial Services"},
    {name: "Innovation Management & Funding"},
    {name: "IT & Data Architecture"},
    {name: "Luxembourg"},
    {name: "Manufacturing"},
    {name: "Marseille"},
    {name: "Morocco"},
    {name: "Nantes"},
    {name: "People & Change"}, 
    {name: "Public Sector"},
    {name: "Real Estates"},
    {name: "Switzerland Financial Services"},
    {name: "Switzerland Technologies"},
    {name: "UK"},
    {name: "United States"},
  ];
  
  loginUser = new LoginUser("","");
  registerUser = new RegisterUser("","","",this.practices[0].name,"");

  constructor(
    private loginService: LoginService, 
    private registerService: RegisterService, 
    private resetPasswordService: ResetPasswordService, 
    private forgotPasswordService: ForgotPasswordService, 
    private router : Router, 
    private activatedRoute: ActivatedRoute
    ) {
  }

  ngOnInit(){
    System.import('./login.js');    

    // subscribe to router event
    this.activatedRoute.params.subscribe((params: Params) => {
        if(params['origin'])
          this.routingOrigin = params['origin'];

        if(params['content'])
          this.routingContent = params['content'];
      });

    if(this.routingOrigin){
      switch(this.routingOrigin){
        case "verify":
            this.loginOrPassReset = 'login'
            this.messageTarget = 'login'
            switch(this.routingContent){
              case 'OK':
                this.messageType = 'success'
                this.messageContent = "Ton compte a été validé ! Tu peux désormais te connecter au site"        
                break
              case 'KO':
                this.messageType = 'error'
                this.messageContent = "Erreur de validation de ton compte - contacte l'équipe du Site CE !"        
                break
              default:
                break
            }
          break
        case "reset":
            this.loginOrPassReset = 'passReset'
            this.messageTarget = 'reset-password'
            this.messageType = 'success'
            this.messageContent = "Quel sera ton nouveau mot de passe ?"        
          break
        default:
          break
      }
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
      case 201:
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


  public resetPasswordSubmit(){
    // Form used to reset the password
    if(this.routingOrigin == "reset") {
      if (this.validateForm('reset-password')) {
        Promise.all([
          this.resetPasswordService.resetPassword(this.routingContent, this.resetPasswordPassword)
        ]).then(
          data  => this.treatPasswordReset(data[0]),
          error => this.setError(<any>error)
        );       
      }
    }

    // Form used to ask for a password reset
    else {
      if (this.validateForm('forgot-password')) {
        Promise.all([
          this.forgotPasswordService.forgotPassword(this.resetPasswordEmail)
        ]).then(
          data  => this.treatPasswordForgotten(data[0]),
          error => this.setError(<any>error)
        );       
      }
    }
  }

  public treatPasswordReset(data) {
    switch(Number(data.status)){
      case 200:
        this.messageTarget = 'reset-password'
        this.messageType = 'success'
        this.messageContent = "Mot de passe réinitialisé ! Tu peux désormais te connecter au site" 
        break;
      case 422:
        this.messageTarget = 'reset-password'
        this.messageType = 'error'
        this.messageContent = 'Le token de réinitialisation est expiré ou le compte n\'existe pas.'
        break;
      case 0:
        this.messageTarget = 'reset-password'
        this.messageType = 'error'
        this.messageContent = "Le service API CE Wavestone semble être hors-ligne..."
        break;
      default:
        this.messageTarget = 'reset-password'
        this.messageType = 'error'
        this.messageContent = "Erreur inconnue ! Contacte l\'équipe du Site CE s'il te plait :)"
        break;
    }
  }

  public treatPasswordForgotten(data) {
    switch(Number(data.status)){
      case 200:
        this.messageTarget = 'reset-password'
        this.messageType = 'success'
        this.messageContent = "Mail de réinitialisation envoyé à l\'addresse fournie !" 
        break;
      case 0:
        this.messageTarget = 'reset-password'
        this.messageType = 'error'
        this.messageContent = "Le service API CE Wavestone semble être hors-ligne..."
        break;
      default:
        this.messageTarget = 'reset-password'
        this.messageType = 'error'
        this.messageContent = "Erreur inconnue ! Contacte l\'équipe du Site CE s'il te plait :)"
        break;
    }
  }  

  public switchLoginForm(){
    this.loginOrPassReset = this.loginOrPassReset == "login" ? "passReset" : "login"
  }

  public setError(error:any) {
    console.log("error !")
    console.log(error);
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
      case 'reset-password':
        if(this.resetPasswordPassword === "")
          errorFlag = true
        if(!errorFlag)
          return true
        break;
      case 'forgot-password':
        if(this.resetPasswordEmail.search("@wavestone.com") == -1 || this.resetPasswordEmail === "")
          errorFlag = true
        if(!errorFlag)
          return true
        break;
      default: 
        return false
    }
  }

}
