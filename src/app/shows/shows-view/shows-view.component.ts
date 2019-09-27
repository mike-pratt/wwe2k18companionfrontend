import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { ShowService } from '../../shared/services/shows/show.service';
import { Show } from '../../shared/models/shows/show.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { YesNoDialogModalComponent } from '../../shared/components/yesnodialogmodal/yesnodialogmodal.component';
import { IBaseModelViewComponent } from '../../shared/models/common/view-component.interface';
import { Paged } from '../../shared/models/paged.model';
import { Championship } from '../../shared/models/championships/championship.model';

@Component({
  selector: 'app-shows-view',
  templateUrl: './shows-view.component.html',
  styleUrls: ['./shows-view.component.css']
})
export class ShowsViewComponent implements OnInit, IBaseModelViewComponent {

    @ViewChild('confirmDeleteDialogModal', { static: true }) public confirmDeleteDialogModal: YesNoDialogModalComponent;
    public form: FormGroup;
    public editButtonPressed: boolean;
    public show: Show;
    public championships: Paged<Championship>;

    public championshipsColumns = {
        name: 'Name', prop: 'name'
    };

    private routerSub: Subscription;

    constructor(private _router: Router,
                private _activatedRoute: ActivatedRoute,
                private _showService: ShowService,
                private fb: FormBuilder) {
        this.form = fb.group({
            name: [null, Validators.compose([Validators.required])],
            primary_display: [null]
        });
    }

    ngOnInit() {
        this.routerSub = this._activatedRoute.params.subscribe((params) => {
            let showId = params['id'];
            if (showId) {
                this.serviceGetShow(showId);
                this.serviceGetChampionships(showId);
            } else {
                this._router.navigate(['/shows']);
            }
        });
    }

    public edit(): void {
      this.editButtonPressed = true;
    }

    public saveChanges(): void {
        this.editButtonPressed = false;
        this.show.name = this.form.value.name;
        this.show.primary_display = this.form.value.primary_display;

        this.serviceUpdateShow(this.show);
    }

    public cancelEdit(): void {
      this.editButtonPressed = false;
      this.showData();
    }

    public delete(): void {
        this.serviceDeleteShow(this.show.id);
        this._router.navigate(['/shows']); // Show no longer exists, so move back to the list component.
    }


    public showData(): void {
        this.form.setValue({
            name: this.show.name,
            primary_display: this.show.primary_display
        });
    }

    private serviceGetShow(showId: number): Subscription {
        return this._showService.getShowById(showId).subscribe((data) => {
            this.show = data;
            this.showData();
        });
    }

    private serviceUpdateShow(show: Show): Subscription {
        return this._showService.updateShow(show).subscribe();
    }

    private serviceDeleteShow(id: number): Subscription {
        return this._showService.deleteShow(id).subscribe();
    }

    private serviceGetChampionships(showId: number): Subscription {
        return this._showService.getChampionshipsForShow(showId).subscribe(data => this.championships = data);
    }

}
