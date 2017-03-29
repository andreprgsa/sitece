import {Component} from '@angular/core';

import {GlobalState} from '../../../global.state';

@Component({
  selector: 'ba-content-top',
  styleUrls: ['./baContentTop.scss'],
  templateUrl: './baContentTop.html',
})
export class BaContentTop {

  public activePageTitle:string = '';
  public isMenuCollapsed:boolean = false;
  public menuLink:string = 'ion-chevron-right'

  constructor(private _state:GlobalState) {
    this._state.subscribe('menu.activeLink', (activeLink) => {
      if (activeLink) {
        this.activePageTitle = activeLink.title;
      }
    });

    this._state.subscribe('menu.isCollapsed', (isCollapsed) => {
      this.isMenuCollapsed = isCollapsed;
    });    
  }

  public toggleMenu() {    
    if(this.isMenuCollapsed)
      this.menuLink = 'ion-close-round'
    else
      this.menuLink = 'ion-chevron-right'

    this.isMenuCollapsed = !this.isMenuCollapsed;
    this._state.notifyDataChanged('menu.isCollapsed', this.isMenuCollapsed);

    return false;
  }   
}
