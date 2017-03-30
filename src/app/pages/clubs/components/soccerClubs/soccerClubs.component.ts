import {Component, OnInit, ElementRef} from '@angular/core';
import {Club} from '../../club';
import {ClubService} from '../../club.service';
import 'style-loader!../../clubs.scss';

@Component({
  selector: 'soccer-clubs',
  providers: [ClubService],
  templateUrl: './soccerClubs.html'
})

export class SoccerClubs{

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