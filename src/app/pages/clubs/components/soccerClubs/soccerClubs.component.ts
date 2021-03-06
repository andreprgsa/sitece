import {Component, OnInit, ElementRef} from '@angular/core';
import {Club} from '../../club';
import {ClubService} from '../../club.service';
import 'style-loader!../../clubs.scss';
import {Router} from '@angular/router';

@Component({
  selector: 'soccer-clubs',
  providers: [ClubService],
  templateUrl: './soccerClubs.html'
})

export class SoccerClubs{

  clubs: Club[];
  selectedClub: Club;

  constructor(private router : Router, private clubService: ClubService) {}

  getMyClub(): void {
    this.clubService.getClubs().then(clubs => this.clubs = clubs);
  }

  ngOnInit(): void {
    this.getMyClub();
  }

  gotoClubs(): void {
    this.router.navigate(['/pages/clubs/overviewClubs']);
  }
}