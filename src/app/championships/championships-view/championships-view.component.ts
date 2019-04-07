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

@Component({
  selector: 'app-championships-view',
  templateUrl: './championships-view.component.html',
  styleUrls: ['./championships-view.component.css']
})
export class ChampionshipsViewComponent implements OnInit, IBaseModelViewComponent {

    @ViewChild('confirmDeleteDialogModal') public confirmDeleteDialogModal: YesNoDialogModalComponent;
    public form: FormGroup;
    public editButtonPressed: boolean;
    public championship: Championship;
    public champion: Wrestler;
    public shows: Show[];

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
                    this.serviceGetShowsThatChampionshipBelongsTo();
                });
            } else {
                this._router.navigate(['/championships']);
            }
        });
        this.form.get('show_id').disable();
    }

    cancelEdit(): void {
    }

    delete(): void {
    }

    edit(): void {
    }

    saveChanges(): void {
    }

    showData(): void {
    }

    private serviceGetById(id: number): Subscription {
        return this._championshipService.getChampionshipById(id).subscribe((data) => {
            this.championship = data;
            this.showData();
        });
    }

    private serviceGetChampionById(id: number): Subscription {
        return this._wrestlerService.getWrestlerById(id).subscribe((data) => {
            this.champion = data;
            this.showData();
        });
    }

    private serviceUpdateChampionship(championship: Championship): Subscription {
        return this._championshipService.updateChampionship(championship).subscribe();
    }

    private serviceDelete(id: number): Subscription {
        return this._championshipService.deleteChampionship(id).subscribe();
    }

    private serviceGetShowsThatChampionshipBelongsTo(): Subscription {
        return this._championshipService.getShows().subscribe((data: Show[]) => {
            this.shows = data;
        });
    }

}
