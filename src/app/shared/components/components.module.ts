import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { YesnodialogmodalComponent } from './yesnodialogmodal/yesnodialogmodal.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CardComponent, YesNoDialogModalComponent],
  exports: [CardComponent]
})
export class ComponentsModule { }
