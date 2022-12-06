import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InputTextModule} from 'primeng/inputtext';
import {TableModule} from 'primeng/table';
import {PanelModule} from 'primeng/panel';
import {CalendarModule} from 'primeng/calendar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {DropdownModule} from 'primeng/dropdown';
import {FileUploadModule} from 'primeng/fileupload';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { FileNotFoundComponent } from './file-not-found/file-not-found.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {EditorModule} from 'primeng/editor';
import {Modal} from './modal/modal.module';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import { ProfileComponent } from '../main/profile/profile.component';
import { CardModule } from 'primeng/card';
import { NgPrimeModule } from '../ng-prime.module';

@NgModule({
  declarations: [ 
    UnauthorizedComponent, 
    FileNotFoundComponent, ProfileComponent
  ],
  imports: [
    FormsModule,
    PanelModule,
    TableModule,
    InputTextModule,
    CommonModule,
    CalendarModule,
    DropdownModule,
    FileUploadModule,
    ReactiveFormsModule,
    NgbModule,
    EditorModule,
    Modal,
    ProgressSpinnerModule,
    // CardModule,
    NgPrimeModule,
  ],
  exports: [
    ReactiveFormsModule,
    FormsModule,
    PanelModule,
    TableModule,
    InputTextModule,
    CommonModule,
    CalendarModule,
    DropdownModule,
    FileUploadModule,
    NgbModule,
    EditorModule,
    Modal,
    ProgressSpinnerModule,
    // CardModule,
    NgPrimeModule,
  ],
})
export class SharedModule { }
