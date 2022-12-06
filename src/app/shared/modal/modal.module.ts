import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommissionComponent } from './commission/commission.component';



@NgModule({
  declarations: [CommissionComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CommissionComponent
  ]
})
export class Modal { }
