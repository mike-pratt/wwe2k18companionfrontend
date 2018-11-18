import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { ShowServiceService } from '../../shared/services/shows/show-service.service';
import { Show } from '../../shared/models/shows/show.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-shows-view',
  templateUrl: './shows-view.component.html',
  styleUrls: ['./shows-view.component.css']
})
export class ShowsViewComponent implements OnInit {

    public showForm: FormGroup;
    public editButtonPressed: boolean;
    public show: Show;

    private routerSub: Subscription;

    constructor(private _router: Router,
                private _activatedRoute: ActivatedRoute,
                private _showService: ShowServiceService,
                private fb: FormBuilder) {
        this.showForm = fb.group({
            name: [null, Validators.compose([Validators.required])],
            primary_display: [null]
        });
    }

    ngOnInit() {
        this.routerSub = this._activatedRoute.params.subscribe((params) => {
            let showId = params['id'];
            if (showId) {
                this.serviceGetShow(showId);
            } else {
                this._router.navigate(['/shows']);
            }
        });
    }

    public editShow(): void {
      this.editButtonPressed = true;
    }

    public saveShow(): void {
        this.editButtonPressed = false;
        // let show = this.showForm
    }

    public cancelEditShow(): void {
      this.editButtonPressed = false;
      // this.showForm.reset();
    }

    private showData(): void {
        this.showForm.setValue({
            name: this.show.name,
            primary_display: this.show.primary_display
        });
    }

    private serviceGetShow(showId: number): Subscription {
        return this._showService.getById(showId).subscribe((data) => {
            this.show = data;
            console.log(this.show);
            this.showData();
        });
    }

}
