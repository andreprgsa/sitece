import { NgModule }      from '@angular/core';
import { NgaModule } from '../../theme/nga.module';
import { CommonModule }  from '@angular/common';
import { EventsComponent } from './events.component';
import { EventDetailComponent } from './event-detail.component';
import { FormsModule }   from '@angular/forms';
import { routing } from './events.routing';

@NgModule({
  imports: [
    CommonModule,
    NgaModule,
    FormsModule,
    routing
  ],
  declarations: [
    EventsComponent,
    EventDetailComponent
  ]
})
export class EventsModule {}