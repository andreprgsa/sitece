import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { AboutComponent } from './about.component';
import { routing } from './about.routing';

import { Feed } from './feed';
import { FeedService } from './feed/feed.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing
  ],
  declarations: [
  	Feed,
    AboutComponent
  ],
  providers: [
  	FeedService,
  ]
 })
export class AboutModule {}