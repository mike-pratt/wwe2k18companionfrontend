import { Component, EventEmitter, OnInit, Output, Input} from '@angular/core';

@Component({
  selector: 'app-yesnodialogmodal',
  templateUrl: './yesnodialogmodal.component.html',
  styleUrls: ['./yesnodialogmodal.component.css']
})
export class YesNoDialogModalComponent implements OnInit {

    @Output()
    public confirmPressed: EventEmitter<void> = new EventEmitter<void>();

    @Output()
    public cancelPressed: EventEmitter<void> = new EventEmitter<void>();

    @Input()
    public modalText: string;

    constructor() { }

    public ngOnInit(): void {
    }

    public confirm(): void {
        this.confirmPressed.emit();
    }

    public cancel(): void {
        this.cancelPressed.emit();
    }

}
