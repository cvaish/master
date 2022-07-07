import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { headerRoute } from './header/header-routing.module';
import { HeaderComponent } from './header/header/header.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { RegistrationcompanyComponent } from './registrationcompany/registrationcompany.component';

const routes: Routes = [
  // {
  //   path:' ',redirectTo:'login',pathMatch:'full'
  // },
  
  {
    path:'',component:LoginComponent
  },
  {
    path:'login/header',component:HeaderComponent,children:headerRoute
  },
  {
  path:'login/register',component:RegistrationComponent
  },
  {
    path:'login/registercom',component:RegistrationcompanyComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
