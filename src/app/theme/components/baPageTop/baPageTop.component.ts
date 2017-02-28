import {Component} from '@angular/core';

import {GlobalState} from '../../../global.state';
import {Auth} from '../../../auth.service';

import 'style-loader!./baPageTop.scss';

@Component({
  selector: 'ba-page-top',
  templateUrl: './baPageTop.html',
  providers: [ Auth ]
})
export class BaPageTop {

  public isScrolled:boolean = false;
 //Store profile object in auth class
  userProfile: Object;  

  constructor(private _state:GlobalState, private auth: Auth) {
    this.userProfile = JSON.parse(localStorage.getItem('profile')); 
    console.log("UP: " + this.userProfile);
  }

  public scrolledChanged(isScrolled) {
    this.isScrolled = isScrolled;
  }
}
