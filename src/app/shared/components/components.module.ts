import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { YesNoDialogModalComponent } from './yesnodialogmodal/yesnodialogmodal.component';
import { ModalModule } from 'ngx-bootstrap';
import { DatatableComponent } from './datatable/datatable.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { DatatableModalComponent } from './modals/datatable-modal/datatable-modal.component';

@NgModule({
    imports: [
        CommonModule,
        ModalModule,
        NgxDatatableModule
    ],
    declarations: [CardComponent,
                  YesNoDialogModalComponent,
                  DatatableComponent,
                  DatatableModalComponent,
    ],
    exports: [    CardComponent,
                  YesNoDialogModalComponent,
                  DatatableComponent,
                  DatatableModalComponent,
    ]
})
export class ComponentsModule { }
