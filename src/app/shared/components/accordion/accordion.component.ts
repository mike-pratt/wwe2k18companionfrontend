import { Component } from '@angular/core';

@Component({
    selector: 'app-accordion-collapse',
    templateUrl: './accordion.component.html',
    styleUrls: ['./accordion.component.css']
})
export class AccordionCollapseComponent {
    private isCollapsed: boolean;
}