import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { VerifyComponent } from './verify/verify.component';
import { ChangePasswordComponent } from './change-password/change-password.component';

export const userRoutes: Routes = [
  { path: 'verify', component: VerifyComponent },
  { path: 'password', component: ChangePasswordComponent },
]
@NgModule({
  declarations: [
    VerifyComponent,
    ChangePasswordComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(userRoutes)
  ],
  exports: [
    RouterModule,
  ]
})
export class ChangePasswordModule { }
