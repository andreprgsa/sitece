import { Component, Input }   from '@angular/core';

import { Club }      from './club';

@Component({
  selector: 'my-club-detail',
  templateUrl: 'club-detail.html'
})
export class ClubDetailComponent{
  @Input() club:Club;
}