import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyUpdateComponent } from './company-update/company-update.component';
import { CompanyComponent } from './company/company.component';

const routes: Routes = [
  {
    path:'', component:CompanyComponent,
    children:[
      {
        path:'company-list', component:CompanyListComponent,
        children:[
          {
            path:'company-details/:id',component:CompanyDetailsComponent
          },
          {
            path:'company-update',component:CompanyUpdateComponent
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
export class CompanyRoutingModule { }
