import {Component, OnInit} from '@angular/core';
import 'style-loader!./events.scss';

import {Event} from './event';
import {EventService} from './event.service';

@Component({
  selector: 'events',
  providers: [EventService],
  templateUrl: 'events.html',
  styleUrls: ['events.scss']
})
export class EventsComponent implements OnInit{
  events: Event[];
  selectedEvent: Event;

  constructor(private eventService: EventService) {}

  getEvents(): void {
    this.eventService.getEvents().then(events => this.events = events);
  }

  ngOnInit(): void {
    this.getEvents();
  }

  onSelect(event: Event): void {
    this.selectedEvent = event;
  }
}