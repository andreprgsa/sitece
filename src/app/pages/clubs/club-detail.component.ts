import { Component, Input }   from '@angular/core';

import { Club }      from './club';

@Component({
  selector: 'club-list',
  template: ''
})
export class ClubDetailComponent {
  @Input() club:Club;
}