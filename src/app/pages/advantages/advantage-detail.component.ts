import { Component, Input }   from '@angular/core';

import { Advantage }      from './advantage';

@Component({
  selector: 'advantage-list',
  template: ''
})
export class AdvantageDetailComponent {
  @Input() advantage:Advantage;
}