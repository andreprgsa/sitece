import { Component, Input }   from '@angular/core';

import { Event }      from './event';

@Component({
  selector: 'my-event-detail',
  templateUrl: 'event-detail.html'
})
export class EventDetailComponent {
  @Input() event:Event;
}