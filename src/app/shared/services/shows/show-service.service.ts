import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {BaseService} from '../base.service';
import {Observable} from 'rxjs/Observable';
import {Paged} from '../../models/paged.model';
import {Show} from '../../models/shows/show.model';

@Injectable()
export class ShowServiceService extends BaseService { // TODO: Rename ShowServiceService :P

  constructor(_http: Http) {
    super(_http);
    this.actionUrl += 'v0/show';
  }

  public getShows(pageNumber: number): Observable<Paged<Show>> {
      return this._http.get(this.actionUrl + '?page=' + pageNumber, this.getRequestOptions())
          .map((data) => {
            return data.json();
          });
  }

  public getById(id: number): Observable<Show> {
      return this._http.get(this.actionUrl + '/' + id, this.getRequestOptions())
          .map((data) => {
                return data.json();
          });
  }

}
