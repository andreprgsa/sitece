import {Component, OnInit} from '@angular/core';

import {Club} from './club';
import {ClubService} from './club.service';

@Component({
  selector: 'clubs',
  providers: [ClubService],
  templateUrl: 'clubs.html'
})

export class ClubsComponent implements OnInit{
	clubs: Club[];
  constructor(private clubService: ClubService) {}

  getClubs(): void {
    this.clubService.getClubs().then(clubs => this.clubs = clubs);
  }

  ngOnInit(): void {
    this.getClubs();
  }

}