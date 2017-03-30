import {Component, OnInit, ElementRef} from '@angular/core';
import {Club} from '../../club';
import {ClubService} from '../../club.service';

@Component({
  selector: 'running-clubs', //change selon le club
  providers: [ClubService],
  templateUrl: './runningClubs.html' //change selon le club
})

export class RunningClubs{ //change selon le club

  clubs: Club[];
  selectedClub: Club;

  constructor(private clubService: ClubService) {}

  getMyClub(): void {
    this.clubService.getClubs().then(clubs => this.clubs = clubs);
  }

  ngOnInit(): void {
    this.getMyClub();
  }

}