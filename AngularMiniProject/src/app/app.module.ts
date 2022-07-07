import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CompanyModule } from './company/company.module';
import { EmployeeModule } from './employee/employee.module';
import { HeaderModule } from './header/header.module';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { RegistrationcompanyComponent } from './registrationcompany/registrationcompany.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    RegistrationComponent,
    AboutUsComponent,
    RegistrationcompanyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // CompanyModule,
    // EmployeeModule,
    HeaderModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
