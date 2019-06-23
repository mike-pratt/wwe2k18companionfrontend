import {Component, OnInit, ViewChild} from '@angular/core';
import {Wrestler} from '../../shared/models/wrestlers/wrestler.model';
import {YesNoDialogModalComponent} from '../../shared/components/yesnodialogmodal/yesnodialogmodal.component';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {WrestlerService} from '../../shared/services/wrestlers/wrestler.service';
import {IBaseModelViewComponent} from '../../shared/models/common/view-component.interface';
import {ShowService} from '../../shared/services/shows/show.service';
import {Show} from '../../shared/models/shows/show.model';
import { ChampionshipReign } from '../../shared/models/championships/championship-reign.model';
import { Paged } from '../../shared/models/paged.model';
import { ChampionshipService } from '../../shared/services/championships/championship.service';
import { Championship } from '../../shared/models/championships/championship.model';
import { Rivalry } from '../../shared/models/wrestlers/rivalry.model';

@Component({
  selector: 'app-wrestlers-view',
  templateUrl: './wrestlers-view.component.html',
  styleUrls: ['./wrestlers-view.component.css']
})
export class WrestlersViewComponent implements OnInit, IBaseModelViewComponent {

    @ViewChild('confirmDeleteDialogModal') public confirmDeleteDialogModal: YesNoDialogModalComponent;

    public form: FormGroup;
    public editButtonPressed: boolean;
    public wrestler: Wrestler;
    public shows: Show[];
    public championshipReigns: Paged<ChampionshipReign>;
    public championships: Paged<Championship>;
    public rivalries: Paged<Rivalry>;

    public championshipReignsColumns = [
        { name: 'Name', prop: 'name' },
        { name: 'Number of Reigns', prop: 'number_of_reigns' },
        { name: 'Days', prop: 'days' },
    ];

    public rivalriesColumns = [
        { name: 'Name', prop: 'name' },
        { name: 'Length', prop: 'length' },
        { name: 'Active', prop: 'active' },
    ];

    private routerSub: Subscription;

    constructor(private _router: Router,
                private _activatedRoute: ActivatedRoute,
                private _wrestlerService: WrestlerService,
                private _showService: ShowService,
                private _championshipService: ChampionshipService,
                private fb: FormBuilder) {
        this.form = fb.group({
          name: [null, Validators.compose([Validators.required])],
          hometown: [null, Validators.compose([Validators.required])],
          height: [null, Validators.compose([Validators.required])],
          weight: [null, Validators.compose([Validators.required])],
          show_id: [null]
        });
    }

    ngOnInit() {
        this.routerSub = this._activatedRoute.params.subscribe((params) => {
            const id = params['id'];
            if (id) {
                this.serviceGetById(id).add(() => {
                    this.serviceGetShows();
                    this.serviceGetRivalries(id);
                    this.serviceGetChampionshipReigns(id).add(() => {
                        this.serviceGetChampionships();
                    });
                });
            } else {
                this._router.navigate(['/wrestlers']);
            }
        });
        this.form.get('show_id').disable();
    }

    public edit(): void {
        this.editButtonPressed = true;
        this.form.get('show_id').enable();
    }

    public saveChanges(): void {
        this.editButtonPressed = false;
        this.form.get('show_id').disable();
        this.wrestler.name = this.form.value.name;
        this.wrestler.hometown = this.form.value.hometown;
        this.wrestler.height = this.form.value.height;
        this.wrestler.weight = this.form.value.weight;
        this.wrestler.show_id = this.form.value.show_id; // FIXME: Does not seem to be getting the show id selected from the dropdown.
        this.serviceUpdate(this.wrestler);
    }

    public cancelEdit(): void {
        this.editButtonPressed = false;
        this.form.get('show_id').disable();
        this.showData();
    }

    public delete(): void {
        this.serviceDelete(this.wrestler.id);
        this._router.navigate(['/wrestlers']); // wrestler no longer exists, so move back to the list component.
    }


    public showData(): void {
        this.form.setValue({
            name: this.wrestler.name,
            hometown: this.wrestler.hometown,
            weight: this.wrestler.weight,
            height: this.wrestler.height,
            show_id: this.wrestler.show_id
        });
    }

    private serviceGetById(id: number): Subscription {
        return this._wrestlerService.getWrestlerById(id).subscribe((data) => {
          this.wrestler = data;
          this.showData();
        });
    }

    private serviceUpdate(wrestler: Wrestler): Subscription {
        return this._wrestlerService.updateWrestler(wrestler).subscribe();
    }

    private serviceDelete(id: number): Subscription {
        return this._wrestlerService.deleteWrestler(id).subscribe();
    }

  private serviceGetShows(): Subscription {
      return this._showService.getAllShows().subscribe((data: Show[]) => {
          this.shows = data;
      });
  }

  private serviceGetChampionshipReigns(wrestlerId: number): Subscription {
      return this._wrestlerService.getChampionshipRegins(wrestlerId).subscribe(data => {
          this.championshipReigns = data;
          console.log(data);
      });
  }

  private serviceGetRivalries(wrestlerId: number): Subscription {
      return this._wrestlerService.getRivalries(wrestlerId).subscribe(data => {
          this.rivalries = data;
      });
  }

  private serviceGetChampionships(): Subscription {
        return this._championshipService.getChampionships(0).subscribe(data => {
            this.championships = data;

            // For each championship, if found in list of reigns, add the championship to the reign.
            data.data.forEach(championship => this.championshipReigns.data.filter(reign => {
                if (reign.championship_id === championship.id) {
                    reign.name = championship.name;
                    reign.championship = championship;
                    // FIXME Doesn't increment if more than one reign is found!
                    reign.number_of_reigns = !isNaN(reign.number_of_reigns) ?  reign.number_of_reigns + 1 : 1;
                    return reign;
                }
            }));
            console.log(this.championshipReigns.data);
        });
  }

}
