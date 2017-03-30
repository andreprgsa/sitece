import {Component, OnInit, ElementRef} from '@angular/core';
import {Club} from '../../club';
import {ClubService} from '../../club.service';

@Component({
  selector: 'basket-clubs', //change selon le club
  providers: [ClubService],
  templateUrl: './basketClubs.html' //change selon le club
})

export class BasketClubs{ //change selon le club

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