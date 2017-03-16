import { Injectable } from '@angular/core';

import {Club} from './club';
import { CLUBS }     from './mock-clubs';

@Injectable()
export class ClubService {
  getClubs(): Promise<Club[]> {
    return Promise.resolve(CLUBS);
  }

  getClub(id: number): Promise<Club> {
    return this.getClubs().then(clubs => clubs.find(club => club.id === +id));
  }
}