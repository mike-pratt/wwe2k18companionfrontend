import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Paged } from '../../../models/paged.model';
import { BaseModel } from '../../../models/base.model';
import { ModalDirective } from 'ngx-bootstrap';

@Component({
    selector: 'app-datatable-modal',
    templateUrl: './datatable-modal.component.html',
    styleUrls: ['./datatable-modal.component.css']
})
export class DatatableModalComponent {
    @Input('title') public title: string;
    @Input('columns') public columns: {};
    @Input('data') public data: Paged<BaseModel>;

    @Output('onRowClick') public onRowClick: EventEmitter<BaseModel> = new EventEmitter<BaseModel>();

    @ViewChild('modal', { static: true }) public modal: ModalDirective;

    public close(): void {
        this.modal.hide();
    }

    public open(): void {
        this.modal.show();
    }

    public saveSelection(model: BaseModel): void {
        this.onRowClick.emit(model);
        this.close();
    }
}
