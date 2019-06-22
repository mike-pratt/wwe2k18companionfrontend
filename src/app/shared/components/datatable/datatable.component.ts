import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BaseModel } from '../../models/base.model';
import { Paged } from '../../models/paged.model';


@Component({
    selector: 'app-data-table',
    templateUrl: './datatable.component.html',
    styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit {

    @Input('paginatedData')
    public paginatedData: Paged<BaseModel>;

    @Input('columns')
    public columns: any;

    @Output('onPageChange')
    public onPageChange: EventEmitter<number> = new EventEmitter<number>();

    @Output('onRowClick')
    public onRowClick: EventEmitter<BaseModel> = new EventEmitter<BaseModel>();

    public pageOffset = 0;

    public ngOnInit(): void {
    }

    public goToPage(event: any): void {
        this.onPageChange.emit(event.offset + 1);
    }

    public goToView(event: any): void {
        const model = event.selected[0];
        this.onRowClick.emit(model);
    }
}
