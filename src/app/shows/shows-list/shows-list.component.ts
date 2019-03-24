import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {ShowService} from '../../shared/services/shows/show.service';
import {Paged} from '../../shared/models/paged.model';
import {Show} from '../../shared/models/shows/show.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shows-list',
  templateUrl: './shows-list.component.html',
  styleUrls: ['./shows-list.component.css']
})
export class ShowsListComponent implements OnInit {

    public pageOffset = 0;
    public columns = [
        { name: 'Show Name', prop: 'name' },
    ];

    public shows: Paged<Show>;

    constructor(private _showService: ShowService,
              private _router: Router) {
    }

    ngOnInit() {
        this.serviceGetShows(0);
    }

    public goToPage(event): void {
        this.serviceGetShows(event.offset + 1);
    }

    public goToView(event: any): void {
        const show = event.selected[0];
        this._router.navigate(['shows/view', show.id]);
    }

    public createShow(show): void {
        this.serviceCreateShow(show).add(() => {
          this.serviceGetShows(this.pageOffset);
        });
    }

    private serviceGetShows(page: number): Subscription {
        return this._showService.getShows(page).subscribe((data: Paged<Show>) => {
          this.shows = data;
        });
    }

    private serviceCreateShow(show: Show): Subscription {
        return this._showService.createShow(show).subscribe();
    }

}
