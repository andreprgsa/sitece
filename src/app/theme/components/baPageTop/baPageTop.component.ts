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

  public isMenuCollapsed:boolean = false;
  public isScrolled:boolean = false;
 //Store profile object in auth class
  userProfile: Object;  

  constructor(private _state:GlobalState, private auth: Auth) {
    this.userProfile = JSON.parse(localStorage.getItem('profile')); 
    console.log("UP: " + this.userProfile);
    this._state.subscribe('menu.isCollapsed', (isCollapsed) => {
      this.isMenuCollapsed = isCollapsed;
    });      
  }

  public scrolledChanged(isScrolled) {
    this.isScrolled = isScrolled;
  }

  public toggleMenu() {
    this.isMenuCollapsed = !this.isMenuCollapsed;
    this._state.notifyDataChanged('menu.isCollapsed', this.isMenuCollapsed);
    return false;
  }     
}
