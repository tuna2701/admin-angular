import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './student/student.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgPrimeModule } from 'src/app/ng-prime.module';
import { PlanComponent } from './plan/plan.component';
import { ConsultancyComponent } from './consultancy/consultancy.component';
import { RecordComponent } from './record/record.component';
import { CommissionComponent } from './commission/commission.component';
import { ContractComponent } from './contract/contract.component';
export const userRoutes: Routes = [
  { path: '', component: UserComponent },
  { path: 'plan', component: PlanComponent },
  { path: 'consultancy', component: ConsultancyComponent },
  { path: 'record', component: RecordComponent },
  { path: 'contract', component: ContractComponent },
  { path: 'commission', component: CommissionComponent },
]
@NgModule({
  declarations: [
    UserComponent,
    PlanComponent,
    ConsultancyComponent,
    RecordComponent,
    CommissionComponent,
    ContractComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(userRoutes),  
    NgPrimeModule
  ],
  exports: [
    NgPrimeModule
  ]
})
export class UserModule { }
