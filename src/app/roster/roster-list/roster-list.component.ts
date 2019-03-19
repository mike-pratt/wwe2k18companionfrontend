import { Component, OnInit } from '@angular/core';
import { Paged } from '../../shared/models/paged.model';
import { Wrestler } from '../../shared/models/roster/wrestler.model';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { WrestlerService } from '../../shared/services/roster/wrestler.service';

@Component({
  selector: 'app-roster-list',
  templateUrl: './roster-list.component.html',
  styleUrls: ['./roster-list.component.css']
})
export class RosterListComponent implements OnInit {

    public pageOffset = 0;
    public columns = [
        { name: 'Name', prop: 'name' },
        { name: 'Hometown', prop: 'hometown' },
        { name: 'Height', prop: 'height' },
        { name: 'Weight', prop: 'weight' }
    ];

    public wrestlers: Paged<Wrestler>;

    constructor(private _wrestlerService: WrestlerService,
                private _router: Router) {
    }

    ngOnInit() {
        this.serviceGetWrestlers(0);
    }

    public goToPage(event): void {

    }

    public goToView(event: any): void {
        const wrestler = event.selected[0];
        this._router.navigate(['wrestler', wrestler.id]);
    }

    public createWrestler(show): void {
        this.serviceCreateShow(show).add(() => {
            this.serviceGetWrestlers(this.pageOffset);
        });
    }

    private serviceGetWrestlers(page: number): Subscription {
        return this._wrestlerService.getWrestlers(page).subscribe((data: Paged<Wrestler>) => {
            console.log(data);
            this.wrestlers = data;
        });
    }

    private serviceCreateShow(wrestler: Wrestler): Subscription {
        return this._wrestlerService.createWrestler(wrestler).subscribe();
    }

}
