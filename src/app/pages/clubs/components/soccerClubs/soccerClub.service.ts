import { Injectable } from '@angular/core';

import {Club} from '../../club';
import { CLUBS }     from '../../mock-clubs';

@Injectable()
export class SoccerClubService {
  getClubs(): Promise<Club[]> {
    return Promise.resolve(CLUBS);
  }

  getSoccerClub(): Promise<Club> {
    return this.getClubs().then(clubs => clubs.find(club => club.title === "Club Soccer"));
  }
}