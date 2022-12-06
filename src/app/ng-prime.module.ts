import { NgModule } from '@angular/core';
import {PaginatorModule} from 'primeng/paginator';
import {EditorModule} from 'primeng/editor';
import {ToastModule} from 'primeng/toast';
import {CardModule} from 'primeng/card';
import {StepsModule} from 'primeng/steps';
import {PasswordModule} from 'primeng/password';

@NgModule({
  imports: [   
    PaginatorModule,
    EditorModule,
    ToastModule,
    CardModule,
    StepsModule,
    PasswordModule
    ],
  exports: [
    PaginatorModule,
    EditorModule,
    ToastModule,
    CardModule,
    StepsModule,
    PasswordModule
  ]
})
export class NgPrimeModule { }
