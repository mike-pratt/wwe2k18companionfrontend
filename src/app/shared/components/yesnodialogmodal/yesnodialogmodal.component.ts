import { Component, EventEmitter, OnInit, Output, Input, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';
import { IModal } from '../modals/IModal';

@Component({
  selector: 'app-yesnodialogmodal',
  templateUrl: './yesnodialogmodal.component.html',
  styleUrls: ['./yesnodialogmodal.component.css']
})
export class YesNoDialogModalComponent implements OnInit, IModal {

    @Output()
    public confirmPressed: EventEmitter<void> = new EventEmitter<void>();

    @Output()
    public cancelPressed: EventEmitter<void> = new EventEmitter<void>();

    @Input()
    public title: string;

    @Input()
    public message: string;

    @ViewChild('yesNoModal') public yesNoModal: ModalDirective;

    constructor() { }

    public ngOnInit(): void {
    }

    public confirm(): void {
        this.confirmPressed.emit();
        this.closeModal();
    }

    public cancel(): void {
        this.closeModal();
        // this.cancelPressed.emit();
    }

    public openModal(): void {
        this.yesNoModal.show();
    }

    public closeModal(): void {
        this.yesNoModal.hide();
    }

}
