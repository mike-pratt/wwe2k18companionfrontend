import { Component, OnInit, ViewChild } from '@angular/core';
import { IBaseModelViewComponent } from '../../shared/models/common/view-component.interface';
import { YesNoDialogModalComponent } from '../../shared/components/yesnodialogmodal/yesnodialogmodal.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Wrestler } from '../../shared/models/wrestlers/wrestler.model';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router } from '@angular/router';
import { WrestlerService } from '../../shared/services/wrestlers/wrestler.service';
import { Show } from '../../shared/models/shows/show.model';
import { ChampionshipService } from '../../shared/services/championships/championship.service';
import { Championship } from '../../shared/models/championships/championship.model';
import { Paged } from '../../shared/models/paged.model';
import { DatatableModalComponent } from '../../shared/components/modals/datatable-modal/datatable-modal.component';
import { BaseModel } from '../../shared/models/base.model';

@Component({
  selector: 'app-championships-view',
  templateUrl: './championships-view.component.html',
  styleUrls: ['./championships-view.component.css']
})
export class ChampionshipsViewComponent implements OnInit, IBaseModelViewComponent {

    @ViewChild('confirmDeleteDialogModal', { static: true })
    public confirmDeleteDialogModal: YesNoDialogModalComponent;

    @ViewChild('wrestlersDatatable', { static: true })
    public wrestlersDatatableModal: DatatableModalComponent;

    public form: FormGroup;
    public editButtonPressed: boolean;
    public championship: Championship;
    public champion: Wrestler;
    public shows: Paged<Show>;
    public wrestlers: Paged<Wrestler>;

    public wrestlersAndShowsColumns = [
        { name: 'Name', prop: 'name' },
    ];

    private routerSub: Subscription;

    constructor(private _router: Router,
                private _activatedRoute: ActivatedRoute,
                private _championshipService: ChampionshipService,
                private _wrestlerService: WrestlerService,
                private fb: FormBuilder) {
        this.form = fb.group({
            name: [null, Validators.compose([Validators.required])],
            level: [null, Validators.compose([Validators.required])],
            champion_id: [null]
            // shows
        });
    }

    ngOnInit() {
        this.routerSub = this._activatedRoute.params.subscribe((params) => {
            const id = params['id'];
            if (id) {
                this.serviceGetById(id).add(() => {
                    this.serviceGetChampionById(this.championship.champion_id);
                    this.serviceGetShowsThatChampionshipBelongsTo(id);
                    this.serviceGetWrestlers(0);
                });
            } else {
                this._router.navigate(['/championships']);
            }
        });
    }

    cancelEdit(): void {
        this.editButtonPressed = false;
        this.showData();
    }

    delete(): void {
        this.serviceDelete(this.championship.id);
        this._router.navigate(['/championships']);
    }

    edit(): void {
        this.editButtonPressed = true;
    }

    saveChanges(): void {
        this.editButtonPressed = false;
        this.championship.name = this.form.value.name;
        this.championship.level = this.form.value.level;

        this.serviceUpdate(this.championship);
    }

    selectNewChampion(): void {
        this.wrestlersDatatableModal.open();
    }

    updateChampion(wrestler: BaseModel): void {
        this.championship.champion_id = wrestler.id; // new id passed from generic components event emitter.
        this.serviceUpdate(this.championship).add(() => this.serviceGetChampionById(wrestler.id));
    }

    showData(): void {
        this.form.setValue({
            name: this.championship.name,
            level: this.championship.level,
            champion_id: this.champion !== undefined ? this.champion.name : null
        });
    }

    private serviceGetById(id: number): Subscription {
        return this._championshipService.getChampionshipById(id).subscribe((data) => {
            this.championship = data;
            this.showData();
        });
    }

    // TODO: Could use the paginated get all call instead of get/update champion, instead of making this call.
    private serviceGetChampionById(id: number): Subscription {
        return this._wrestlerService.getWrestlerById(id).subscribe((data) => {
            this.champion = data;
            this.showData();
        });
    }

    private serviceGetWrestlers(pageNumber: number): Subscription {
        return this._wrestlerService.getWrestlers(pageNumber).subscribe(data => {
            this.wrestlers = data;
        });
    }

    private serviceUpdate(championship: Championship): Subscription {
        return this._championshipService.updateChampionship(championship).subscribe();
    }

    private serviceDelete(id: number): Subscription {
        return this._championshipService.deleteChampionship(id).subscribe();
    }

    private serviceGetShowsThatChampionshipBelongsTo(id: number): Subscription {
        return this._championshipService.getShows(id).subscribe((data: Paged<Show>) => {
            this.shows = data;
        });
    }

}
