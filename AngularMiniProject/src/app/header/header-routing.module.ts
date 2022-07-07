import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from '../about-us/about-us.component';
import { DashboardComponent } from '../dashboard/dashboard.component';

export const  headerRoute: Routes = [
  {
    path:'dashboard',component:DashboardComponent
  },
  {
    path:'about-us',component:AboutUsComponent
  },
  {
    path:'company',
    loadChildren:()=>import('src/app/company/company.module').then(module=>module.CompanyModule)
  },
  {
    path:'employee',
    loadChildren:()=>import('src/app/employee/employee.module').then(module=>module.EmployeeModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(headerRoute)],
  exports: [RouterModule]
})
export class HeaderRoutingModule { }
