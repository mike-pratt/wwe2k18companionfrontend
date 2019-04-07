import { Component, OnInit } from '@angular/core';
import { Paged } from '../../shared/models/paged.model';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Championship } from '../../shared/models/championships/championship.model';
import { ChampionshipService } from '../../shared/services/championships/championship.service';

@Component({
  selector: 'app-championships-list',
  templateUrl: './championships-list.component.html',
  styleUrls: ['./championships-list.component.css']
})
export class ChampionshipsListComponent implements OnInit {

    public pageOffset = 0;
    public columns = [
        { name: 'Championship Name', prop: 'name' },
    ];

    public championships: Paged<Championship>;

    constructor(private _championshipService: ChampionshipService,
                private _router: Router) {
    }

    ngOnInit() {
        this.serviceGetChampionships(0);
    }

    public goToPage(event): void {
        this.serviceGetChampionships(event.offset + 1);
    }

    public goToView(event: any): void {
        const championship = event.selected[0];
        this._router.navigate(['championships/view', championship.id]);
    }

    public createChampionship(show): void {
        this.serviceCreateChampionship(show).add(() => {
            this.serviceGetChampionships(this.pageOffset);
        });
    }

    private serviceGetChampionships(page: number): Subscription {
        return this._championshipService.getChampionships(page).subscribe((data: Paged<Championship>) => {
            this.championships = data;
        });
    }

    private serviceCreateChampionship(championship: Championship): Subscription {
        return this._championshipService.createChampionship(championship).subscribe();
    }

}
