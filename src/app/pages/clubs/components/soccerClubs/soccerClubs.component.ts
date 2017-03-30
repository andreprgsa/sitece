import {Component, OnInit, ElementRef} from '@angular/core';
import {Club} from '../../club';
import {SoccerClubService} from './soccerClub.service';

@Component({
  selector: 'soccer-clubs',
  providers: [SoccerClubService],
  templateUrl: './soccerClubs.html'
})

export class SoccerClubs{

  clubs: Club[];
  selectedClub: Club;

  constructor(private soccerClubService: SoccerClubService) {}

  getSoccerClub(): void {
    this.soccerClubService.getClubs().then(clubs => this.clubs = clubs);
    //this.soccerClubService.getSoccerClub().then(club => this.selectedClub = club);
  }

  ngOnInit(): void {
    this.getSoccerClub();
  }

}