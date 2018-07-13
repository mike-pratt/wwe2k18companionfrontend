import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {ShowServiceService} from '../../shared/services/shows/show-service.service';
import {Paged} from '../../shared/models/paged.model';
import {Show} from '../../shared/models/shows/show.model';

@Component({
  selector: 'app-shows-list',
  templateUrl: './shows-list.component.html',
  styleUrls: ['./shows-list.component.css']
})
export class ShowsListComponent implements OnInit {

    rows = [
        { name: 'Raw' },
        { name: 'Smackdown' },
        { name: 'NXT' },
    ];
    columns = [
        { prop: 'name' },
    ];

    private shows: Paged<Show>;

  constructor(private _showService: ShowServiceService) {
      this.serviceGetShows(0);
  }

  ngOnInit() {
  }

  public goToPage(event): void {

  }

  public selectShow(event): void {

  }

  private serviceGetShows(page: number): Subscription {
      return this._showService.getShows(page).subscribe((data) => {
          this.shows = data;
          console.log(data);
      });
  }

}
