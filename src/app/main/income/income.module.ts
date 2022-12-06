import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentIncomeComponent } from './student-income/student-income.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgPrimeModule } from 'src/app/ng-prime.module';


export const incomeRoutes: Routes = [
  { path: 'student', component: StudentIncomeComponent },
]
@NgModule({
  declarations: [StudentIncomeComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(incomeRoutes),
    NgPrimeModule
  ],
  exports: [
    // NgPrimeModule
  ]
})
export class IncomeModule { }
