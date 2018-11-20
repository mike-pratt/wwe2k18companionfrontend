import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { YesNoDialogModalComponent } from './yesnodialogmodal/yesnodialogmodal.component';
import { ModalModule } from 'ngx-bootstrap';

@NgModule({
    imports: [
        CommonModule,
        ModalModule
    ],
    declarations: [CardComponent,
      YesNoDialogModalComponent],
    exports: [CardComponent,
      YesNoDialogModalComponent]
})
export class ComponentsModule { }
