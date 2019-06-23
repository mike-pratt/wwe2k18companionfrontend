import { Injectable } from '@angular/core';
import { Wrestler } from '../../models/wrestlers/wrestler.model';

@Injectable()
export class WrestlerRivalsResolverService {

   public allWrestlersForRivalryLookup: Wrestler[];

  constructor() { }

}
