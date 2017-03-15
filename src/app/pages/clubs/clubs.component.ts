import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import 'style-loader!./clubs.scss';

import {Club} from './club';
import {ClubService} from './club.service';

@Component({
  selector: 'clubs',
  providers: [ClubService],
  templateUrl: 'clubs.html',
  styleUrls: ['clubs.scss']
})

export class ClubsComponent implements OnInit{
	clubs: Club[];
  selectedClub: Club;

  constructor(private router: Router, private clubService: ClubService) {}

  getClubs(): void {
    this.clubService.getClubs().then(clubs => this.clubs = clubs);
  }

  ngOnInit(): void {
    this.getClubs();
  }

  onSelect(club: Club): void {
    this.selectedClub = club;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedClub.id]);
  }

}