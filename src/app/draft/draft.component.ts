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
    private selectedWrestlersForDraft: IDictionary<Wrestler[]> = {}; // Key is show id, TODO: What if a wrestler has no assigned show?

    private tableCols: any = [
        { title: 'Name', prop: 'name' },
        {title: 'Show', prop: 'show_id' }
    ];

    constructor(private _showService: ShowService) {
    }

    public ngOnInit(): void {
        this.serviceGetShows().add(() => {
            for (let show of this.shows) {
                this.serviceGetShowRoster(show.id, 1);
            }
        });
    }

    public onWrestersSelected(wrestlers: Wrestler[]) {
        if (wrestlers.length > 0) {
            const id = wrestlers[0].show_id; // All wrestlers in the array should belong to the same show at this point.
            this.selectedWrestlersForDraft[id] = wrestlers;
        }
        console.log('Selected wrestlers for draft = ', this.selectedWrestlersForDraft);
    }

    private serviceGetShows(): Subscription {
       return this._showService.getAllShows().subscribe((data: Show[]) => this.shows = data);
    }

    private serviceGetShowRoster(showId: number, pageNumber: 1): Subscription { 
        return this._showService.getRoster(showId, pageNumber).subscribe((data: Paged<Wrestler>) => this.showRosters[showId] = data);
    }

}