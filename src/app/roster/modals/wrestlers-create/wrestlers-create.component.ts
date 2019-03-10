import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';
import { IModal } from '../../../shared/components/modals/IModal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Wrestler } from '../../../shared/models/roster/wrestler.model';

@Component({
    selector: 'app-wrestlers-create',
    templateUrl: './wrestlers-create.component.html',
    styleUrls: ['./wrestlers-create.component.css']
})
export class WrestlersCreateComponent implements OnInit, IModal {

    @Output()
    public confirmPressed: EventEmitter<Wrestler> = new EventEmitter<Wrestler>();

    @ViewChild('createModal')
    public createModal: ModalDirective;

    public wrestlerForm: FormGroup;

    constructor(private _fb: FormBuilder) {
        this.wrestlerForm = this._fb.group({
            name: [null, Validators.compose([Validators.required])],
            hometown: [null, Validators.compose([Validators.required])],
            height: [null, Validators.compose([Validators.required])],
            weight: [null, Validators.compose([Validators.required])],
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

    public createWrestler(): void {
        const wrestler = new Wrestler({
            id: undefined,
            name: this.wrestlerForm.value.name,
            hometown: this.wrestlerForm.value.hometown,
            height: this.wrestlerForm.value.height,
            weight: this.wrestlerForm.value.weight
        });

        this.confirmPressed.emit(wrestler);
        this.closeModal();
    }

}
