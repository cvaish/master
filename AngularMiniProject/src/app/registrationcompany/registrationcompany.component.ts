import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CommonService } from '../shared/common.service';

@Component({
  selector: 'app-registrationcompany',
  templateUrl: './registrationcompany.component.html',
  styleUrls: ['./registrationcompany.component.css']
})
export class RegistrationcompanyComponent implements OnInit {

  constructor(private fb:FormBuilder,private location:Location,private common:CommonService) { }
  
  registerForm:FormGroup;

  ngOnInit(): void {
    this.registerForm=this.fb.group({
      id:[],
      cname:[],
      email:[],
      mobile:[],
      username:[],
      password:[]

    })
  }
  onSubmit()
  {
  if(this.registerForm.valid)
  {
   console.log("submited company data");
   this.common.saveCompany(this.registerForm.value).subscribe();
   window.location.reload();
  }
  }

  goBack()
  {
   this.location.back();
  }
}
