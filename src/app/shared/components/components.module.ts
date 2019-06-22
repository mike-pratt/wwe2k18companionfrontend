import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { YesNoDialogModalComponent } from './yesnodialogmodal/yesnodialogmodal.component';
import { ModalModule } from 'ngx-bootstrap';
import { DatatableComponent } from './datatable/datatable.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
    imports: [
        CommonModule,
        ModalModule,
        NgxDatatableModule
    ],
    declarations: [CardComponent,
                  YesNoDialogModalComponent,
                  DatatableComponent
    ],
    exports: [    CardComponent,
                  YesNoDialogModalComponent,
                  DatatableComponent
    ]
})
export class ComponentsModule { }
