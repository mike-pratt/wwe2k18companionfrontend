import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Championship } from '../../../shared/models/championships/championship.model';
import { Wrestler } from '../../../shared/models/wrestlers/wrestler.model';
import { Show } from '../../../shared/models/shows/show.model';
import { ShowService } from '../../../shared/services/shows/show.service';
import { Subscription } from 'rxjs';
import { WrestlerService } from '../../../shared/services/wrestlers/wrestler.service';

@Component({
  selector: 'app-championships-create',
  templateUrl: './championships-create.component.html',
  styleUrls: ['./championships-create.component.css']
})
export class ChampionshipsCreateComponent implements OnInit {

  @Output()
  public confirmPressed: EventEmitter<Championship> = new EventEmitter<Championship>();

  @ViewChild('createModal')
  public createModal: ModalDirective;

  public form: FormGroup;

  public shows: Show[];
  public wrestlers: Wrestler[];

  constructor(private _fb: FormBuilder,
              private _showService: ShowService,
              private _wrestlerService: WrestlerService) {
    this.form = this._fb.group({
      name: [null, Validators.compose([Validators.required])],
      level: [null, Validators.compose([Validators.required])],
      show_id: [null],
      wrestler_id: [null]
    });
  }

  ngOnInit() {
    this.serviceGetShows();
    this.serviceGetWrestlers();
  }

  public openModal(): void {
    this.createModal.show();
  }

  public closeModal(): void {
    this.form.reset();
    this.createModal.hide();
  }

  public createChampionship(): void {
    const championship = new Championship({
      id: undefined,
      name: this.form.value.name,
      level: this.form.value.level,
      show_id: this.form.value.show_id,
      wrestler_id: this.form.value.wrestler_id,
    });
    if (championship.show_id === null) {
      championship.show_id = undefined; // Don't pass in POST request.
    }
    if (championship.wrestler_id === null) {
      championship.wrestler_id = undefined;
    }

    this.confirmPressed.emit(championship);
    this.closeModal();
  }

  private serviceGetShows(): Subscription {
    return this._showService.getAllShows().subscribe((data: Show[]) => {
      this.shows = data;
    });
  }

  private serviceGetWrestlers(): Subscription {
    return this._wrestlerService.getWrestlers(0).subscribe((data) => { // FIXME: Only gets the first page of wrestlers.
      this.wrestlers = data.data;
    });
  }

}
