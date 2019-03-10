import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';
import { IModal } from '../../../shared/components/modals/IModal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Show } from '../../../shared/models/shows/show.model';

@Component({
  selector: 'app-shows-create',
  templateUrl: './shows-create.component.html',
  styleUrls: ['./shows-create.component.css']
})
export class ShowsCreateComponent implements OnInit, IModal {

    @Output()
    public confirmPressed: EventEmitter<Show> = new EventEmitter<Show>();

    @ViewChild('createModal')
    public createModal: ModalDirective;

    public showForm: FormGroup;

    constructor(private _fb: FormBuilder) {
        this.showForm = this._fb.group({
            name: [null, Validators.compose([Validators.required])],
            primary_display: [null]
        });
    }

    ngOnInit() {
    }

    public openModal(): void {
        this.createModal.show();
    }

    public closeModal(): void {
        this.createModal.hide();
    }

    public createShow(): void {
        const show = new Show({
            id: undefined,
            name: this.showForm.value.name,
            primary_display: null
        });
        show.primary_display = this.showForm.value.primary_display !== null ? 1 : 0;

        this.confirmPressed.emit(show);
        this.closeModal();
    }

}
