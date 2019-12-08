import { Component, Input } from '@angular/core';
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
    
    private isCollapsed: boolean = true;
}