import { Component, Input }   from '@angular/core';

import { Event }      from './event';

@Component({
  selector: 'event-list',
  templateUrl: 'event-detail.html'
})
export class EventDetailComponent {
  @Input() event:Event;
}