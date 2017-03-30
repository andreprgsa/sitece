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
    switch (this.selectedClub.title) { //PENSER A AJOUTER LES CLUBS
      case 'Club Soccer':
        this.router.navigate(['/pages/clubs/soccerClubs']);
      break;
      case 'Club Hand':
        this.router.navigate(['/pages/clubs/handClubs']);
      break;
      case 'Club Basket':
        this.router.navigate(['/pages/clubs/basketClubs']);
      break;
      case 'Club Running':
        this.router.navigate(['/pages/clubs/runningClubs']);
      break;
      case 'Club Badminton':
        this.router.navigate(['/pages/clubs/badmintonClubs']);
      break;
      case 'Club Grimp\'':
        this.router.navigate(['/pages/clubs/grimpClubs']);
      break;
      case 'Club Tennis':
        this.router.navigate(['/pages/clubs/tennisClubs']);
      break;
      case 'Club Musique':
        this.router.navigate(['/pages/clubs/musicClubs']);
      break;
    }
    
   // this.router.navigate(['/overviewClubs']);
  }

}