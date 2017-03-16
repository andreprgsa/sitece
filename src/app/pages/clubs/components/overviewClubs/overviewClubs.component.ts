import {Component, OnInit, ElementRef} from '@angular/core';
import {Router} from '@angular/router';
import {Club} from '../../club';
import {ClubService} from '../../club.service';
import 'style-loader!./overviewClubs.scss';

@Component({
  selector: 'overview-clubs',
  providers: [ClubService],
  templateUrl: './overviewClubs.html'
})

export class OverviewClubs implements OnInit{
  clubs: Club[];
  selectedClub: Club;

  constructor(private router : Router, private clubService: ClubService) {}

  getClubs(): void {
    this.clubService.getClubs().then(clubs => this.clubs = clubs);
  }

  ngOnInit(): void {
    this.getClubs();
  }

  onSelect(club: Club): void {
    this.selectedClub = club;
    this.router.navigate(['/soccerClubs']);
  }

}