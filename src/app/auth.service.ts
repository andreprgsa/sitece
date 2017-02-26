import { Injectable }      from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { Router } from '@angular/router';
import 'rxjs/add/operator/filter';

// Avoid name not found warnings
//declare var Auth0Lock: any;
let Auth0Lock = require('auth0-lock').default;


@Injectable()
export class Auth {

  //Store profile object in auth class
  userProfile: Object;

  // Configure Auth0
  lock = new Auth0Lock('ntwnskoFG7IQH0Z0tM3IKUqPDgKlmxHZ', 'cewavestone.eu.auth0.com', {
    primaryColor: '#503078',
    avatar: null,
    language: 'fr',
    closable: false,
    loginAfterSignUp: false,
    languageDictionary: {
      emailInputPlaceholder: "prenom.nom@wavestone.com",
      title: "CE Wavestone",
      forgotPasswordTitle: "Réinitialisation"
    }, 
    rememberLastLogin: false,
    theme: {
      primaryColor: '#503078'
    },
    additionalSignUpFields: [
      {
        name: "firstname",
        placeholder: "Prénom"
      },
      {
        name: "lastname",
        placeholder: "Nom"
      },      
      {
        type: "select",
        name: "practice",
        placeholder: "Practice",
        options: [
          {value: "det", label: "Digital & Emerging Technologies"},
          {value: "eut", label: "Energy & Utilities"},
          {value: "ida", label: "IT & Data Architecture"},
          {value: "cdt", label: "Cybersecurity & Digital Trust"}
        ]
      }
    ]
  });

  constructor(public router: Router) {

    // Add callback for the Lock `authenticated` event
    this.lock.on("authenticated", (authResult) => {
      localStorage.setItem('id_token', authResult.idToken);

      // Fetch profile information
      this.lock.getProfile(authResult.idToken, (error, profile) => {
        if (error) {
          // Handle error
          alert(error);
          return;
        }

        localStorage.setItem('profile', JSON.stringify(profile));
        this.userProfile = profile;
      });
    });    
  }

  public login() {
    // Call the show method to display the widget.
    this.lock.show();
  }

  public authenticated() {
    // Check if there's an unexpired JWT
    // This searches for an item in localStorage with key == 'id_token'
    return tokenNotExpired();
  }

  public logout() {
    // Remove token from localStorage
    localStorage.removeItem('id_token');
    localStorage.removeItem('profile');
    this.userProfile = undefined;
  }
}