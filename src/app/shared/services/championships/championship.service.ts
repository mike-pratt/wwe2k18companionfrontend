import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Paged } from '../../models/paged.model';
import { BaseService } from '../base.service';
import { Championship } from '../../models/championships/championship.model';
import { Show } from '../../models/shows/show.model';

@Injectable()
export class ChampionshipService extends BaseService  {

  constructor(_http: Http) {
    super(_http);
    this.actionUrl += 'v0/championship';
  }

  public getChampionships(pageNumber: number): Observable<Paged<Championship>> {
    return this._http.get(this.actionUrl + '?page=' + pageNumber, this.getRequestOptions())
        .map((data) => {
          return data.json();
        });
  }

  public getChampionshipById(id: number): Observable<Championship> {
    return this._http.get(this.actionUrl + '/' + id, this.getRequestOptions())
        .map((data) => {
          return data.json();
        });
  }

  public getShows(championshipId: number): Observable<Paged<Show>> {
      return this._http.get(this.actionUrl + '/' + championshipId + '/shows', this.getRequestOptions())
          .map((data) => {
              return data.json();
          });
  }

  public updateChampionship(championship: Championship): Observable<Response> {
    return this._http.put(this.actionUrl + '/' + championship.id, JSON.stringify(championship), this.getRequestOptions());
  }

  public createChampionship(championship: Championship): Observable<Response> {
    return this._http.post(this.actionUrl, JSON.stringify(championship), this.getRequestOptions());
  }

  public deleteChampionship(id: number): Observable<Response> {
    return this._http.delete(this.actionUrl + '/' + id, this.getRequestOptions());
  }

}
