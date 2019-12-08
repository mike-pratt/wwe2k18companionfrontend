import { Component, OnInit } from '@angular/core';
import { ShowService } from '../shared/services/shows/show.service';
import { Show } from '../shared/models/shows/show.model';
import { Subscription } from 'rxjs';
import { Wrestler } from '../shared/models/wrestlers/wrestler.model';
import { IDictionary } from '../shared/models/common/dictionary.interface';
import { Paged } from '../shared/models/paged.model';

@Component({
    selector: 'app-draft-mode',
    templateUrl: './draft.component.html',
    styleUrls: ['./draft.component.css']
})
export class DraftComponent implements OnInit {

    private shows: Show[];
    private showRosters: IDictionary<Paged<Wrestler>> = {};

    private tableCols: any = [
        { title: 'Name', prop: 'name' },
        {title: 'Show', prop: 'show_id' }
    ];

    constructor(private _showService: ShowService) {
    }

    ngOnInit(): void {
        this.serviceGetShows().add(() => {
            for (let show of this.shows) {
                this.serviceGetShowRoster(show.id, 1);
            }
        });
    }

    private serviceGetShows(): Subscription {
       return this._showService.getAllShows().subscribe((data: Show[]) => this.shows = data);
    }

    private serviceGetShowRoster(showId: number, pageNumber: 1): Subscription { 
        return this._showService.getRoster(showId, pageNumber).subscribe((data: Paged<Wrestler>) => this.showRosters[showId] = data);
    }

}