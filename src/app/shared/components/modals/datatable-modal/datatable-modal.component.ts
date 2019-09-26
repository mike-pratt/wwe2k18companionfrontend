import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Paged } from '../../../models/paged.model';
import { BaseModel } from '../../../models/base.model';
import { ModalDirective } from 'ngx-bootstrap';

@Component({
    selector: 'app-datatable-modal',
    templateUrl: './datatable-modal.component.html',
    styleUrls: ['./datatable-modal.component.css']
})
export class DatatableModalComponent implements OnInit {
    @Input('title') public title: string;
    @Input('columns') public columns: {};
    @Input('data') public data: Paged<BaseModel>;

    @ViewChild('modal', { static: true }) public modal: ModalDirective;

    public ngOnInit(): void {
        console.log('Data = ', this.data);
    }

    public close(): void {
        this.modal.hide();
    }

    public open(): void {
        this.modal.show();
    }

    public saveSelection(): void {
        
    }
}
