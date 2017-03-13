import { Injectable } from '@angular/core';

import {Advantage} from './advantage';
import { ADVANTAGES }     from './mock-advantages';

@Injectable()
export class AdvantageService {
  getAdvantages(): Promise<Advantage[]> {
    return Promise.resolve(ADVANTAGES);
  }
}