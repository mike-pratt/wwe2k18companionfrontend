import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { YesNoDialogModalComponent } from './yesnodialogmodal/yesnodialogmodal.component';
import { ModalModule, CollapseModule } from 'ngx-bootstrap';
import { DatatableComponent } from './datatable/datatable.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { DatatableModalComponent } from './modals/datatable-modal/datatable-modal.component';
import { AccordionCollapseComponent } from './accordion/accordion.component';


@NgModule({
    imports: [
        CommonModule,
        ModalModule,
        NgxDatatableModule,
        BrowserAnimationsModule,
        CollapseModule.forRoot()
    ],
    declarations: [CardComponent,
                  YesNoDialogModalComponent,
                  DatatableComponent,
                  DatatableModalComponent,
                  AccordionCollapseComponent
    ],
    exports: [    CardComponent,
                  YesNoDialogModalComponent,
                  DatatableComponent,
                  DatatableModalComponent,
                  AccordionCollapseComponent
    ]
})
export class ComponentsModule { }
