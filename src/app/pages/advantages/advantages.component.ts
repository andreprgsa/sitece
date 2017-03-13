import {Component, OnInit} from '@angular/core';

import {Advantage} from './advantage';
import {AdvantageService} from './advantage.service';

@Component({
  selector: 'advantages',
  providers: [AdvantageService],
  templateUrl: 'advantages.html'
})

export class AdvantagesComponent implements OnInit{
	advantages: Advantage[];
  constructor(private advantageService: AdvantageService) {}

  getAdvantages(): void {
    this.advantageService.getAdvantages().then(advantages => this.advantages = advantages);
  }

  ngOnInit(): void {
    this.getAdvantages();
  }
}