import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { EventsComponent } from './events.component';
import { routing } from './events.routing';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [
    EventsComponent
  ]
})
export class EventsModule {}