import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeComponent } from './employee/employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';

const routes: Routes = [
  {
    path:'',component:EmployeeComponent,
     //first child of employee l
    children:[
      {
        path:'employee-list',component:EmployeeListComponent,
        //first child of employee list
        children:[
        {
          path:'employeedetails/:id',component:EmployeeDetailsComponent
        },
        {
          path:'update-emp',component:UpdateEmployeeComponent
        }
      ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
