import { Component, Input, Output, EventEmitter } from '@angular/core';
import { BaseModel } from '../../models/base.model';
import { Paged } from '../../models/paged.model';

@Component({
    selector: 'app-accordion-collapse',
    templateUrl: './accordion.component.html',
    styleUrls: ['./accordion.component.css']
})
export class AccordionCollapseComponent {
    @Input('title')
    public title: string;

    @Input('data')
    public data: Paged<BaseModel>;

    @Input('columns')
    public columns: any;

    @Output('onMultiSelect')
    public onMultiSelect: EventEmitter<BaseModel[]> = new EventEmitter<BaseModel[]>();
    
    private isCollapsed: boolean = true;

    public onMultiSelected(models: BaseModel[]) {
        this.onMultiSelect.emit(models);
    }
}